import express from 'express'
import cors from 'cors'
import recipesRouter from './routes/recipes'

const app = express()
const PORT = 5000

app.use(cors())
app.use('/api/recipes', recipesRouter)

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
