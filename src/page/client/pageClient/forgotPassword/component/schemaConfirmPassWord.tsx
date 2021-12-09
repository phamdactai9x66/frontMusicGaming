import Yup from 'component/addMethodYup'

export default Yup.object().shape({
  passWord: Yup.string().checkRequire(),
  confirmPassWord: Yup.string().checkRequire().oneOf([Yup.ref('passWord'), null], 'Mật khẩu không chính xác.')
  })