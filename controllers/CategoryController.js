import { errorResponse, successResponse } from '../helpers/responses'
import Category from '../models/Category'
import slugify from 'slugify'

export const allCategories = async (req, res) => {
	try {
		const categories = await Category.find({ status: true })
		// const count = await Category.countDocuments()
		const data = {
			count: categories.length,
			categories
		}
		return successResponse(res, data)
	} catch (err) {
		return errorResponse(res, err.message)
	}
}

export const addCategory = async (req, res) => {
	const body = req.body
	try {
		const category = new Category(body)
		await category.save()
		return successResponse(res, category)
	} catch (err) {
		return errorResponse(res, err.message)
	}
}

export const singleCategory = async (req, res) => {
	const { id } = req.params
	try {
		const category = await Category.findById(id)
		if (!category)
			return errorResponse(res, { message: 'Categoria no encontrada' }, 404)
		return successResponse(res, category)
	} catch (err) {
		return errorResponse(res, err.message)
	}
}

export const updateCategory = async (req, res) => {
	const { id } = req.params
	const body = req.body
	try {
		body.slug = slugify(body.name, { lower: true })
		const category = await Category.findByIdAndUpdate(id, body, { new: true })
		return successResponse(res, category)
	} catch (err) {
		return errorResponse(res, err.message)
	}
}

export const deactivateCategory = async (req, res) => {
	const { id } = req.params
	try {
		const category = await Category.findByIdAndUpdate(
			id,
			{ status: false },
			{ new: true }
		)
		return successResponse(res, category)
	} catch (err) {
		return errorResponse(res, err.message)
	}
}

export const activateCategory = async (req, res) => {
	const { id } = req.params
	try {
		const category = await Category.findByIdAndUpdate(
			id,
			{ status: true },
			{ new: true }
		)
		return successResponse(res, category)
	} catch (err) {
		return errorResponse(res, err.message)
	}
}

export const deleteCategory = async (req, res) => {
	const { id } = req.params
	try {
		await Category.findByIdAndDelete(id)
		return successResponse(res, 'La categoria ha sido eliminado')
	} catch (err) {
		return errorResponse(res, err.message)
	}
}
