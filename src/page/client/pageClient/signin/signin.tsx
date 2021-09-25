import React from 'react'
import { AiFillGoogleSquare } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

interface Signin<T> {

}

const Signin: React.FC<Signin<any>> = ({ ...props }) => {
    return (
        <>
            <div className="signin">
                <img width={420} height={530} src="https://colorlib.com/etc/regform/colorlib-regform-34/images/form-v8.jpg" alt=""/>
                <div className="tab_login">
                  <div className="link_handel">
                  <section>
                    <Link to="/signin" >Sign in</Link>
                  </section>
                  <section>
                    <Link to="/signup" >Sign up</Link>
                  </section>
                  </div>

                    <div className="form-input">
                      <form action="">
                          <input placeholder="E-mail" type="email" />
                          <input placeholder="Password" type="text" />
                          <div className="btn_login">
                          <button>Sign in</button>
                          <AiFillGoogleSquare className="icon"/>
                          <GrFacebook className="icon"/>
                          </div>   
                      </form>
                       <Link className="forgot_pass" to="/forgotpassword">Forgot password ?</Link>
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default Signin
