import { Schema, model } from 'mongoose'
import slugify from 'slugify'

const CategorySchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
			unique: [true, 'El nombre ya existe']
		},
		slug: {
			type: String
		},
		status: {
			type: Boolean,
			default: true
		}
	},
	{ timestamps: true }
)

CategorySchema.pre('save', function (next) {
	this.slug = slugify(this.name, { lower: true })
	next()
})

export default model('Category', CategorySchema)
