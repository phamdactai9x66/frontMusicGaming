import { Route } from "react-router-dom"

import Home from "./page/client/pageClient/home/home"
import About from "./page/client/pageClient/about/about"
import NotFound from "./page/client/pageClient/notFound/notFound";

import HomeAdmin from "./page/admin/pageAdmin/home/home";
import AddMusic from "./page/admin/pageAdmin/addMusic/addMusic";
import NotFoundAdmin from "./page/admin/pageAdmin/notFound/notFoundAdmin";
import Todolist from "./page/admin/pageAdmin/todolist/todolist";

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
    },
    {
        path: "/admin/AddMusic",
        component: AddMusic,
        exact: true
    },
    {
        path: "/admin/todolist",
        component: Todolist,
        exact: true
    },
    {
        path: "/:pathNotFound",
        component: NotFoundAdmin,
        exact: false
    }

]

const Client: propertyPage[] = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/about",
        component: About,
        exact: false
    },
    {
        path: "/:pathNotFound",
        component: NotFound,
        exact: false
    }

]
function handlePage<T extends propertyPage[]>(Page: T): JSX.Element[] {
    if (Page == undefined || Page == null) return [];

    return Page.map((currenValue, index) => {
        let { path, component, exact } = currenValue;
        console.log(exact, path)
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