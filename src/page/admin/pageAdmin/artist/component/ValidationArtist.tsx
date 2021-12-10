import Yup from "component/addMethodYup";

export default Yup.object().shape({
  first_Name: Yup.string().min(3).checkRequire(),
  last_Name: Yup.string().min(3).checkRequire(),
  gender: Yup.string().checkRequire(),
  birth: Yup.string().required('awd'),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
})