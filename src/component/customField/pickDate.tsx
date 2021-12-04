import React, { useEffect } from 'react'
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
    const { setValue } = helpers
    const [valueDatePicker, setvalueDatePicker] = React.useState<Date | string>(new Date());
    useEffect(() => {
        if (field.value) {
            try {
                const date = new Date(field.value);
                setvalueDatePicker(date);
            } catch (error) {
                console.log(error)
            }
        }
    }, [field.value]);

    const onChange = (date: string | any): void => {
        if (date == null) return setvalueDatePicker(new Date());
        if (date) {
            setvalueDatePicker(date);
            try {
                const ISODateString = date.toISOString();
                setValue(ISODateString);
            } catch (error) {
                setValue(date);
            }
        } else {
            setValue(date);
        }
    }
    const onClose = () => {
        formik.setTouched(field.name, true,);
    }
    const onchangeInput = (event: Event | any) => {
        const getValue = (event.target as HTMLInputElement).value;
        setvalueDatePicker(getValue);
        // console.log(getValue);
    }
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    {...props}
                    {...props.other}
                    // views={["day", "month", "year"]}
                    value={valueDatePicker}
                    minDate="15/10/1980"
                    onChange={onChange}
                    onClose={onClose}
                    renderInput={(params) => <TextField value={valueDatePicker} onChange={onchangeInput} error={false}  {...params} variant="standard" helperText={meta.error || ''} fullWidth />}
                    format="DD-MM-YYYY"

                />

            </LocalizationProvider>
            {/* <ErrorMessage name={field.name} /> */}
        </>
    );
}
export default PickDate