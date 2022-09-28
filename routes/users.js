const express = require('express');


const Yup = require('yup');
const userModel = require('../models/user.model');

const router = express.Router()

const schema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامی میباشد').min(4, 'بیش از 4 کارکتر وارد کنید').max(255, 'کمتر از 255 کارکتر موردنیاز است'),
    email: Yup.string().email('ایمیل معتبر نمیباشد').required('ایمیل الزامی میباشد'),
    password: Yup.string().min(4, 'بیش از 4 کارکتر وارد کنید').max(255, 'کمتر از 255 کارکتر موردنیاز است').required('پسورد الزامی میباشد'),
    confirmPassword: Yup.string().required('پسورد الزامی میباشد').oneOf([Yup.ref('password'), null])
})

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
        await schema.validate()
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