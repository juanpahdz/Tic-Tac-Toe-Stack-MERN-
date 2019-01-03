const express = require('express')
const app = express()

// setttings 
app.set('port', process.env.PORT || 3000)

// midlewares

// Routes

// static files

// start app
app.listen(app.get('port'), () => { console.log('server is ready in', app.get('port'))})