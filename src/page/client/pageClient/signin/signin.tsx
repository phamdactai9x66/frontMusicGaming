import React, { useState } from 'react'
import { AiFillGoogleSquare } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Formik, Form, FormikContextType } from "formik";
import validateSchema from "../../../../component/ValidateSchema/handleForm";

interface Signin<T> {

}
const signIn = <T extends FormikContextType<any>>(formik: T) => {

  return (
    <>
      <div>
        <input placeholder="E-mail" type="text" />
      </div>
      <div>
        <input placeholder="Password" type="password" />
      </div>
      <Link className="forgot_pass" to="/forgotpassword">Forgot password ?</Link>
    </>
  )
}
const signUp = <T extends FormikContextType<any>>(formik: T) => {
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

const Signin: React.FC<Signin<any>> = ({ ...props }) => {
  const [step, setStep] = useState({
    displayForm: 0,
    addStyle: {
      borderBottom: " 0.2rem solid rgb(65, 217, 228)"
    }
  })

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
          <Link to={{}} onClick={(event) => { navidateForm(event)(0) }}>Sign in</Link>
        </section>

        <section style={step.displayForm ? step.addStyle : {}}>
          <Link to={{}} onClick={(event) => { navidateForm(event)(1) }}>Sign up</Link>
        </section >
      </div>
    )
  }
  return (
    <>
      <div className="handleForm">
        <img width={420} height={530} src="https://colorlib.com/etc/regform/colorlib-regform-34/images/form-v8.jpg" alt="" />
        <div className="tab_login">
          {linkHandle()}
          <div className="form-input">
            <Formik
              initialValues={{}}
              validationSchema={validateSchema[step.displayForm]}
              onSubmit={() => { }}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {formik => {
                return (
                  <Form>

                    {renderForm<number>(step.displayForm, formik)}

                    <div className="btn_login">
                      <button type="submit"> {!step.displayForm ? "Sign in" : "Sign up"} </button>

                      {!step.displayForm ? <>
                        <AiFillGoogleSquare className="icon" />
                        <GrFacebook className="icon" /></> : ''}
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
