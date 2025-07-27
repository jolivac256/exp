import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.set('port', process.env.PORT ?? 3002 )

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(app.get('port'))

console.log(`Server listening on port ${app.get('port')}`)
