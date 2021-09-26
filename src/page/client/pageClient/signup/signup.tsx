import React from 'react'
import { Link } from 'react-router-dom';
interface Signup<T> {

}

const Signup: React.FC<Signup<any>> = ({ ...props }) => {
    return (
        <>
            <div className="signup">
                <img width={420} height={530} src="https://colorlib.com/etc/regform/colorlib-regform-34/images/form-v8.jpg" alt="" />
                <div className="tab_login">
                    <div className="link_handel">
                        <section className="section_signin">
                            <Link to="/signin" >Sign in</Link>
                        </section>
                        <section className="section_signup">
                            <Link to="/signup" >Sign up</Link>
                        </section>
                    </div>
                    <div className="form-input">
                        <form action="">
                            <input placeholder="Username" type="text" />
                            <input placeholder="E-mail" type="email" />
                            <label htmlFor="">Gender</label>
                            <div className="gender">
                                <div style={{display: "flex"}}>
                                <span>Male</span><input type="radio" name="gender" checked/>
                                </div>
                                <div style={{display: "flex"}}>
                                    <span>Female</span><input type="radio" name="gender" />
                                </div>
                            </div>
                            <input placeholder="Password" type="text" />
                            <input placeholder="Comfirm Password" type="text" />
                            <div className="btn_login">
                                <button>Register</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup
