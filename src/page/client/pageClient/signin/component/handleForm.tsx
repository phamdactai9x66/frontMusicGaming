import React from "react";
// import * as Yup from "yup";
import Yup from "../../../../../component/addMethodYup";


export default [
    Yup.object().shape({
        userName: Yup.string().trim().checkRequire(),
        passWord: Yup.string().checkRequire()
    }),
    Yup.object().shape({

    })
]