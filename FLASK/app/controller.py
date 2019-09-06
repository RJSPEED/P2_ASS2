
from flask import Flask, render_template, request, redirect, session, jsonify

app = Flask(__name__)
app.secret_key = "The session needs this!"

@app.route('/', methods=['GET'])
def part_one():           
    return jsonify({'message':'hello'})

@app.route('/sum', methods=['POST'])
def part_two():
    if not request.json or 'values' not in request.json:
        return jsonify({"error": "bad request"}), 400
    
    value_list = request.json['values']
    sum = 0

    for i in range(len(value_list)):
        sum += value_list[i]

    return jsonify({'sum':sum})

def run():
    app.run(debug=True)
