const userModel = require('../models/user.model');
const { schema } = require('../models/secure/userValidation');

exports.login = (req, res) =>{
    res.render('login', {pageTitle: 'ورود', path: '/login'})
} 

exports.register = (req, res) => {
    res.render('register', {pageTitle: 'ثبت نام کاربر', path: '/register'})
}

exports.createUser = async (req, res) => {
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
}