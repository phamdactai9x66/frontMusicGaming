import React from 'react'
import { useFormikContext, useField, ErrorMessage, Field } from "formik";
import { TextField, InputLabel } from "@mui/material";
import { propsField } from "./index";

interface CustomInputFile<T> extends propsField {
    other?: any
}

const CustomInputFile: React.FC<CustomInputFile<any>> = ({ label, ...props }) => {

    const [field, meta, helpers] = useField(props);
    const formik = useFormikContext();
    return (
        <>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <TextField {...props} {...props.other} fullWidth
                onChange={(event: Event | any) => {
                    const getFile = event.target.files[0] as File;
                    getFile && helpers.setValue(getFile)
                }}
                helperText={meta.error || ''}
            />
            {/* <ErrorMessage name={field.name} /> */}
        </>
    )
}
export default CustomInputFile
