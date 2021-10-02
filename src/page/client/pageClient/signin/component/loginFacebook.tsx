import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { GrFacebook } from 'react-icons/gr';
import useApi from '../../../../../api/useApi';
import { useDispatch, useSelector } from "react-redux";
import { saveInfo } from "../../../../../redux/user/actionUser";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface LoginFacebook<T> extends RouteComponentProps {
    displayAlert?: any
}

const LoginFacebook: React.FC<LoginFacebook<any>> = ({ history, displayAlert, ...props }) => {
    const dispatchUser = useDispatch();
    const responseFacebook = async (response: any) => {
        const LoginFacebook = await useApi.LoginFacebook(response);

        if (LoginFacebook.status !== "failed") {
            dispatchUser(saveInfo(LoginFacebook))
            return history.replace("/")
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
