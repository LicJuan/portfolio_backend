import bcrypt from 'bcryptjs'
export const passwordEncrypt = (password) => {
	try {
		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(password, salt)
		return hash
	} catch (err) {
		console.log(err)
	}
}
