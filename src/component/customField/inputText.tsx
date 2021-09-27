import React from 'react'
import { useFormikContext, useField, ErrorMessage, Field } from "formik";
import { propsField } from "./index";

interface InputText<T> extends propsField {
    other?: any
}

const InputText: React.FC<InputText<any>> = ({ label, ...props }) => {

    const [field, meta, helpers] = useField(props);
    const formik = useFormikContext();
    return (
        <>
            <div>
                <label htmlFor="">{label}</label>

                <Field {...props} {...props.other} />
                <ErrorMessage name={field.name} />
            </div>
        </>
    )
}

export default InputText
