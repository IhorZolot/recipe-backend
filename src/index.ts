import express from 'express'
import cors from 'cors'
import recipesRouter from './routes/recipes'
import filtersRouter from './routes/filters'

const PORT = 5050
const app = express()
app.use(cors())

app.use('/api', filtersRouter)
app.use('/api/recipes', recipesRouter)

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' })
})

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
