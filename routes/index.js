const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'وبلاگ'
    })
})

module.exports = router