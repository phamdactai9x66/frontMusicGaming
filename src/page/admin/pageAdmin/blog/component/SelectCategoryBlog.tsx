import React, {useState, useEffect} from 'react'
import categoryBlogApi from 'api/categoryBlogApi'
import { HandleGet, tranFormData } from 'component/MethodCommon'
import { useFormikContext } from 'formik'
import { SelectField } from 'component/customField'

interface SelectCategoryBlog<T> {

}

const SelectCategoryBlog: React.FC<SelectCategoryBlog<any>> = ({...props}) => {
  const [categoryBlog, setCategoryBlog] = useState({ display: false, data: []});
  const formik = useFormikContext();

  useEffect(() => {
    (async () => {
      if (categoryBlog.display) return;
      const query = {};
      const [data, error] = await HandleGet(categoryBlogApi.getAll, query);
      if (error) return setCategoryBlog(value => ({ ...value, display: false }));
      setCategoryBlog(value => ({ ...value, data: data.data}));
    })()
    return () => {
      setCategoryBlog(value => ({ ...value, display: false}));
    }
  }, [(formik?.values as any).id_CategoryBlog])

  return (
    <div>
      <SelectField 
        name="id_CategoryBlog" 
        getId="id_CategoryBlog" 
        label="CategoryBlog" 
        data={tranFormData(categoryBlog.data, 'value', 'name')}
        other={{ variant: 'standard' }}
      />
    </div>
  )
}

export default SelectCategoryBlog
