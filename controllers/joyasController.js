// controllers goes here
const { getJewels, getJewelsForFilters, getJewelId } = require('../models/joyasmodel')

const getAllJewelsForFilters = async (req, res) => {
  try {
    const queryStrings = req.query
    const inventario = await getJewelsForFilters(queryStrings)
    res.json(inventario)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

const getAllJewels = async (req, res) => {
  try {
    const queryStrings = req.query
    const inventario = await getJewels(queryStrings)
    const HATEOAS = await jewelsHATEOAS(inventario)
    res.json(HATEOAS)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

const jewelsHATEOAS = (inventario) => {
  const results = inventario.map((m) => {
    return {
      name: m.nombre,
      href: `/joyas/filtros/${m.id}`
    }
  })

  const stockTotal = inventario.reduce((total, joya) => total + joya.stock, 0)
  const totalJoyas = inventario.length

  const HATEOAS = {
    totalJoyas,
    stockTotal,
    results
  }
  return HATEOAS
}

const getAllJewelId = async (req, res) => {
  try {
    const id = req.params.id
    const joya = await getJewelId(id)
    res.json(joya)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = { getAllJewels, getAllJewelsForFilters, getAllJewelId }
