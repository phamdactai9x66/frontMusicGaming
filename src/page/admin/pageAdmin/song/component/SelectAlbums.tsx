import React, { useEffect, useState } from 'react'
import albumApi from 'api/albumApi'
import { HandleGet, tranFormData } from 'component/MethodCommon'
import { useFormikContext } from 'formik'
import { SelectField } from 'component/customField'

interface SelectAlbums<T> {

}

const SelectAlbums: React.FC<SelectAlbums<any>> = ({ ...props }) => {
  const [albums, setAlbums] = useState({ display: false, data: [] });
  const formik = useFormikContext();

  useEffect(() => {
    (async () => {
      if (albums.display) return;
      const query = {};
      const [data, error] = await HandleGet(albumApi.getAll, query);
      if (error) return setAlbums(value => ({ ...value, display: false }));
      setAlbums(value => ({ ...value, data: data.data }))
    })()
    return () => {
      setAlbums(value => ({ ...value, display: false }))
    }
  }, [(formik?.values as any).id_album])
  return (
    <div>
      <SelectField
        name="id_album"
        getId="id_album"
        label="Albums"
        data={tranFormData(albums.data, 'value', 'name')}
        other={{ variant: 'standard' }}
      />
    </div>
  )
}

export default SelectAlbums
