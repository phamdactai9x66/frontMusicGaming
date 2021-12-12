import React, { useEffect, useState } from 'react'
import topicApi from 'api/topicApi'
import { HandleGet, tranFormData } from 'component/MethodCommon'
import { useFormikContext } from 'formik'
import { SelectField } from 'component/customField'

interface SelectTopic<T> {

}

const SelectTopic: React.FC<SelectTopic<any>> = ({...props}) => {
  const [topic, setTopic] = useState({ display: false, data: []});
  const formik = useFormikContext();

  useEffect(() => {
    (async () => {
      if (topic.display) return;
      const query = {};
      const [data, error] = await HandleGet(topicApi.getAll, query);
      if (error) return setTopic(value => ({ ...value, display: false }));
      setTopic(value => ({ ...value, data: data.data}));
    })()
    return () => {
      setTopic(value => ({ ...value, display: false}));
    }
  }, [(formik?.values as any).id_Topic])

  return (
    <div>
      <SelectField 
        name="id_Topic" 
        getId="id_Topic" 
        label="Chủ đề" 
        data={tranFormData(topic.data, 'value', 'name')}
        other={{ variant: 'standard' }}
      />
    </div>
  )
}

export default SelectTopic
