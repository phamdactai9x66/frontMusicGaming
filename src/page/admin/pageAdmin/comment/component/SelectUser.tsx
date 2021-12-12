import React, { useState, useEffect } from 'react'
import useApi from 'api/useApi'
import { HandleGet, tranFormData } from 'component/MethodCommon'
import { useFormikContext } from 'formik'
import { SelectField } from 'component/customField'

interface SelectUser<T> {

}

const SelectUser: React.FC<SelectUser<any>> = ({ ...props }) => {
  const [user, setUser] = useState({ display: false, data: [] });
  const formik = useFormikContext();

  useEffect(() => {
    (async () => {
      if (user.display) return;
      const query = {};
      const [data, error] = await HandleGet(useApi.getAll, query);
      if (error) return setUser(value => ({ ...value, display: false }));
      setUser(value => ({ ...value, data: data.data }));
    })()
    return () => {
      setUser(value => ({ ...value, display: false }));
    }
  }, [(formik?.values as any).id_User])

  return (
    <div>
      <SelectField
        name="id_User"
        getId="id_User"
        label="User"
        data={tranFormData(user.data, 'value', 'name')}
        other={{ variant: 'standard' }}
      />
    </div>
  )
}

export default SelectUser
