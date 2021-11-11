import React from 'react'
import useApi from '../../../../../api/useApi';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from "react-redux";
import { saveInfo } from "../../../../../redux/user/actionUser";
import { RouteComponentProps, withRouter } from "react-router-dom";
interface LoginGoogle<T> extends RouteComponentProps {
    displayAlert?: any
}

const LoginGoogle: React.FC<LoginGoogle<any>> = ({ history, displayAlert, ...props }) => {
    const dispatchUser = useDispatch();

    const responseGoogle = async (response: any) => {
        const LoginGg = await useApi.LoginGoogle(response);

        if (LoginGg.status !== "failed") {
            dispatchUser(saveInfo(LoginGg))

            return history.replace("/")
        }
        displayAlert(LoginGg.message)
    }
    return (
        <GoogleLogin
            clientId="778656568797-qela2gigufg47tagd18n55ng9jv7n87p.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default withRouter(LoginGoogle)
