import { FormikContextType } from "formik";
import { InputText } from "../../../../../component/customField/index";
import { Link } from 'react-router-dom';
export const signIn = <T extends FormikContextType<any>>(formik: T) => {

  return (
    <>
      {/* {JSON.stringify(formik.values)} */}
      <InputText name="userName" type="text" other={{ placeholder: "userName" }} />

      <InputText name="passWord" type="password" other={{ placeholder: "passWord" }} />

      <Link className="forgot_pass" to="/forgotpassword">Forgot password ?</Link>
    </>
  )
}
export const signUp = <T extends FormikContextType<any>>(formik: T) => {
  return (
    <>
      <input placeholder="E-mail" type="text" />
      <label htmlFor="">Gender</label>
      <div className="gender">
        <div style={{ display: "flex" }}>
          <span>Male</span><input type="radio" name="gender" checked />
        </div>
        <div style={{ display: "flex" }}>
          <span>Female</span><input type="radio" name="gender" />
        </div>
      </div>
      <input placeholder="Password" type="text" />
      <input placeholder="Comfirm Password" type="text" />
    </>
  )
}