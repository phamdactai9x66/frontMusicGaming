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
      <InputText name="useName" type="text" label="Tên tài khoản" other={{ placeholder: "Tên tài khoản" }} />
      <InputText name="passWord" type="password" label="Mật khẩu" other={{ placeholder: "Mật khẩu" }} />
      <br /><br />
      <Link className="forgot_pass" to="/forgotpassword">Quên mật khẩu ?</Link>
      <br /><br />
      <LoadingButton style={{ padding: "0.5rem 3rem", marginBottom: "1rem" }} loading={formik.isSubmitting}
        variant="contained" color="secondary" type="submit">
        Đăng nhập
      </LoadingButton>
    </>
  )
}

export const SignUp = <T extends FormikContextType<any>>(formik: T) => {

  return (
    <>
      {/* {JSON.stringify(formik.values)} */}
      {/* <input placeholder="E-mail" type="text" /> */}
      <div className="SignUp_overlow">
        <div>
          <InputText name="first_name" label="Họ của bạn" type="text" other={{ placeholder: "Họ của bạn" }} />
        </div>
        <div>
          <InputText name="last_name" label="Tên của bạn" type="text" other={{ placeholder: "Tên của bạn" }} />
        </div>
        <div>
          <InputText name="email" label="Email" type="email" other={{ placeholder: "Email" }} />
        </div>
        <div>
          <RadioField name="gender" data={genderOption} />
        </div>
        <div style={{ borderTop: "0.1rem solid #48c7b2" }}>
          <FileField name="image" type="file" />
        </div>
        <div>
          <InputText name="address" label="Địa chỉ" type="text" other={{ placeholder: "Địa chỉ" }} />

        </div>
        <div>
          <InputText name="userName" label="Tên tài khoản" type="text" other={{ placeholder: "Tên tài khoản" }} />
        </div>
        <div>
          <InputText name="passWord" label="Mật khẩu" type="password" other={{ placeholder: "Mật khẩu" }} />
        </div>
        <div>
          <InputText name="confirmPassWord" label="Xác nhận mật khẩu" type="password" other={{ placeholder: "Xác nhận mật khẩu" }} />
        </div>
      </div>
      <br />
      <LoadingButton style={{ padding: "0.5rem 3rem", marginBottom: "1rem" }} loading={formik.isSubmitting}
        variant="contained" color="secondary" type="submit">
        Đăng kí
      </LoadingButton>
    </>
  )
}