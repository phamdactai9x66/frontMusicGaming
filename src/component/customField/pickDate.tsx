import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import { useFormikContext, useField, ErrorMessage } from 'formik'
import { propsField } from "./index"

interface PickDate<T> extends propsField {
    other?: any
}



const PickDate: React.FC<PickDate<any>> = ({ ...props }) => {
    const formik = useFormikContext()
    const [field, meta, helpers] = useField(props);
    console.log(field.value)
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                {...props}
                {...props.other}
                onChange={(value) => { helpers.setValue(value) }}
                renderInput={(params) => <TextField value={field.value} {...params} variant="standard" fullWidth />}
            />
            <ErrorMessage name={field.name} />
        </LocalizationProvider>
    );
}
export default PickDate