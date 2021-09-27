import * as Yup from "yup";
// import {array} from "yup"

Yup.addMethod(Yup.string, "checkRequire", function (message: string = "this field is required !") {
    return this.test("checkRequire", message, function (value, field) {
        if (typeof value === "string") value = value.trim();
        const { path, createError } = this
        if ([undefined, null, ''].includes(value)) return createError({ path, message })

        return true;
    })
})

declare module "yup" {
    interface StringSchema extends Yup.BaseSchema<any> {
        checkRequire(): StringSchema<any>;
    }
    interface NumberSchema {
        // emptyAsUndefined(): NumberSchema<any>;
    }
}

export default Yup;