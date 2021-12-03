import * as Yup from "yup";
import { variableCommon } from "component/variableCommon";
const messageDefault: string = 'Không được để trống.';
const checkTypeFile: string = 'File không đúng định dạng.';
const checkSizeFile: string = 'Kích thước File nhỏ hơn 16MB.';

Yup.addMethod(Yup.string, "checkRequire", function (message: string = messageDefault) {
    return this.test("checkRequire", message, function (value, field) {
        if (typeof value === "string") value = value.trim();
        const { path, createError } = this
        if ([undefined, null, ''].includes(value)) return createError({ path, message })

        return true;
    })
})
// Yup.addMethod(Yup.date, "checkDate", function (message: string = messageDefault) {
//     return this.test("checkDate", message, function (value, field) {
//         if (typeof value === "string") value = value.trim();
//         const { path, createError } = this
//         if ([undefined, null, ''].includes(value)) return createError({ path, message })

//         return true;
//     })
// })
Yup.addMethod(Yup.mixed, "requireFile", function (message: string = messageDefault) {
    return this.test("checkFile", message, function (value, field) {
        if (typeof value === "string") value = value.trim();
        const { path, createError } = this;
        if ([undefined, null, ''].includes(value)) return createError({ path, message })
        return true;
    })
})
Yup.addMethod(Yup.mixed, "checkTypeFile", function (message: string = checkTypeFile) {
    return this.test('checkTypeFile', message, function (value, field) {
        if (typeof value != "object") return true;
        const { extensionImage } = variableCommon;
        const { path, createError } = this;
        const getTypeFile = ((value as File).name + '').split(".")[1].toLowerCase();
        if (!extensionImage.includes(getTypeFile)) {
            return createError({ path, message })
        }
        return true
    })
})
Yup.addMethod(Yup.mixed, "checkSizeFile", function (size = variableCommon.sizeDefault, message: string = checkSizeFile) {
    return this.test('checkSizeFile', message, function (value, field) {
        if (!value) return true;
        const { path, createError } = this;
        const getSizeFile = (value as File).size;
        if (size < getSizeFile) {
            return createError({ path, message })
        }
        return true
    })
})

declare module "yup" {
    interface StringSchema extends Yup.BaseSchema<any> {
        checkRequire(): StringSchema;
    }
    interface NumberSchema {
        // checkFile(): NumberSchema
    }
}

export default Yup;