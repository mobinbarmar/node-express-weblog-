const express = require('express');

const router = express.Router()


//* Dashboard Page
router.get('/', (req, res) => {
    res.render('dashboard', { 
        pageTitle: 'داشبورد', 
        path: '/dashboard', 
        layout: './layouts/dashLayout' 
    })
})

//* Login Page
router.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'ورود', path: '/login'})
})



module.exports = router