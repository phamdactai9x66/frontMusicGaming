import React, { useState, useRef } from 'react'
import LoginFacebook from './component/loginFacebook';
import LoginGoogle from './component/loginGoogle';
import { Formik, Form, FormikContextType } from "formik";
import validateSchema from "./component/handleForm";
import { stateForm } from "./component/stateForm";
import { SignIn, SignUp } from "./component/formLocal";
import userApi from "api/useApi";
import Alert from '@mui/material/Alert'
import { saveInfo } from "../../../../redux/user/actionUser";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import CryptoJS from "crypto-js"
import { variableCommon } from "component/variableCommon"
import { styled } from '@mui/material/styles';

interface SigninIF<T> extends RouteComponentProps {

}


const Signin: React.FC<SigninIF<any>> = ({ history, ...props }: any) => {
  const [step, setStep] = useState({
    displayForm: 0,
    addStyle: {
      borderBottom: " 0.2rem solid rgb(65, 217, 228)"
    }
  })
  //   const [onpenModalActive, setOnpenModalActive] = useState(false);
  // const handleOnpenActiveUser=()=>{
  //   console.log('abc')
  //   if(onpenModalActive === false){
  //  setOnpenModalActive(true)
  //   }
  //   else if(onpenModalActive ===true){
  //     setOnpenModalActive(true)
  //   }
  const dispatchUser = useDispatch();
  const form = useRef<HTMLFormElement | any>(null);
  const [alertError, setalertError] = useState<any>({ display: false, message: "", type: '' })

  // const lastLocation = history.location.state.lastLocation ? history.location.state.lastLocation : '/';

  const renderForm = <T extends number>(step: T, formik: FormikContextType<any>): JSX.Element => {
    switch (step) {
      case 0: {
        return SignIn<FormikContextType<any>>(formik)
      }
      case 1: {
        return SignUp<FormikContextType<any>>(formik)
      }
      default: {
        return SignIn<FormikContextType<any>>(formik)
      }
    }
  }
  const navidateForm = (event: Event | any) => {
    event.preventDefault();
    return (step: number) => {
      setalertError((value: any) => ({ ...value, display: false }))
      setStep(value => ({ ...value, displayForm: step }))
    }
  }
  const linkHandle = () => {
    return (
      <div className="link_handel">
        <section style={!step.displayForm ? step.addStyle : {}}>
          <a href={" "} onClick={(event) => { navidateForm(event)(0) }} style={{ fontSize: '1.1rem' }}>
            Đăng nhập</a>
        </section>

        <section style={step.displayForm ? step.addStyle : {}}>
          <a href={" "} onClick={(event) => { navidateForm(event)(1) }} style={{ fontSize: '1.1rem' }}>Đăng ký</a>
        </section >
      </div>
    )
  }
  const handleSignIn = async (data: any, action: any) => {
    const handleForm = new FormData(form.current);

    // const lastLocation = history.location.state.lastLocation ? history.location.state.lastLocation : '/';
    if (!step.displayForm) {

      const secretKey = (process.env as any).REACT_APP_SECRET_KEY;

      const getPassword = handleForm.get("passWord") as string;
      handleForm.set("passWord", CryptoJS.AES.encrypt(getPassword, secretKey).toString());

      const loginUser = await userApi.Login(handleForm);

      if (loginUser.status !== variableCommon.statusF) {

        dispatchUser(saveInfo(loginUser))

        // history.replace('');
        // console.log(lastLocation)
        window.location.href = window.location.origin
        // history.push('');
      }
      return displayAlert(loginUser.message, 'error')
    }

    const loginUser = await userApi.Signup(handleForm);
    if (loginUser.status !== variableCommon.statusF) {

      // dispatchUser(saveInfo(loginUser))
      return displayAlert(loginUser.message, 'success')
    }
    displayAlert(loginUser.message, 'error')
  }
  const displayAlert = (messageError: string = "Có lỗi xảy ra", type: string = 'info') => {
    setalertError({ display: true, message: messageError, type })
  }

  return (
    <>
      <div className="handleForm">
        <img height={500} src="https://colorlib.com/etc/regform/colorlib-regform-34/images/form-v8.jpg" alt="" />
        <div className="tab_login">
          {linkHandle()}
          <div className="form-input">
            <Formik
              initialValues={stateForm[step.displayForm]}
              validationSchema={validateSchema[step.displayForm]}
              onSubmit={handleSignIn}
              // validateOnBlur={false}
              validateOnChange={false}
              enableReinitialize
            >
              {formik => {
                return (
                  <Form ref={form}>
                    {alertError.display &&
                      <div className='parent-alert'><Alert severity={alertError.type} style={{ cursor: "pointer", marginBottom: 5 }}
                        onClick={() => {
                          setalertError((value: any) => ({ ...value, display: null }))
                        }}
                      >{alertError.message}</Alert></div>
                    }

                    {renderForm<number>(step.displayForm, formik)}

                    <div className="btn_login">

                      {!step.displayForm ? <>
                        {/* <AiFillGoogleSquare className="icon" /> */}
                        <LoginGoogle displayAlert={displayAlert} />
                        {/* <LoginFacebook displayAlert={displayAlert} /> */}

                      </> : ''}
                    </div>

                  </Form>
                )
              }}

            </Formik>
          </div>

        </div>
      </div>
    </>
  )
}

export default Signin
