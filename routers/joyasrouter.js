const express = require('express')
const router = express.Router()

const {
  getAllJewels,
  getAllJewelsForFilters,
  getAllJewelId
} = require('../controllers/joyasController')

router.get('/joyas', (req, res) => {
  try {
    getAllJewels(req, res)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

router.get('/joyas/filtros', (req, res) => {
  try {
    getAllJewelsForFilters(req, res)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

router.get('/joyas/joya/:id', (req, res) => {
  try {
    getAllJewelId(req, res)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

router.get('*', (req, res) => {
  res.status(404).send('Esta ruta no existe')
})

module.exports = router
