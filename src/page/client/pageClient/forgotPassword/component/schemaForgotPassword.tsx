import Yup from 'component/addMethodYup'

export default Yup.object().shape({
  email: Yup.string().checkRequire().email('Email không chính xác'),
  })