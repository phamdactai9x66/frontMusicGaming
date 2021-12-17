import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { GrFacebook } from 'react-icons/gr';
import useApi from '../../../../../api/useApi';
import { useDispatch } from "react-redux";
import { saveInfo } from "../../../../../redux/user/actionUser";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface LoginFacebookIF<T> extends RouteComponentProps {
    displayAlert?: any,
    // lastLocation: string,
}

const LoginFacebook: React.FC<LoginFacebookIF<any>> = ({ history, displayAlert, ...props }) => {
    const dispatchUser = useDispatch();
    const responseFacebook = async (response: any) => {
        const LoginFacebook = await useApi.LoginFacebook(response);

        if (LoginFacebook.status !== "failed") {
            dispatchUser(saveInfo(LoginFacebook))
            return window.location.href = window.location.origin
        }
        displayAlert(LoginFacebook.message)
    }

    return (
        <FacebookLogin
            appId="199739805546279"
            autoLoad={false}
            fields="name,email,picture"
            icon={<GrFacebook />}
            // onClick={componentClicked}
            callback={responseFacebook} />
    )
}

export default withRouter(LoginFacebook)
