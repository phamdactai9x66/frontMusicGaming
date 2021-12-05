import React from "react"
import { FormikContextType } from "formik";
import { InputText, RadioField, FileField } from "../../../../../component/customField/index";
import { Link } from 'react-router-dom';
import { LoadingButton } from "@mui/lab"
import { genderOption } from "../component/stateForm";
import { PhotoCamera } from "@mui/icons-material";

export const SignIn = <T extends FormikContextType<any>>(formik: T) => {
  document.title = "Đăng nhập - Music Game";
  return (
    <>
      {/* {JSON.stringify(formik.values)} */}
      <InputText name="userName" type="text" label="Tên tài khoản" />
      <InputText name="passWord" type="password" label="Mật khẩu" />
      <br /><br />
      <Link className="forgot_pass" to="/forgotpassword">Quên mật khẩu?</Link>
      <br /><br />
      <LoadingButton style={{ padding: "0.5rem 3rem", marginBottom: "1rem" }} loading={formik.isSubmitting}
        variant="contained" color="secondary" type="submit">
        Đăng nhập
      </LoadingButton>
    </>
  )
}

export const SignUp = <T extends FormikContextType<any>>(formik: T) => {
  document.title = "Đăng ký - Music Game";
  return (
    <>
      {/* {JSON.stringify(formik.values)} */}
      {/* <input placeholder="E-mail" type="text" /> */}
      <div className="SignUp_overlow">
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flexBasis: "50%" }}>
            <InputText name="first_name" label="Họ" type="text" />
          </div>
          <div style={{ flexBasis: "50%" }}>
            <InputText name="last_name" label="Tên" type="text" />
          </div>
        </div>
        <div>
          <InputText name="email" label="Email" type="email" />
        </div>
        <div style={{ display: "flex", gap: "1rem", borderBottom: "0.1rem solid #48aec7ad", borderRadius: "0 0 0.3rem 0.3rem" }}>
          <div style={{ flexBasis: "50%" }}>
            <RadioField name="gender" data={genderOption} />
          </div>
          <div style={{ flexBasis: "50%", position: "relative", height: "4.7rem" }}>
            <div>
              <PhotoCamera style={{ color: "aqua", fontSize: "2.6rem", marginTop: "0.8rem" }} />
            </div>
            <div style={{ position: "absolute", top: "-0.7rem", left: "0rem" }}>
              <FileField name="image" type="file" />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flexBasis: "50%" }}>
            <InputText name="address" label="Địa chỉ" type="text" />
          </div>
          <div style={{ flexBasis: "50%" }}>
            <InputText name="userName" label="Tên tài khoản" type="text" />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ flexBasis: "50%" }}>
            <InputText name="passWord" label="Mật khẩu" type="password" />
          </div>
          <div style={{ flexBasis: "50%" }}>
            <InputText name="confirmPassWord" label="Xác nhận mật khẩu" type="password" />
          </div>
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