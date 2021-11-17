import React, { useState } from 'react'
import { Route, Redirect, RouteComponentProps, withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import Notification from 'page/notificationModal/NotificationModal';
interface UserLogin<T> extends RouteComponentProps {
    path?: string,
    component?: any,
    exact?: boolean
}

const UserLogin: React.FC<UserLogin<any>> = ({ location, children, ...props }) => {
    const [isLogged, setIsLogged] = useState(false);
    const { user, token } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    console.log("location: ", location)
    const history: any = useHistory();

    const handleLogged = () => {
        history.push(history.location?.state?.lastLocation ? history.location?.state?.lastLocation : '/' )
    }
    return (
        <>
            <Route {...props}>
                {(user && token) ? children :
                    <Notification handleLogged={handleLogged} />}
            </Route>
            {/* <Route {...props}>
                {(user && token) ? children :
                    <Redirect to={{ pathname: location.pathname === '/overview' ? '/' : location.pathname, state: {isLogged: true} }} />}
            </Route> */}
        </>
    )
}

export default withRouter(UserLogin)
