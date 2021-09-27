import React, { useState, useRef } from 'react'
import LoginFacebook from './component/loginFacebook';
import LoginGoogle from './component/loginGoogle';
import { Formik, Form, FormikContextType } from "formik";
import validateSchema from "./component/handleForm";
import { stateForm } from "./component/stateForm";
import { signIn, signUp } from "./component/formLocal";
import userApi from "../../../../api/useApi";
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert'
import { saveInfo } from "../../../../redux/user/actionUser";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
interface Signin<T> extends RouteComponentProps {

}


const Signin: React.FC<Signin<any>> = ({ history, ...props }) => {
  const [step, setStep] = useState({
    displayForm: 0,
    addStyle: {
      borderBottom: " 0.2rem solid rgb(65, 217, 228)"
    }
  })
  const dispatchUser = useDispatch();
  const form = useRef<HTMLFormElement | any>(null);
  const [alertError, setalertError] = useState<any>({ display: null, message: "" })

  const renderForm = <T extends number>(step: T, formik: FormikContextType<any>): JSX.Element => {
    switch (step) {
      case 0: {
        return signIn<FormikContextType<any>>(formik)
      }
      case 1: {
        return signUp<FormikContextType<any>>(formik)
      }
      default: {
        return signIn<FormikContextType<any>>(formik)
      }
    }
  }
  const navidateForm = (event: Event | any) => {
    event.preventDefault();
    return (step: number) => {
      setStep(value => ({ ...value, displayForm: step }))
    }
  }
  const linkHandle = () => {
    return (
      <div className="link_handel">
        <section style={!step.displayForm ? step.addStyle : {}}>
          <a href={" "} onClick={(event) => { navidateForm(event)(0) }}>Sign in</a>
        </section>

        <section style={step.displayForm ? step.addStyle : {}}>
          <a href={" "} onClick={(event) => { navidateForm(event)(1) }}>Sign up</a>
        </section >
      </div>
    )
  }
  const handleSignIn = async (data: any, action: any) => {
    const handleForm = new FormData(form.current);

    const loginUser = await userApi.Login(handleForm);

    if (loginUser.status !== "failed") {

      dispatchUser(saveInfo(loginUser))

      return history.replace("/");
    }

    displayAlert(loginUser.message)

  }
  const displayAlert = (messageError: string) => {
    setalertError({ display: true, message: messageError })
  }
  return (
    <>
      <div className="handleForm">
        <img width={420} height={530} src="https://colorlib.com/etc/regform/colorlib-regform-34/images/form-v8.jpg" alt="" />
        <div className="tab_login">
          {linkHandle()}
          <div className="form-input">
            <Formik
              initialValues={stateForm[step.displayForm]}
              validationSchema={validateSchema[step.displayForm]}
              onSubmit={handleSignIn}
              // validateOnBlur={false}
              // validateOnChange={false}
              enableReinitialize
            >
              {formik => {
                return (
                  <Form ref={form}>
                    {alertError.display &&
                      <Alert severity="error" style={{ cursor: "pointer" }}
                        onClick={() => {
                          setalertError((value: any) => ({ ...value, display: null }))
                        }}
                      >{alertError.message}</Alert>
                    }

                    {renderForm<number>(step.displayForm, formik)}

                    <div className="btn_login">
                      <LoadingButton loading={formik.isSubmitting}
                        variant="outlined" type="submit">
                        {!step.displayForm ? "Sign in" : "Sign up"}
                      </LoadingButton>


                      {!step.displayForm ? <>
                        {/* <AiFillGoogleSquare className="icon" /> */}
                        <LoginGoogle />
                        <LoginFacebook />

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
