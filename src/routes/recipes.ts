import { Router } from 'express'
import axios from 'axios'

const router = Router()

const API_URL = 'https://www.themealdb.com/api/json/v1/1'

router.get('/', async (req, res) => {
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

		const response = await axios.get(url)
		res.json(response.data)
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch recipes' })
	}
})

router.get('/:id', async (req, res) => {
	const { id } = req.params

	try {
		const response = await axios.get(`${API_URL}/lookup.php?i=${id}`)
		res.json(response.data)
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch recipe details' })
	}
})

export default router
