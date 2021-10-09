import React from 'react'
import { useFormikContext, useField, ErrorMessage, Field } from "formik";
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { propsField } from "./index";

interface RadioField<T> extends propsField {
    other?: any,
    data: any[]
}

const RadioField: React.FC<RadioField<any>> = ({ label, ...props }) => {

    const [field, meta, helpers] = useField(props);
    const formik = useFormikContext();
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup row {...props} {...props.other}
                    {...formik.getFieldProps(field.name)}
                >
                    {props.data && props.data.map((currenValue, index) => {
                        return (
                            <FormControlLabel value={currenValue?.value} control={<Radio />}
                                checked={(currenValue?.value + '') === field.value}
                                label={currenValue.label} />
                        )
                    })
                    }
                </RadioGroup>
                <ErrorMessage name={field.name} />
            </FormControl>
        </>
    )
}
export default RadioField
