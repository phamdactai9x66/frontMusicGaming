import React, { useState } from "react"
import { FormikContextType } from "formik";
import { InputText, RadioField, FileField } from "../../../../../component/customField/index";
import { Link } from 'react-router-dom';
import { LoadingButton } from "@mui/lab"
import { genderOption } from "../component/stateForm";
export const SignIn = <T extends FormikContextType<any>>(formik: T) => {

  return (
    <>
      {/* {JSON.stringify(formik.values)} */}
      <InputText name="userName" type="text" other={{ placeholder: "userName" }} />

      <InputText name="passWord" type="password" other={{ placeholder: "passWord" }} />
      <br/>
      <Link className="forgot_pass" to="/forgotpassword">Forgot password ?</Link>
      <br/><br/>
      <LoadingButton style={{padding: "0.5rem 3rem",marginBottom: "1rem"}} loading={formik.isSubmitting}
        variant="contained" color="secondary" type="submit">
        Sign in
      </LoadingButton>
    </>
  )
}

export const SignUp = <T extends FormikContextType<any>>(formik: T) => {

  return (
    <>
      {/* {JSON.stringify(formik.values)} */}
      {/* <input placeholder="E-mail" type="text" /> */}
      <div>
        <InputText name="first_name" label="First Name" type="text" other={{ placeholder: "First Name" }} />
      </div>
      <div>
        <InputText name="last_name" label="Last Name" type="text" other={{ placeholder: "Last Name" }} />
      </div>
      <div>
        <InputText name="email" label="Email" type="email" other={{ placeholder: "Email" }} />
      </div>
      <div>
        <RadioField name="gender" label="gender" data={genderOption} />
      </div>
      <div>
        <FileField name="image" label="avatar" type="file" />
      </div>
      <div>
        <InputText name="address" label="address" type="text" other={{ placeholder: "address" }} />

      </div>
      <div>
        <InputText name="userName" label="userName" type="text" />
      </div>
      <div>
        <InputText name="passWord" label="passWord" type="password" />
      </div>
      <div>
        <InputText name="confirmPassWord" label="confirmPassword" type="password" />
      </div>
      <LoadingButton loading={formik.isSubmitting}
        variant="outlined" type="submit">
        Sign up
      </LoadingButton>
    </>
  )
}