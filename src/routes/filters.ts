import express from 'express'
import axios from 'axios'

const filtersRouter = express.Router()
const API_URL = 'https://www.themealdb.com/api/json/v1/1'

filtersRouter.get('/ingredients', async (_req, res) => {
	try {
		const { data } = await axios.get(`${API_URL}/list.php?i=list`)
		res.json(data)
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch ingredients' })
	}
})

filtersRouter.get('/areas', async (_req, res) => {
	try {
		const { data } = await axios.get(`${API_URL}/list.php?a=list`)
		res.json(data)
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch areas' })
	}
})

filtersRouter.get('/categories', async (_req, res) => {
	try {
		const { data } = await axios.get(`${API_URL}/list.php?c=list`)
		res.json(data)
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch categories' })
	}
})

export default filtersRouter
