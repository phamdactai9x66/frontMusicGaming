import { Route } from "react-router-dom"
import Home from "./page/client/pageClient/home/home"
import NotFound from "./page/client/pageClient/notFound/notFound";
import HomeAdmin from "./page/admin/pageAdmin/home/home";
import NotFoundAdmin from "./page/admin/pageAdmin/notFound/notFoundAdmin";
import Toptrending from "./page/client/pageClient/toptrending/toptrending";
import Favorite from "./page/client/pageClient/favorite/favorite";
import Newmusic from "./page/client/pageClient/newmusic/newmusic";
import PlayListClient from "./page/client/pageClient/playlist/playlist";
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

import Categories from "page/admin/pageAdmin/categories/index";
import AddCategory from "./page/admin/pageAdmin/categories/page/AddCategory";
import PlayList from "page/admin/pageAdmin/playlist/index";
import AddPlayList from "page/admin/pageAdmin/playlist/page/AddPlayList";

import BlogAdmin from "./page/admin/pageAdmin/blog/index";
import AddBlog from "./page/admin/pageAdmin/blog/page/AddBlog";
import UserPlaylist from "./page/admin/pageAdmin/userPlayList/index";
import AddUserPlaylist from "./page/admin/pageAdmin/userPlayList/page/AddUserPlayList";
import CategoryBlog from "./page/admin/pageAdmin/categoriesBlog/index";
import AddCategoryBlog from "./page/admin/pageAdmin/categoriesBlog/page/AddCategoryBlog";
import Profile from "page/admin/pageAdmin/profile/Profile";

import Artist from "./page/admin/pageAdmin/artist/index";
import AddArtist from "./page/admin/pageAdmin/artist/page/AddArtist";
import Song from "./page/admin/pageAdmin/song/index";
import AddSong from "./page/admin/pageAdmin/song/page/AddSong";
import UserAdmin from "./page/admin/pageAdmin/user/index";

import Comment from "./page/admin/pageAdmin/comment/index";

import Slide from './page/admin/pageAdmin/slide/index'
import AddSlide from './page/admin/pageAdmin/slide/page/addSlide'
import Search from "./page/client/pageClient/search/search";
import ListenTogether from "./page/client/pageClient/listenTogether/listenTogether";
import Personal from "./page/client/pageClient/personal/index"
import RoomDetail from "./page/client/pageClient/roomDetail/roomDetail";
import SubCategory from "page/client/pageClient/subpage/subpage";
import Subpage from "page/client/pageClient/subpage/subpage";
import ArtistDetail from "page/client/pageClient/artistDetail/artistDetail";


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
        path: "/admin/blog",
        component: BlogAdmin,
        exact: false
    },
    {
        path: "/admin/addBlog",
        component: AddBlog,
        exact: false
    },
    {
        path: "/admin/userPlayList",
        component: UserPlaylist,
        exact: false
    },
    {
        path: "/admin/addUserPlayList",
        component: AddUserPlaylist,
        exact: false
    },
    {
        path: "/admin/categoryBlog",
        component: CategoryBlog,
        exact: false
    },
    {
        path: "/admin/addCategoryBlog",
        component: AddCategoryBlog,
        exact: false
    },
    {
        path: "/admin/comment",
        component: Comment,
        exact: false
    },
    {
        path: "/admin/userAdmin",
        component: UserAdmin,
        exact: false
    },
    {
        path: "/admin/artist",
        component: Artist,
        exact: false
    },
    {
        path: "/admin/addArtist",
        component: AddArtist,
        exact: false
    },
    {
        path: "/admin/song",
        component: Song,
        exact: false
    },
    {
        path: "/admin/addSong",
        component: AddSong,
        exact: false
    },
    {
        path: "/admin/profile",
        component: Profile,
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
        path: "/artistDetail/:id",
        component: ArtistDetail,
        exact: false
    },
    {
        path: "/search",
        component: Search,
        exact: false
    },
    {
        path: "/listenTogether/roomDetail/:idRoom",
        component: RoomDetail,
        exact: false
    },
    {
        path: "/listenTogether",
        component: ListenTogether,
        exact: false
    },
    {
        path: "/profile",
        component: Profile,
        exact: false
    },
    {
        path: "/subCategory",
        component: SubCategory,
        exact: false
    },
    {
        path: "/personal",
        component: Personal,
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
        path: "/category/SubCategory",
        component: CategoryDetailPlaylist,
        exact: false
    }
    ,
    {
        path: "/category",
        component: Category,
        exact: false
    },
    {
        path: "/blogDetail/:idBlog",
        component: BlogDetail,
        exact: false
    },
    {
        path: "/playlist",
        component: PlayListClient,
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