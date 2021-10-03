import { Route } from "react-router-dom"
import Home from "./page/client/pageClient/home/home"
import NotFound from "./page/client/pageClient/notFound/notFound";
import HomeAdmin from "./page/admin/pageAdmin/home/home";
import AddMusic from "./page/admin/pageAdmin/addMusic/addMusic";
import NotFoundAdmin from "./page/admin/pageAdmin/notFound/notFoundAdmin";
import Todolist from "./page/admin/pageAdmin/todolist/todolist";
import Toptrending from "./page/client/pageClient/toptrending/toptrending";
import Favorite from "./page/client/pageClient/favorite/favorite";
import Newmusic from "./page/client/pageClient/newmusic/newmusic";
import Blog from "./page/client/pageClient/blog/blog";
import Category from "./page/client/pageClient/category/category";
import BlogDetail from "./page/client/pageClient/blogdetail/blogDetail";
import PlaylistDetail from "./page/client/pageClient/playlistDetail/playlistDetail";
import Chart from "./page/client/pageClient/chart/Chart";
import Signin from "./page/client/pageClient/signin/signin";
import ForgotPassword from "./page/client/pageClient/forgotPassword/forgotPassword";
import Recently from "./page/client/pageClient/recently/recently";
import Overview from "./page/client/pageClient/personal/component/overview";
import Music from "./page/client/pageClient/personal/component/music";
import Musician from "./page/client/pageClient/personal/component/musician";
import Upload from "./page/client/pageClient/personal/component/upload";
import Playlist from "./page/client/pageClient/personal/component/playlist";

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
        path: "/toptrending",
        component: Toptrending,
        exact: true
    },
    {
        path: "/favorite",
        component: Favorite,
        exact: true
    },
    {
        path: "/newmusic",
        component: Newmusic,
        exact: true
    },
    {
        path: "/blog",
        component: Blog,
        exact: true
    },
    {
        path: "/category",
        component: Category,
        exact: true
    },
    {
        path: "/blogDetail",
        component: BlogDetail,
        exact: true
    },
    {
        path: "/playlistDetail",
        component: PlaylistDetail,
        exact: true
    },
    {
        path: "/chart",
        component: Chart,
        exact: true
    },
     {
        path: "/overview",
        component: Overview,
        exact: true
    },
    {
        path: "/music",
        component: Music,
        exact: true
    },
    {
        path: "/musician",
        component: Musician,
        exact: true
    },
    {
        path: "/playlist",
        component: Playlist,
        exact: true
    },
    {
        path: "/upload",
        component: Upload,
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