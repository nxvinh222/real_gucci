import { Schema, model } from "mongoose";


const UserSchmema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	name: {
		type: String,
		require: true
	},
	phone: String,
	age: Number,
	admin: Boolean
})


export default model('User', UserSchmema)