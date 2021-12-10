import Yup from 'component/addMethodYup';

export default Yup.object().shape({
  title: Yup.string().min(10, 'Minimum on 10 characters').checkRequire(),
  content: Yup.string().min(50, 'Minimum on 50 characters').checkRequire(),
  status: Yup.string().checkRequire(),
  view: Yup.number().positive().integer().checkRequireNumber(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
  id_User: Yup.string().checkRequire(),
  id_CategoryBlog: Yup.string().checkRequire()
})

