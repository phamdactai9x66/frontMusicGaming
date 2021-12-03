import Yup from "component/addMethodYup";

export default Yup.object().shape({
  fist_name: Yup.string().min(3).checkRequire(),
  last_name: Yup.string().min(3).checkRequire(),
  gender: Yup.string().checkRequire(),
  // birth: Yup.date().checkRequire().enullable(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
})