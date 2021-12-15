import React from 'react'
import useApi from '../../../../../api/useApi';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";
import { saveInfo } from "../../../../../redux/user/actionUser";
import { RouteComponentProps, withRouter } from "react-router-dom";
interface LoginGoogle<T> extends RouteComponentProps {
    displayAlert?: any,
    // lastLocation: string,
}

const LoginGoogle: React.FC<LoginGoogle<any>> = ({ history, displayAlert, ...props }) => {
    const dispatchUser = useDispatch();

    const responseGoogle = async (response: any) => {
        const LoginGg = await useApi.LoginGoogle(response);

        if (LoginGg.status !== "failed") {
            dispatchUser(saveInfo(LoginGg))

            return history.replace('')
        }
        displayAlert(LoginGg.message)
    }
    const callBack = () => {
        console.log('xin chao')
    }
    return (
        <GoogleLogin
            clientId="778656568797-7og0pdfk6b0anav4b2tkmm8iho37vuv3.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={responseGoogle}
            onFailure={callBack}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default withRouter(LoginGoogle)
