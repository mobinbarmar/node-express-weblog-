//* Internal Modules
const path = require('path');

//* External Modules
const express = require('express');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const expressLayout = require('express-ejs-layouts');

//* My Modules
const connectDB = require('./config/db');
const indexRoutes = require('./routes/index');

//*Load config
dotEnv.config({ path: './config/config.env' })

//*Database cconnection
connectDB()

const app = express()

//* Logging
if(process.env.NODE_ENV = 'development'){
    app.use(morgan('dev'))
}


//* View Engine
app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('layout', './layouts/mainLayout')
app.set('views', 'views')


//* Statics
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, process.env.BOOTSTRAP)))
app.use(express.static(path.join(__dirname, process.env.FONTAWESOME)))


//* Routes
app.use(indexRoutes)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}  \n{in ${process.env.NODE_ENV} mode!}`);
})