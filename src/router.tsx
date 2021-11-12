import { Route } from "react-router-dom"
import Home from "./page/client/pageClient/home/home"
import NotFound from "./page/client/pageClient/notFound/notFound";
import HomeAdmin from "./page/admin/pageAdmin/home/home";
import NotFoundAdmin from "./page/admin/pageAdmin/notFound/notFoundAdmin";
import Toptrending from "./page/client/pageClient/toptrending/toptrending";
import Favorite from "./page/client/pageClient/favorite/favorite";
import Newmusic from "./page/client/pageClient/newmusic/newmusic";
import Blog from "./page/client/pageClient/blog/blog";
import BlogDetail from "./page/client/pageClient/blogdetail/blogDetail";
import PlaylistDetail from "./page/client/pageClient/playlistDetail/playlistDetail";
import Chart from "./page/client/pageClient/chart/Chart";
import ForgotPassword from "./page/client/pageClient/forgotPassword/forgotPassword";
import Recently from "./page/client/pageClient/recently/recently";
import CategoryDetailPlaylist from "page/client/pageClient/categoryDetailPlaylist/categoryDetailPlaylist";
import AddAlbum from "./page/admin/pageAdmin/todolist/page/addTodo";
import Album from "./page/admin/pageAdmin/todolist/index";
import AddTopic from "./page/admin/pageAdmin/topic/page/addTodo";
import Topic from "./page/admin/pageAdmin/topic/index";
import Category from "./page/client/pageClient/category/category";
import AddCategory from "./page/admin/pageAdmin/categories/page/AddCategory";
import Categories from "page/admin/pageAdmin/categories/index";
import PlayList from "page/admin/pageAdmin/playlist/index";
import AddPlayList from "page/admin/pageAdmin/playlist/page/AddPlayList";
import Slide from './page/admin/pageAdmin/slide/index'
import AddSlide from './page/admin/pageAdmin/slide/page/addSlide'
import Profile from "page/admin/pageAdmin/profile/Profile";
import Search from "./page/client/pageClient/search/search";
import ListenTogether from "./page/client/pageClient/listenTogether/listenTogether";
import RoomDetail from "./page/client/pageClient/roomDetail/roomDetail";


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
        path: "/admin/profile",
        component: Profile,
        exact: false
    },
    {
        path: "/admin/addAlbum",
        component: AddAlbum,
        exact: false
    },
    {
        path: "/admin/album",
        component: Album,
        exact: false
    },
    {
        path: "/admin/addTopic",
        component: AddTopic,
        exact: false
    },
    {
        path: "/admin/topic",
        component: Topic,
        exact: false
    },
    {
        path: "/admin/songCate",
        component: Categories,
        exact: false
    },
    {
        path: "/admin/addCate",
        component: AddCategory,
        exact: false
    },
    {
        path: "/admin/playList",
        component: PlayList,
        exact: false
    },
    {
        path: "/admin/addPlayList",
        component: AddPlayList,
        exact: false
    },
 
    {
        path: "/admin/slide",
        component: Slide,
        exact: false
    },
    {
        path: "/admin/addslide",
        component: AddSlide,
        exact: false
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
        path: "/search",
        component: Search,
        exact: false
    },
    {
        path: "/roomDetail",
        component: RoomDetail,
        exact: false
    },
    {
        path: "/listenTogether",
        component: ListenTogether,
        exact: false
    },
    {
        path: "/recently",
        component: Recently,
        exact: false
    },
    {
        path: "/forgotpassword",
        component: ForgotPassword,
        exact: false
    },
    {
        path: "/toptrending",
        component: Toptrending,
        exact: false
    },
    {
        path: "/favorite",
        component: Favorite,
        exact: false
    },
    {
        path: "/newmusic",
        component: Newmusic,
        exact: false
    },
    {
        path: "/blog",
        component: Blog,
        exact: false
    },
    {
        path: "/category",
        component: Category,
        exact: false
    },
    {
        path: "/categoryDetailPlaylist",
        component: CategoryDetailPlaylist,
        exact: false
    },
    {
        path: "/blogDetail/:idBlog",
        component: BlogDetail,
        exact: false
    },
    {
        path: "/playlistDetail/:idPlaylist",
        component: PlaylistDetail,
        exact: false
    },
    {
        path: "/chart",
        component: Chart,
        exact: false
    },
    {
        path: "/:pathNotFound",
        component: NotFound,
        exact: false
    }

]
function handlePage<T extends propertyPage[]>(Page: T): JSX.Element[] | null {
    if ([undefined, null].includes(Page as any)) return null;

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