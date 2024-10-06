from flask import Flask

app = Flask(__name__)

# Define the route that will print "hi from python"
@app.route('/run-script', methods=['POST'])
def run_script():
    print("hi from python")
    return "Script executed!", 200

if __name__ == '__main__':
    app.run(debug=True)
