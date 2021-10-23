import React from 'react'
import { Route, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
interface ProtectAdmin<T> extends RouteComponentProps {
    path?: string,
    component?: any
}

const ProtectAdmin: React.FC<ProtectAdmin<any>> = ({ location, children, ...props }) => {
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    return (
        <>
            <Route {...props}>
                {user && user.role >= 1 ? children :
                    <Redirect to={{ pathname: '/', state: location.pathname }} />}
            </Route>
        </>
    )
}

export default withRouter(ProtectAdmin)
