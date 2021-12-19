import Yup from "component/addMethodYup";

export default Yup.object().shape({
  first_name: Yup.string().checkRequire(),
  last_name: Yup.string().checkRequire(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
  email: Yup.string().checkRequire(),
  gender: Yup.string().checkRequire(),
  role: Yup.number(),
  // address: Yup.string().checkRequire(),
})