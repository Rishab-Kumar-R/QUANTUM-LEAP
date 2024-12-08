from flask import Flask, request, jsonify
from PIL import Image
from io import BytesIO
from chatbot import ImageChatBot

app = Flask(__name__)
chatbot = ImageChatBot()


@app.route('/chat', methods=['POST'])
def chat_with_image():
    try:
        # Get the image and question from the request
        image_file = request.files.get('image')
        question = request.form.get('query')

        if not image_file or not question:
            return jsonify({"error": "Please provide both an image and a question"}), 400

        # Open and process the image
        image_pil = Image.open(BytesIO(image_file.read())).convert("RGB")
        image_features = chatbot.process_image(image_pil)

        if not image_features:
            return jsonify({"error": "Unable to process the image. Please try again."}), 400

        # Generate a response
        response = chatbot.generate_response(image_features, question)
        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
