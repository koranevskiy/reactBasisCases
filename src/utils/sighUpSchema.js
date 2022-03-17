import * as Yup from 'yup'

const SighUpSchema = Yup.object().shape({
    login: Yup.string()
        .min(4, "To short!").required('Required'),
    password: Yup.string().min(6, "Must be at least 6 characters").required('Required!')
})

export default SighUpSchema