import jwt from 'jsonwebtoken'
export const tokenGenerator = (id) => {
	try {
		const token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '1d' })
		return token
	} catch (err) {
		console.log(err)
		throw new Error(`Error en la generacion del token ${err}`)
	}
}
