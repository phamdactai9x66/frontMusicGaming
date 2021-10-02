import * as Yup from "yup";
import { MixedSchema } from "yup"
import { AnyObject, Maybe } from "yup/lib/types";
Yup.addMethod(Yup.string, "checkRequire", function (message: string = "this field is required !") {
    return this.test("checkRequire", message, function (value, field) {
        if (typeof value === "string") value = value.trim();
        const { path, createError } = this
        if ([undefined, null, ''].includes(value)) return createError({ path, message })

        return true;
    })
})
Yup.addMethod(Yup.mixed, "checkFile", function (message: string = "") {
    return this.test("checkFile", message, function (value, field) {
        console.log(value);
        const { path, createError } = this
        return true;
    })
})

declare module "yup" {
    interface StringSchema extends Yup.BaseSchema<any> {
        checkRequire(): StringSchema;
    }
    interface NumberSchema {
        checkFile(): NumberSchema
    }
    // interface MixedSchema<
    //     TType extends Maybe<number> = number | undefined,
    //     TContext extends AnyObject = AnyObject,
    //     TOut extends TType = TType
    //     > extends Yup.BaseSchema<TType, TContext, TOut> {
    //     checkFile(): MixedSchema<TType, TContext>;
    // }
}

export default Yup;