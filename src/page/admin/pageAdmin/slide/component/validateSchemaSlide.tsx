import Yup from "../../../../../component/addMethodYup";

export default Yup.object().shape({
  name: Yup.string().checkRequire(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
  content: Yup.string().checkRequire(),
  id_Songs: Yup.string().checkRequire()
})