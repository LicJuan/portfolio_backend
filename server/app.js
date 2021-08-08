import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { dbConnection } from '../config/db'
dotenv.config()

export default class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT || 5200
		this.connection()
		this.middlewares()
		this.routes()
	}
	async connection() {
		await dbConnection()
	}
	middlewares() {}
	routes() {}
	listen() {
		this.app.listen(this.port, (err) => {
			if (err) console.error(`Error in the server run: ${err}`)
			console.log(`Server listening in the port ${this.port}`)
		})
	}
}
