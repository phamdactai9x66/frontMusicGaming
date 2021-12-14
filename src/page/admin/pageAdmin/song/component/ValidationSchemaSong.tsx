import Yup from "component/addMethodYup";

export default Yup.object().shape({
  title: Yup.string().checkRequire(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
  view: Yup.number().checkRequireNumber(),
  audio: Yup.string().checkRequire(),
  // active: Yup.string().checkRequire(),
  describe: Yup.string().checkRequire(),
  day_release: Yup.string().required('Không được bỏ trống !'),
  id_Topic: Yup.string().checkRequire(),
  id_Categories: Yup.string().checkRequire(),
  id_album: Yup.string().checkRequire(),
})