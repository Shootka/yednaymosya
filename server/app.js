import express from 'express'
import mongoose from 'mongoose'
import mainPageRouter from './main-page/routers/main-page.router.js'
import config from './config/config.js'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import cors from "cors"
const app = express()

app.use(cors());

app.use(express.static(`static` ))
console.log(__dirname)
app.use(express.json())

app.use((req, res, next) => {
    console.log(`Url: ${req.url}`)
    console.log(`Method: ${req.method}`)
    next()
})


app.use('/api/main-page', mainPageRouter)



try {
    mongoose.connect(config.MONGO_URI)
    app.listen(8080)
} catch (error) {
    console.log(error)
}