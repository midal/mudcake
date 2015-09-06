from flask import Flask, jsonify, abort, make_response
from flask.ext.restful import Api, Resource, reqparse, fields, marshal
from flask.ext.httpauth import HTTPBasicAuth

app = Flask(__name__, static_url_path = "")
api = Api(app)
auth = HTTPBasicAuth()

users = [
	{
		'id' : 1,
		'name' : 'Emma',
		'age' : 25,
		'happy' : False
	},
	{
		'id' : 2,
		'name' : 'Mikael',
		'age' : 29,
		'happy' : True
	}
]

user_fields = {
	'name' : fields.String,
	'age' : fields.Integer
}


class UserAPI(Resource):
	def __init__(self):
		self.reqparse = reqparse.RequestParser()
		self.reqparse.add_argument('id', type = int, required = True, help = 'No user id provided', location = 'json')
		super(UserAPI, self).__init__()

	def get(self, id):
		user = [user for user in users if user['id'] == id]
		if len(user) == 0:
			abort(404)
		user = user[0]
		return {'user' : marshal(user, user_fields)}

api.add_resource(UserAPI, '/api/users/<int:id>', endpoint = 'user')


if __name__ == '__main__':
    app.run(debug=True)

print('Python API - DONE')
