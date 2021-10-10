import React from 'react'
import { ErrorMessage, useField, useFormikContext } from 'formik'
import { propsField } from './index'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

interface SelectField<T> extends propsField {
      other?: any,
      data: any[],
      getId?: string | any
}

const SelectField: React.FC<SelectField<any>> = ({ label, getId, ...props }) => {
      const [field] = useField(props);
      const formik = useFormikContext();
      return (
            <>
                  <FormControl fullWidth>
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
                                                <MenuItem key={index} value={item?.[getId] ? item?.[getId] : item?._id} >
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
