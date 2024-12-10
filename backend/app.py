# from flask import Flask, request, jsonify
# from PIL import Image
# from io import BytesIO
# from chatbot import ImageChatBot


# app = Flask(__name__)
# chatbot = ImageChatBot()


# @app.route('/chat', methods=['POST'])
# def chat_with_image():
#     try:
#         # Get the image and question from the request
#         image_file = request.files.get('image')
#         question = request.form.get('query')

#         if not image_file or not question:
#             return jsonify({"error": "Please provide both an image and a question"}), 400

#         # Open and process the image
#         image_pil = Image.open(BytesIO(image_file.read())).convert("RGB")
#         image_features = chatbot.process_image(image_pil)

#         if not image_features:
#             return jsonify({"error": "Unable to process the image. Please try again."}), 400

#         # Generate a response
#         response = chatbot.generate_response(image_features, question)
#         return jsonify({"response": response})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from io import BytesIO
import logging
from chatbot import ImageChatBot

# Initialize the Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# Initialize the chatbot model
chatbot = ImageChatBot()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@app.route('/chat', methods=['POST'])
def chat_with_image():
    try:
        logger.info("Received a POST request at /chat")

        # Extract image and question from the request
        image_file = request.files.get('image')
        question = request.form.get('query')

        if not image_file or not question:
            logger.error("Missing image or question in the request")
            return jsonify({"error": "Please provide both an image and a question"}), 400

        # Process the image
        try:
            image_pil = Image.open(BytesIO(image_file.read())).convert("RGB")
        except Exception as e:
            logger.error(f"Error opening image: {e}")
            return jsonify({"error": "Invalid image format. Please upload a valid image."}), 400

        # Extract features and generate a response
        image_features = chatbot.process_image(image_pil)

        if not image_features:
            logger.error("Image processing failed")
            return jsonify({"error": "Unable to process the image. Please try again."}), 400

        response = chatbot.generate_response(image_features, question)
        logger.info(f"Generated response: {response}")

        return jsonify({"response": response})

    except Exception as e:
        logger.exception("An unexpected error occurred")
        return jsonify({"error": f"Server error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
