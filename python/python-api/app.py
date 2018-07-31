
""" from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"about":"hello world"})

if __name__ == '__main__':
    app.run(debug =True)
"""


from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if(request.method == 'POST'):
        some_json = request.get_json()
        return {"you sent":some_json}, 201
    else:
        return jsonify({'about': "welcome to earth"})


@app.route('/multi/<int:num>', methods=['GET'])
def get_multiply10(num):
    return jsonify({'result': num*10})
        




if __name__ == '__main__':
    app.run(debug =True)
