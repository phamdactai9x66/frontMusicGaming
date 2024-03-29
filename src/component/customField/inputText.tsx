import React from 'react'
import { useFormikContext, useField, ErrorMessage, Field } from "formik";
import { TextField } from "@mui/material";
import { propsField } from "./index";

interface InputText<T> extends propsField {
    other?: any
}

const InputText: React.FC<InputText<any>> = ({ ...props }) => {

    const [field, meta, helpers] = useField(props);
    const formik = useFormikContext();
    return (
        <>
            <TextField
                {...props}
                {...props.other}
                fullWidth
                {...formik.getFieldProps(field.name)}
                helperText={meta.error || ''} />
            {/* <ErrorMessage name={field.name} /> */}
        </>
    )
}
export default InputText
