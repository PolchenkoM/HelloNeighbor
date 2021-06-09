const { model, Schema } = require("mongoose")

const userSchema = new Schema({
	name: String,
	password: String,
	profileId: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	age: String,
	gender: String,

	tags: [
		{
			type: Schema.Types.ObjectId,
			ref: "Tag"
		}
	],
	aboutSelf: String,
	rating: Number,
	regDate: Date,
	friends: [
		{
			type: Schema.Types.ObjectId,
			ref: "User"
		}
	],
	history: [
		{
			type: Schema.Types.ObjectId,
			ref: "Event"
		}
	],
	avatar: {
		type: String
	},
	address: {
		type: String,
		default: "Moskow"
	},
	coordinates: {
		x: Number,
		y: Number
	},
	instagram: String,
	facebook: String
})

const User = model("User", userSchema)

module.exports = User
