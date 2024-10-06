from flask import Flask, request, jsonify
from flask_cors import CORS  # Allow cross-origin requests

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/run-script', methods=['POST'])
def run_script():
    data = request.get_json()  # Get the data from the request
    planet = data.get('planet')  # Extract the planet name
    print(f"Exploring: {planet}")  # This will print the name of the planet to the console
    return jsonify(message="Script executed!", planet=planet), 200

if __name__ == '__main__':
    app.run(debug=True)
