const express = require('express');
const Yup = require('yup');

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
router.post('/register', (req, res) => {
    schema.validate(req.body).then(() => {
        res.redirect('/users/login')
    }).catch((err) => {
        res.render('register', {pageTitle:'ثبت نام', path: '/register', errors: err.errors})
    })
})

module.exports = router