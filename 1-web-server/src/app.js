const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/pages')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
  res.render('weather', {
    title: 'Weather',
    name: 'Edon'
  })
})


app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})