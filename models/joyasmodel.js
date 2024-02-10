/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { query } = require('express')
const { pool, format } = require('../database/connectionDb')
const {
  errorServer,
  orderList,
  numberValidate,
  filtersNotFoundError,
  metalError,
  priceIsNotNumericError,
  category
} = require('../utils/errorHandlers')

const getJewels = async ({ limits = 6, order_by = 'stock_ASC', page = 1 }) => {
  const [campo, direccion] = order_by.split('_')
  const offset = (page - 1) * limits
  const formattedQuery = format(
    'SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s',
    campo,
    direccion,
    limits,
    offset
  )
  const { rows: inventario } = await pool.query(formattedQuery)
  return inventario
}

const getJewelsForFilters = async ({ precio_min, precio_max, categoria, metal }) => {
  let filtros = []
  const values = []
  let query = 'SELECT * FROM inventario'
  const agregarFiltro = (campo, comparador, valor) => {
    values.push(valor)
    const { length } = filtros
    filtros.push(`${campo} ${comparador} $${length + 1}`)
  }
  if (precio_min) agregarFiltro('precio', '>=', precio_min)
  if (precio_max) agregarFiltro('precio', '<=', precio_max)
  if (categoria) agregarFiltro('categoria', '=', categoria.toLowerCase())
  if (metal) agregarFiltro('metal', '=', metal.toLowerCase())
  if (filtros.length > 0) {
    filtros = filtros.join(' AND ')
    query += ` WHERE ${filtros};`
  }
  const { rows: joyas } = await pool.query(query, values)
  return joyas
}

const getJewelId = async (id) => {
  const { rows: joya } = await pool.query('SELECT * FROM inventario WHERE id = $1', [id])
  return joya
}

module.exports = {
  getJewels,
  getJewelsForFilters,
  getJewelId
}
