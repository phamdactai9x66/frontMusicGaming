import React from 'react'
import { Route, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
interface ProtectRoute<T> extends RouteComponentProps {
    path?: string,
    component?: any,
    exact?: boolean
}

const ProtectRoute: React.FC<ProtectRoute<any>> = ({ location, children, ...props }) => {
    const { user, token } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    return (
        <>
            <Route {...props}>
                {!(user && token) ? children :
                    <Redirect to={{ pathname: '/', state: location.pathname }} />}
            </Route>
        </>
    )
}

export default withRouter(ProtectRoute)
