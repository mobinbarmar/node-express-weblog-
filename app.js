//* Internal Modules
const path = require('path');

//* External Modules
const express = require('express');
const dotEnv = require('dotenv');

//* My Modules
const indexRoutes = require('./routes/index');

//*Load config
dotEnv.config({ path: './config/config.env' })

const app = express()


//* View Engine
app.set('view engine', 'ejs')
app.set('views', 'views')


//* Statics
app.use(express.static(path.join(__dirname, 'public')))


//* Routes
app.use(indexRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}  \n{in ${process.env.NODE_ENV} mode!}`);
})