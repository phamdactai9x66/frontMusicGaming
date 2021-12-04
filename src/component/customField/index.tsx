
import InputText from "./inputText";
import TextareaField from './textareaField';
import RadioField from "./radioField";
import FileField from "./fileField";
import SelectField from "./selectField";

export interface propsField {
    label?: string,
    name: string,
    type?: string,
    minRows?: number,
    min?: number,
    style?: any,
    placeholder?: string,
}
export {
    InputText,
    RadioField,
    FileField,
    SelectField,
    TextareaField,
}