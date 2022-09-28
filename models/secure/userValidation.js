const Yup = require('yup');

exports.schema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامی میباشد').min(4, 'بیش از 4 کارکتر وارد کنید').max(255, 'کمتر از 255 کارکتر موردنیاز است'),
    email: Yup.string().email('ایمیل معتبر نمیباشد').required('ایمیل الزامی میباشد'),
    password: Yup.string().min(4, 'بیش از 4 کارکتر وارد کنید').max(255, 'کمتر از 255 کارکتر موردنیاز است').required('پسورد الزامی میباشد'),
    confirmPassword: Yup.string().required('پسورد الزامی میباشد').oneOf([Yup.ref('password'), null])
})