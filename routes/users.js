const express = require('express');

const router = express.Router()

//* Login Page
router.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'ورود', path: '/login'})
})

//* register Page
router.get('/register', (req, res) => {
    res.render('register', {pageTitle: 'ثبت نام کاربر', path: '/register'})
})

//* register Handle
router.post('/register', (req, res) => {
    console.log(req.body);
    res.send('weblog')
})

module.exports = router