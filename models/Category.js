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
		}
	},
	{ timestamps: true }
)

CategorySchema.pre('save', function (cat) {
	cat.slug = slugify(cat.name)
})

export default model('Category', CategorySchema)
