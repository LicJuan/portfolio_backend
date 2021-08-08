import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio']
		},
		username: {
			type: String,
			required: [true, 'El nombre de usuario es obligatorio'],
			unique: true
		},
		email: {
			type: String,
			// required: [true, 'El email es obligatorio'],
			unique: true
		},
		password: {
			type: String,
			required: [true, 'La contrasena es obligatoria']
		},
		status: {
			type: Boolean,
			default: true
		}
	},
	{
		timestamps: true
	}
)

UserSchema.methods.toJSON = function () {
	const { __v, password, ...user } = this.toObject()
	return user
}

export default model('User', UserSchema)
