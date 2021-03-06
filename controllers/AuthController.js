import bcrypt from 'bcryptjs'
import { errorResponse, successResponse } from '../helpers/responses'
import { tokenGenerator } from '../helpers/tokenGenerator'
import User from '../models/User'

export const login = async (req, res) => {
	const { username, password } = req.body
	try {
		const user = await User.findOne({ username })
		if (!user) return errorResponse(res, 'Las credenciales no son validas', 404)
		const decrypt = bcrypt.compareSync(password, user.password)
		if (!decrypt)
			return errorResponse(res, 'Las credenciales no son validas', 404)
		const token = tokenGenerator(user._id)
		return successResponse(res, { user, token })
	} catch (err) {
		return errorResponse(res, err)
	}
}
