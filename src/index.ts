import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware -> transform the req.body to json

const PORT = 3005
app.get('/ping', (_req, res) => {
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})