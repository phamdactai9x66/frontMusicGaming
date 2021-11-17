import React, { useState, useEffect } from 'react'
import blogApi from 'api/BlogApi'
import { HandleGet, tranFormData } from 'component/MethodCommon'
import { useFormikContext } from 'formik'
import { SelectField } from 'component/customField'

interface SelectBlog<T> {

}

const SelectBlog: React.FC<SelectBlog<any>> = ({...props}) => {
  const [blog, setBlog] = useState({display: false, data: []});
  const formik = useFormikContext();

  useEffect(() => {
    (async () => {
      if (blog.display) return;
      const query = {};
      const [data, error] = await HandleGet(blogApi.getAll, query);
      if (error) return setBlog(value => ({ ...value, display: false }));
      setBlog(value => ({ ...value, data: data.data}));
    })()
    return () => {
      setBlog(value => ({ ...value, display: false}));
    }
  }, [(formik?.values as any).id_Blog])

  return (
    <div>
      <SelectField 
        name="id_Blog" 
        getId="id_Blog" 
        label="Blog" 
        data={tranFormData(blog.data, 'value', 'name')}
        other={{ variant: 'standard' }}
      />
    </div>
  )
}

export default SelectBlog
