import express from 'express'
import mongoose from 'mongoose'
import mainPageRouter from './main-page/routers/main-page.router.js'
import config from './config/config.js'

const app = express()

app.use(express.static('static'))
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