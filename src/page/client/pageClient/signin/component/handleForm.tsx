import React from "react";
// import * as Yup from "yup";
import Yup from "component/addMethodYup";
import { variableCommon } from "component/variableCommon"

const alertTypeFile = "We just allow file extension jpg, jpeg, bmp,gif, png"

const validateForm = [
    Yup.object().shape({
        userName: Yup.string().checkRequire(),
        passWord: Yup.string().checkRequire()
    }),
    Yup.object().shape({
        first_name: Yup.string().trim().checkRequire(),
        last_name: Yup.string().trim().checkRequire(),
        image: (Yup as any).mixed().requireFile().checkTypeFile().checkSizeFile(),
        gender: Yup.string().checkRequire(),
        email: Yup.string().checkRequire(),
        address: Yup.string().checkRequire(),
        userName: Yup.string().checkRequire(),
        passWord: Yup.string().checkRequire(),
        confirmPassWord: Yup.string().oneOf([Yup.ref('passWord')], 'password is not match'),
    })
]
export default validateForm