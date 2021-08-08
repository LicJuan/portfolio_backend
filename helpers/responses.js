export const successResponse = (res, data = '', code = 200) => {
	res.status(code).json({ data })
}

export const errorResponse = (res, message = '', code = 500) => {
	res.status(code).json({ message })
}
