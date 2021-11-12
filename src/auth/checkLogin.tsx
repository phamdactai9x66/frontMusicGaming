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
    console.log("location: ", location)
    return (
        <>
            <Route {...props}>
                {(user && token) ? children :
                    <Redirect to={{ pathname: location.pathname === '/overview' ? '/' : location.pathname, state: {isLogged: true} }} />}
            </Route>
        </>
    )
}

export default withRouter(UserLogin)
