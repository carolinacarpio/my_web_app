import base64
from flask import Flask, request, jsonify
from flask_cors import CORS  # Allows cross-origin requests
from flask import send_from_directory

# Initialize the Flask app
app = Flask(__name__)
CORS(app)

# Route for handling POST requests from the front end
@app.route('/run-script', methods=['POST'])
def run_script():
    # Get the JSON data from the request
    data = request.get_json()

    # Extract the selected planet from the request
    planet = data.get('planet', None)

    # Log to the console (for debugging)
    print(f"Exploring: {planet}")

    # Return a JSON response back to the front end
    if planet:
        image_path = "images/from_earth.jpg"  # Update the path to your image

        # Read and encode the image in Base64
        with open(image_path, "rb") as image_file:
            base64_image = base64.b64encode(image_file.read()).decode('utf-8')

        return jsonify({
            'message': f"Successfully exploring {planet}",
            'planet': planet,
            'image_data': base64_image  # Add the Base64-encoded image here
        })
    else:
        return jsonify({
            'error': 'Planet not provided'
        }), 400  # HTTP status code 400 (Bad Request)

# Main function to run the app
if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode
