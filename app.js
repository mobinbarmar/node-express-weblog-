//* Internal Modules
const path = require('path');

//* External Modules
const express = require('express');

//* My Modules
const indexRoutes = require('./routes/index');

const app = express()


//* View Engine
app.set('view engine', 'ejs')
app.set('views', 'views')


//* Statics
app.use(express.static(path.join(__dirname, 'public')))


//* Routes
app.use(indexRoutes)



app.listen(3000, () => {
    console.log('http://localhost:3000');
})