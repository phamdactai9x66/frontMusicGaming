import React from 'react'
import { useFormikContext, useField, ErrorMessage, Field } from "formik";
import { TextareaAutosize } from "@mui/material";
import { propsField } from "./index";

interface TextareaField<T> extends propsField {
  other?: any
}

const TextareaField: React.FC<TextareaField<any>> = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  const formik = useFormikContext();
  return (
    <>
      <TextareaAutosize {...props} {...props.other} {...formik.getFieldProps(field.name)} />
      <ErrorMessage name={field.name} />
    </>
  )
}

export default TextareaField