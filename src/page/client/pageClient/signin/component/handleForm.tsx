import React from "react";
// import * as Yup from "yup";
import Yup from "component/addMethodYup";
import { variableCommon } from "component/variableCommon"

const alertTypeFile = "We just allow file extension jpg, jpeg, bmp,gif, png"

const validateForm = [
    Yup.object().shape({
        userName: Yup.string().trim().checkRequire().matches(/^[A-Za-z0-9_]{5,100}/, 'Not true'),
        passWord: Yup.string().checkRequire(),
    }),
    Yup.object().shape({
        first_name: Yup.string().trim().checkRequire(),
        last_name: Yup.string().trim().checkRequire(),
        image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
        email: Yup.string().checkRequire().email('Email không chính xác'),
        address: Yup.string().checkRequire(),
        userName: Yup.string().trim().checkRequire().matches(/^[A-Za-z0-9_]{5,100}/, 'Not true'),
        passWord: Yup.string().checkRequire(),
        confirmPassWord: Yup.string().checkRequire().oneOf([Yup.ref('passWord'), null], 'Mật khẩu không chính xác.')
    })
]
// .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/, 'At least 1 number, 1 uppercase and at least 8 characters')
//             .min(8, 'Password must be more than 8 characters').max(50, 'Password must be less than 50 characters')

// .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/, 'At least 1 number, 1 uppercase and at least 8 characters')
//             .min(8, 'Password must be more than 8 characters').max(50, 'Password must be less than 50 characters')
export default validateForm