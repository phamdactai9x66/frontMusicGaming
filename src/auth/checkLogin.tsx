import React from 'react'
import { Route, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
interface UserLogin<T> extends RouteComponentProps {
    path?: string,
    component?: any,
    exact?: boolean
}

const UserLogin: React.FC<UserLogin<any>> = ({ location, children, ...props }) => {
    const { user, token } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    return (
        <>
            <Route {...props}>
                {(user && token) ? children :
                    <Redirect to={{ pathname: '/signin', state: location.pathname }} />}
            </Route>
        </>
    )
}

export default withRouter(UserLogin)
