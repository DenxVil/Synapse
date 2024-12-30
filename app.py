
from flask import Flask, request, jsonify, url_for
import secrets
from datetime import datetime

app = Flask(__name__)

# Randomly generated secret key
secret_key = 'GxW5Z8vW5w9VxW5Z8v'
app.config['SECRET_KEY'] = secret_key

@app.route('/', methods=['GET'])
def index():
    return '''
    <html>
        <head>
            <title>Synapse</title>
        </head>
        <body>
            <h1>Synapse</h1>
            <form id="contact-form" method="post" action="{{ url_for('handle_submission') }}">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea><br><br>
                <button type="submit">Send</button>
            </form>
        </body>
    </html>
    '''

@app.route('/submit', methods=['POST'])
def handle_submission():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Validate user input
        if not all([name, email, message]):
            return jsonify({'message': 'Please fill in all fields'}), 400

        # Write message to file
        with open('messages.txt', 'a') as file:
            file.write(f"Timestamp: {datetime.now()}\nName: {name}\nEmail: {email}\nMessage: {message}\n\n")

        return jsonify({'message': 'Form submitted successfully!'})
    except Exception as e:
        return jsonify({'message': 'An error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
