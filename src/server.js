const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

// setttings 
app.set('port', process.env.PORT || 3000)

// midlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use(require('./routes/api.routes'))

// static files
app.use(express.static(path.join(__dirname, 'public')))

// start app
app.listen(app.get('port'), () => { console.log('server is ready in', app.get('port'))})