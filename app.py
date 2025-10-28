from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    
    # Here you would typically process the form data
    # For now, we'll just return a success response
    return jsonify({
        'success': True,
        'message': f'Thank you {name}! Your message has been received.'
    })

if __name__ == '__main__':
    app.run(debug=True)