import Yup from "component/addMethodYup";

export default Yup.object().shape({
  title: Yup.string().checkRequire(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
  view: Yup.number().checkRequireNumber(),
  audio: (Yup as any).mixed().requireFile(),
  active: Yup.string().checkRequire(),
  describe: Yup.string().min(50, '50 characters minimum').checkRequire(),
  day_release: Yup.string().required('Không được bỏ trống !'),
  id_Topic: Yup.string().checkRequire(),
  id_category: Yup.string().checkRequire(),
  id_aubum: Yup.string().checkRequire(),
})