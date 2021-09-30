import React from "react";
// import * as Yup from "yup";
import Yup from "../../../../../component/addMethodYup";

const extensionAudio = ["mp3", "wav", "flac", "aac"]
const extensionImage = ["jpg", "jpeg", "bmp", "gif", "png"];
const alertTypeFile = "We just allow file extension jpg, jpeg, bmp,gif, png"

const validateForm = [
    Yup.object().shape({
        userName: Yup.string().trim().checkRequire(),
        passWord: Yup.string().checkRequire()
    }),
    Yup.object().shape({
        first_name: Yup.string().trim().checkRequire(),
        last_name: Yup.string().trim().checkRequire(),
        avatar: Yup.mixed().test("checkFile", "", function (value, field) {
            if ([null, undefined, ""].includes(value)) return true;

            const { path, createError } = this;

            const getTypeFile: any = (value as File).name.split(".");

            const savetype = getTypeFile.at(-1).toLowerCase()
            if (!extensionImage.includes(savetype)) return createError({ path, message: alertTypeFile })

            return true;
        })
    })
]
export default validateForm