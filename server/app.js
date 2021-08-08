import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import Routes from '../routes'
dotenv.config()

export default class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || 5200
		this.connection()
		this.middlewares()
		this.routes()
	}
	connection() {}
	middlewares() {
		this.app.use(express.json())
		this.app.use(cors())
		this.app.use(morgan('dev'))
	}
	routes() {
		this.app.use('/api', Routes)
	}
	listen() {
		this.app.listen(this.port, (err) => {
			if (err) console.error(`Error in the server run: ${err}`)
			console.log(`Server listening in the port ${this.port}`)
		})
	}
}
