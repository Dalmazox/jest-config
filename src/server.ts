import { config } from 'dotenv'
import app from './app'

config()

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
