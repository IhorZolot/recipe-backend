import axios from 'axios'
import express from 'express'

const recipesRouter = express.Router()

const API_URL = 'https://www.themealdb.com/api/json/v1/1'

recipesRouter.get('/', async (req, res) => {
	const { ingredient, area, category } = req.query

	try {
		let url = `${API_URL}/search.php?s=`

		if (ingredient) {
			url = `${API_URL}/filter.php?i=${ingredient}`
		} else if (area) {
			url = `${API_URL}/filter.php?a=${area}`
		} else if (category) {
			url = `${API_URL}/filter.php?c=${category}`
		}

		console.log('➡️ Fetching from external API:', url)

		const response = await axios.get(url, {
			headers: {
				'User-Agent': 'Mozilla/5.0',
			},
		})
		res.json(response.data)
	} catch (error: unknown) {
		if (axios.isAxiosError(error)) {
			console.error('❌ External API Error:', error.response?.status, error.message)
			res.status(500).json({ error: error.message })
		} else {
			console.error('❌ Unknown error:', error)
			res.status(500).json({ error: 'Unexpected error' })
		}
	}
})

recipesRouter.get('/:id', async (req, res) => {
	const { id } = req.params

	try {
		const response = await axios.get(`${API_URL}/lookup.php?i=${id}`)
		res.json(response.data)
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch recipe details' })
	}
})

export default recipesRouter
