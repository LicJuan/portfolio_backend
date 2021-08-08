import { connect, connection } from 'mongoose'
export const dbConnection = async () => {
	try {
		await connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		console.log(`Connect to ${connection.name}`)
	} catch (err) {
		console.log(`Error in the database connection ${err}`)
		process.exit(1)
	}
}
