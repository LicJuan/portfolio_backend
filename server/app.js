import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
<<<<<<< HEAD
import { dbConnection } from '../config/db'
=======
import Routes from '../routes'
>>>>>>> UserModule
dotenv.config()

export default class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || 5200
		this.connection()
		this.middlewares()
		this.routes()
	}
<<<<<<< HEAD
	async connection() {
		await dbConnection()
	}
	middlewares() {}
	routes() {}
=======
	connection() {}
	middlewares() {
		this.app.use(express.json())
		this.app.use(cors())
		this.app.use(morgan('dev'))
	}
	routes() {
		this.app.use('/api', Routes)
	}
>>>>>>> UserModule
	listen() {
		this.app.listen(this.port, (err) => {
			if (err) console.error(`Error in the server run: ${err}`)
			console.log(`Server listening in the port ${this.port}`)
		})
	}
}
