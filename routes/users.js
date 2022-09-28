const express = require('express');

const userModel = require('../models/user.model');

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
router.post('/register', async (req, res) => {
    try {
        // await userModel.create(req.body)
        res.redirect('/users/login')

    } catch (err) {
        console.log(err);
        const errors = []
        err.inner.forEach( e => {
            errors.push({
                name: e.path,
                message: e.message
            })
        })

        return res.render('register', {
            pageTitle: 'ثبت نام کاربر',
            path: '/register',
            errors
        })
    }
})

module.exports = router