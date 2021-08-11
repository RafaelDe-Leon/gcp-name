const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000
const db = require('./firestore')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)
