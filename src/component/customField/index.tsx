
import InputText from "./inputText";
import RadioField from "./radioField";
import FileField from "./fileField";
import SelectField from "./selectField";

export interface propsField {
    label?: string,
    name: string,
    type?: string
}
export {
    InputText,
    RadioField,
    FileField,
    SelectField
}