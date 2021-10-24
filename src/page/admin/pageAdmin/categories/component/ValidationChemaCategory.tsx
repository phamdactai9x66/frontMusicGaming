import Yup from "component/addMethodYup";

export default Yup.object().shape({
  name: Yup.string().checkRequire(),
  id_Topic: Yup.string().checkRequire(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile()
})