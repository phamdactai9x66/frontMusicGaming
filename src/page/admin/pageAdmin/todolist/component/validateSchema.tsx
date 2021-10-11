import Yup from "component/addMethodYup";

export default Yup.object().shape({
    title: Yup.string().checkRequire(),
    id_Artist: Yup.string().checkRequire(),
    image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile()
})