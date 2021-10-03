import { Route } from "react-router-dom"
import Home from "./page/client/pageClient/home/home"
import NotFound from "./page/client/pageClient/notFound/notFound";

import HomeAdmin from "./page/admin/pageAdmin/home/home";
import AddMusic from "./page/admin/pageAdmin/addMusic/addMusic";
import NotFoundAdmin from "./page/admin/pageAdmin/notFound/notFoundAdmin";
import Todolist from "./page/admin/pageAdmin/todolist/todolist";
// import Canhan from "./page/client/pageClient/canhan/canhan";
import TopThinhHanh from "./page/client/pageClient/topthinhthanh/topThinhHanh";
import YeuThich from "./page/client/pageClient/yeuthich/yeuthich";
import NhacMoi from "./page/client/pageClient/nhacmoi/nhacmoi";
import Blog from "./page/client/pageClient/blog/blog";
import TheLoai from "./page/client/pageClient/theloai/theloai";
import BlogDetail from "./page/client/pageClient/blogdetail/blogDetail";
import Playlist from "./page/client/pageClient/playlist/playlist";
import Chart from "./page/client/pageClient/chart/Chart";
import Personal from "./page/client/pageClient/personal/personal";
import Signin from "./page/client/pageClient/signin/signin";
import ForgotPassword from "./page/client/pageClient/forgotPassword/forgotPassword";
import Recently from "./page/client/pageClient/recently/recently";


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
        path: "/admin/:pathNotFound",
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
        path: "/personal",
        component: Personal,
        exact: true
    },
    {
        path: "/recently",
        component: Recently,
        exact: true
    },
    {
        path: "/signin",
        component: Signin,
        exact: true
    },
    {
        path: "/forgotpassword",
        component: ForgotPassword,
        exact: true
    },
    {
        path: "/topThinhHanh",
        component: TopThinhHanh,
        exact: true
    },
    {
        path: "/yeuThich",
        component: YeuThich,
        exact: true
    },
    {
        path: "/nhacMoi",
        component: NhacMoi,
        exact: true
    },
    {
        path: "/blog",
        component: Blog,
        exact: true
    },
    {
        path: "/theLoai",
        component: TheLoai,
        exact: true
    },
    {
        path: "/blogDetail",
        component: BlogDetail,
        exact: true
    },
    {
        path: "/playlist",
        component: Playlist,
        exact: true
    },
    {
        path: "/chart",
        component: Chart,
        exact: true
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