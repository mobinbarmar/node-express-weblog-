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





module.exports = router