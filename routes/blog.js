const express = require('express');

const router = express.Router()

//*Landing Page
router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'وبلاگ',
        path: '/'
    })
})

module.exports = router