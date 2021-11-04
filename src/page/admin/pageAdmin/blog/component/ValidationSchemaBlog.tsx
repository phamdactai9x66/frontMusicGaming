import Yup from 'component/addMethodYup';

export default Yup.object().shape({
  title: Yup.string().checkRequire(),
  content: Yup.string().checkRequire(),
  image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
  id_User: Yup.string().checkRequire(),
  id_CategoryBlog: Yup.string().checkRequire()
})

