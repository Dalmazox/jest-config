import { config } from 'dotenv'
import express from 'express'

config()

const app = express()

app.use('/', (req, res, next) => {
    return res.json({
        message: 'work',
    })
})

export default app
