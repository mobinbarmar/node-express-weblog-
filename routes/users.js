const express = require('express');
const Validator = require('fastest-validator');

const router = express.Router()
const v = new Validator()

const schema = {
    fullname: {
        type: 'string',
        trim: true,
        min: 4,
        max: 255,
        messages: {
            required: 'نام و نام خانوادگی الزامی میباشد',
        }
    },
    email: {
        type: 'email',
        normalize: true,
        messages: {
            requried: 'ایمیل الزامی میباشد'
        }
    },
    password: {
        type: 'string',
        min: 4,
        max: 255
    },
    confirmPassword: {
        type: 'string',
        min: 4,
        max: 255
    }
}


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
    const validate = v.validate(req.body, schema)
    const errorArr = []
    if(validate === true){
        const { fullname, email, password, confirmPassword } = req.body
        if(password != confirmPassword){
            errorArr.push({ message: 'کلمه های عبور یکسان نیستن' })

            return res.render('register',{
                pageTitle: 'ثبت نام',
                path: '/register',
                errors: errorArr
            })
        }
        res.redirect('/users/login')
    }else{
        res.render('register', {
            pageTitle: 'ثبت نام',
            path: '/register',
            errors: validate
        })
    }
})

module.exports = router