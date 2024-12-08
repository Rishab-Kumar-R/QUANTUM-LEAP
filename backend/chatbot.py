from PIL import Image
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from transformers import AutoTokenizer, AutoModelForCausalLM
import requests
import json


class ImageChatBot:
    def __init__(self):
        self.cnn_model = models.resnet152(pretrained=True)
        self.cnn_model.eval()

        self.labels = self._load_imagenet_labels()
        self.transform = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])
        self.tokenizer = AutoTokenizer.from_pretrained("gpt2-medium")
        self.tokenizer.pad_token = self.tokenizer.eos_token
        self.nlp_model = AutoModelForCausalLM.from_pretrained("gpt2-medium")

    def _load_imagenet_labels(self):
        labels_path = "https://raw.githubusercontent.com/anishathalye/imagenet-simple-labels/master/imagenet-simple-labels.json"
        try:
            response = requests.get(labels_path)
            return json.loads(response.text)
        except:
            return [f"class_{i}" for i in range(1000)]

    def process_image(self, image: Image.Image):
        image_tensor = self.transform(image).unsqueeze(0)
        with torch.no_grad():
            outputs = self.cnn_model(image_tensor)
            probabilities = torch.nn.functional.softmax(outputs[0], dim=0)

        top_probs, top_indices = torch.topk(probabilities, 5)
        results = [{"class": self.labels[idx], "probability": float(
            prob)} for prob, idx in zip(top_probs, top_indices)]
        return results

    def generate_response(self, image_features, user_query):
        if not image_features:
            return "I apologize, but I'm having trouble processing this image."

        top_class = image_features[0]['class']
        confidence = image_features[0]['probability']
        other_objects = [f['class']
                         for f in image_features[1:] if f['probability'] > 0.1]

        prompt = (
            f"In this image, I can see a {top_class} with {
                confidence:.1%} confidence. "
            f"I also notice {', '.join(
                other_objects) if other_objects else 'no other significant objects'}. "
            f"Question: {user_query}\nDetailed answer:"
        )

        inputs = self.tokenizer(
            prompt, return_tensors="pt", padding=True, truncation=True)
        outputs = self.nlp_model.generate(
            inputs.input_ids,
            max_length=200,
            num_return_sequences=1,
            temperature=0.8,
            top_p=0.9,
            top_k=40,
            no_repeat_ngram_size=2,
            pad_token_id=self.tokenizer.eos_token_id
        )
        response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        response = response.split("Detailed answer:")[-1].strip()

        if len(response) < 20:
            response = f"I can see a {top_class} in this image. Based on your question: {user_query}, " \
                f"I observe that {', '.join(
                    other_objects) if other_objects else 'no other significant objects are visible'}."

        return response
