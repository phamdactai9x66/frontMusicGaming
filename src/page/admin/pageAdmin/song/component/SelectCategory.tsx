import React, { useState, useEffect } from 'react'
import categoryApi from 'api/categoryApi'
import { HandleGet, tranFormData } from 'component/MethodCommon'
import { useFormikContext } from 'formik'
import { SelectField } from 'component/customField'

interface SelectCategory<T> {

}

const SelectCategory: React.FC<SelectCategory<any>> = ({ ...props }) => {
  const [category, setCategory] = useState({ display: false, data: [] });
  const formik = useFormikContext();

  useEffect(() => {
    (async () => {
      if (category.display) return;
      const query = {};
      const [data, error] = await HandleGet(categoryApi.getAll, query);
      if (error) return setCategory(value => ({ ...value, display: false }));
      setCategory(value => ({ ...value, data: data.data }));
    })()
    return () => {
      return setCategory(value => ({ ...value, display: false }))
    }
  }, [(formik?.values as any).id_Categories])
  return (
    <div>
      <SelectField
        name="id_Categories"
        getId="id_Categories"
        label="Categories"
        data={tranFormData(category.data, 'value', 'name')}
        other={{ variant: 'standard' }}
      />
    </div>
  )
}

export default SelectCategory
