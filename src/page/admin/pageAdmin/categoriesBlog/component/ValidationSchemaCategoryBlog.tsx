import Yup from "component/addMethodYup";

export default Yup.object().shape({
  name: Yup.string().checkRequire()
})