import Yup from "component/addMethodYup";

export default Yup.object().shape({
  title: Yup.string().checkRequire(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
  view: Yup.string().checkRequire(),
  audio: Yup.string().checkRequire(),
  active: Yup.string().checkRequire(),
  describe: Yup.string().min(50, '50 characters minimum').checkRequire(),
  // day_release: Yup.date().checkRequire().nullable(),
  id_Topic: Yup.string().checkRequire(),
  id_category: Yup.string().checkRequire(),
  id_aubum: Yup.string().checkRequire(),
})