import React, { useEffect, useState } from 'react'
import songApi from '../../../../../api/songApi'
import { HandleGet, tranFormData } from './../../../../../component/MethodCommon'
import { useFormikContext } from 'formik'
import { SelectField } from '../../../../../component/customField'

interface SelectSong<T> {

}

const SelectSlide: React.FC<SelectSong<any>> = ({...props}) => {
    const [song, setSong] = useState({ display: false, data: []});
    const formik = useFormikContext();
  
    useEffect(() => {
      (async () => {
        if (song.display) return;
        const query = {};
        const [data, error] = await HandleGet(songApi.getAll, query);
        if (error) return setSong(value => ({ ...value, display: false }));
        setSong(value => ({ ...value, data: data.data}));
      })()
      return () => {
        setSong(value => ({ ...value, display: false}));
      }
    }, [(formik?.values as any).id_Songs])
  
    return (
      <div>
        <SelectField 
          name="id_Songs" 
          getId="id_Songs" 
          label="Song" 
          data={tranFormData(song.data, 'value', 'name')}
          other={{ variant: 'standard' }}
        />
      </div>
    )
  }
  
  export default SelectSlide