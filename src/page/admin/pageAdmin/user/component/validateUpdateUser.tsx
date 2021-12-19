import Yup from "component/addMethodYup";

export default Yup.object().shape({
    first_name: Yup.string().checkRequire(),
    last_name: Yup.string().checkRequire(),
    image: (Yup as any).mixed().checkTypeFile().checkSizeFile(),
    email: Yup.string().checkRequire(),
    gender: Yup.string().checkRequire(),
    role: Yup.number().checkRequireNumber(),
    // address: Yup.string().checkRequire(),
})