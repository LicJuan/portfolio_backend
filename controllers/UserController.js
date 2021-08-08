import { passwordEncrypt } from '../helpers/passwordEncrypt'
import { errorResponse, successResponse } from '../helpers/responses'
import User from '../models/User'

export const allUsers = async (req, res) => {
	try {
		const users = await User.find()
		return successResponse(res, users)
	} catch (err) {
		return errorResponse(res, err)
	}
}

export const addUser = async (req, res) => {
	const body = req.body
	try {
		const user = new User(body)
		user.password = await passwordEncrypt(body.password)
		await user.save()
		return successResponse(res, user)
	} catch (err) {
		return errorResponse(res, err)
	}
}

export const singleUser = async (req, res) => {
	const { id } = req.params
	try {
		const user = await User.findById(id)
		if (!user)
			return errorResponse(res, { message: 'Usuario no encontrado' }, 404)
		return successResponse(res, user)
	} catch (err) {
		return errorResponse(res, err)
	}
}

export const updateUser = async (req, res) => {
	const { id } = req.params
	const { password, ...body } = req.body
	try {
        if (password) body.password = await passwordEncrypt(password)
		const user = await User.findByIdAndUpdate(id, body)
		return successResponse(res, user)
	} catch (err) {
		return errorResponse(res, err)
	}
}

export const deactivateUser = async (req, res) => {
	const { id } = req.params
	try {
		const user = await findByIdAndUpdate(id, { status: true })
		return successResponse(res, user)
	} catch (err) {
		return errorResponse(res, err)
	}
}

export const activateUser = async (req, res) => {
	const { id } = req.params
	try {
		const user = await findByIdAndUpdate(id, { status: true })
		return successResponse(res, user)
	} catch (err) {
		return errorResponse(res, err)
	}
}

export const deleteUser = async (req, res) => {
	const { id } = req.params
	try {
		await User.findByIdAndDelete(id)
		return successResponse(res, 'El usuario ha sido eliminado')
	} catch (err) {
		return errorResponse(res, err)
	}
}
