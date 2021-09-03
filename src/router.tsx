import { Route } from "react-router-dom"
import Home from "./page/client/pageClient/home/home"
import HomeAdmin from "./page/admin/pageAdmin/home"
export interface propertyPage {
    path: string,
    component: any,
    exact: boolean
}

const Admin: propertyPage[] = [
    {
        path: "/admin",
        component: HomeAdmin,
        exact: true
    }
]

const Client: propertyPage[] = [
    {
        path: "",
        component: Home,
        exact: true
    }
]
function handlePage<T extends propertyPage[]>(Page: T): JSX.Element[] {
    if (Page == undefined || Page == null) return [];

    return Page.map((currenValue, index) => {
        let { path, component, exact } = currenValue;
        return (
            <Route key={index}
                path={path}
                component={component}
                exact={exact}
            />
        )
    })
}
export { handlePage, Client, Admin }