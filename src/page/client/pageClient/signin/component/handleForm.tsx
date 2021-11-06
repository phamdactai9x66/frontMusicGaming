import React from "react";
// import * as Yup from "yup";
import Yup from "component/addMethodYup";
import { variableCommon } from "component/variableCommon"

const alertTypeFile = "We just allow file extension jpg, jpeg, bmp,gif, png"

const validateForm = [
    Yup.object().shape({
        userName: Yup.string().trim().checkRequire().matches(/^[A-Za-z0-9_]{5,100}/, 'Not true'),
        passWord: Yup.string().checkRequire().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/,'At least 1 number, 1 uppercase and at least 8 characters')
            .min(8, 'Password must be more than 8 characters').max(50, 'Password must be less than 50 characters'),
    }),
    Yup.object().shape({
        first_name: Yup.string().trim().checkRequire(),
        last_name: Yup.string().trim().checkRequire(),
        image: Yup.mixed().test("checkFile", "", function (value, field) {
            const { extensionImage } = variableCommon
            if ([null, undefined, ""].includes(value)) return true;

            const { path, createError } = this;

            const getTypeFile: any = (value as File).name.split(".");

            const savetype = getTypeFile.at(-1).toLowerCase()
            if (!extensionImage.includes(savetype)) return createError({ path, message: alertTypeFile })

            return true;
        }).required('Is required'), 
        email: Yup.string().checkRequire().email('This field is not in the correct format'),
        address: Yup.string().checkRequire(),
        userName: Yup.string().trim().checkRequire().matches(/^[A-Za-z0-9_]{5,100}/, 'Not true'),
        passWord: Yup.string().checkRequire().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/,'At least 1 number, 1 uppercase and at least 8 characters')
            .min(8, 'Password must be more than 8 characters').max(50, 'Password must be less than 50 characters'),
        confirmPassWord: Yup.string().checkRequire().oneOf([Yup.ref('passWord'), null], 'Passwords must match')
    })
]
export default validateForm