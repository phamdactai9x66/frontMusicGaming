import React from 'react'
import { ErrorMessage, useField, useFormikContext } from 'formik'
import { propsField } from './index'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

interface SelectField<T> extends propsField {
      other?: any,
      data: any[]
}

const SelectField: React.FC<SelectField<any>> = ({ label, ...props}) => {
      const [field] = useField(props);
      console.log(field.name) // 
      const formik = useFormikContext();
      return (
            <>
                  <FormControl sx={{ m:1, width: 300}}>
                        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                        <Select 
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              {...props} 
                              {...props.other} 
                              {...formik.getFieldProps(field.name)} 
                        >
                              {
                                    props.data.map((item, index) => {
                                          return (
                                                <MenuItem key={index} value={item?.value}>
                                                      {item?.value}
                                                </MenuItem>
                                          )
                                    })
                              }
                        </Select>
                        <ErrorMessage name={field.name} />
                  </FormControl> 
            </>
      )
}

export default SelectField
