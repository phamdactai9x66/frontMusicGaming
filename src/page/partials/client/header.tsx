import React, { useEffect, useRef, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { MenuItem } from "@mui/material";
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { Logout } from "redux/user/actionUser";
import { pausePlaying } from "redux/audio/actionAudio"
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@mui/material/Avatar';
import './style.scss'
import { BiSearch, BiTime, BiX } from "react-icons/bi"
//
import { fade, makeStyles, AppBar, Toolbar, IconButton, InputBase, Menu } from '@material-ui/core';
// import { Search, AccountCircle, MoreVert } from '@material-ui/icons';
import AlertComponent from "component/clientComponent/Alert";
import Loadings from "page/client/loading/loading";

import avatar from "./../../notificationModal/anc.png";

interface HeaderClientIF extends RouteChildrenProps { }
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "aqua",
    },
    inputRoot: {
        color: "#b3ffff",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "24rem",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));
const HeaderClient: React.FC<HeaderClientIF> = ({ ...props }) => {
    const [handleStatus, setHandleStatus] = useState({
        status: "",
        content: "",
    });
    const [loading, setLoading] = useState(false);

    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const dispatch = useDispatch();

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    // const [modalSearh, setModalSearh] =useState(false);

    const [searchInp, setSearchInp] = useState('');

    const wrapperRef = useRef(null);
    const [openModalLogout, setOpenModalLogout] = useState(false);

    // const handleOpendModal =()=>{
    //     if(modalSearh == false){
    //         setModalSearh(true)
    //     } else if(modalSearh == true){
    //         setModalSearh(false)
    //     }
    // }
    const preventRenderSong = (): void => {
        dispatch(pausePlaying())
    }

    const logOut = () => {
        setLoading(true);
        setOpenModalLogout(false);
        dispatch(Logout())

        const requireLoginPath = ['/profile', '/listenTogether', '/personal', '/roomDetail'];
        setLoading(false);
        if (requireLoginPath.filter(item => item === props.history.location.pathname).length !== 0) {
            setHandleStatus({
                status: "success",
                content: "Đăng xuất thành công.",
            })

            return props.history.replace('/');
        } else {
            props.history.replace('/signin')
        }
        // props.history.replace('/signin');
    };

    if (handleStatus.status !== '') {
        setTimeout(() => {
            setHandleStatus({
                status: "",
                content: "",
            });
        }, 3000);
    }

    const checkAdmin = () => {
        return state.user.role >= 1 ? (
            <MenuItem value={20}>
                <Link
                    to="/admin"
                    className="link pb-0 border-1"
                    style={{ fontSize: "1rem" }}
                    onClick={preventRenderSong}
                >
                    <RiAdminFill className="_icon" /> Quản trị
                </Link>
            </MenuItem>
        ) : null;
    };

    const checkUser = () => {
        return (
            <>
                <MenuItem value={10}>
                    <Link
                        to="/overview"
                        className="link rounded pb-0 border-1 "
                        style={{ fontSize: "1rem" }}
                    >
                        <FaSignInAlt className="_icon" />
                        Thông tin
                    </Link>
                </MenuItem>
                {checkAdmin()}
                <MenuItem value={10}>
                    <span
                        className="link text-danger rounded border-1 border-danger "
                        style={{ fontSize: "1rem" }}
                        onClick={() => {
                            setOpenModalLogout(true)
                            setAnchorEl(null);
                        }}
                    >
                        <FaSignInAlt className="text-danger _icon" />
                        Đăng xuất
                    </span>
                </MenuItem>
            </>
        );
    };

    const checkGuest = () => {
        const lastLocation = props.history.location.search ? props.history.location.pathname + props.history.location.search : props.history.location.pathname;
        return (
            <>
                <MenuItem value={10} onClick={handleMenuClose}>
                    <Link to={{ pathname: "/signin", state: { lastLocation: lastLocation } }} className="link rounded " style={{ fontSize: '1rem' }}><FaSignInAlt className="_icon" />Đăng nhập</Link>
                </MenuItem>
            </>
        )
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            className="mt-5"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {state.user && state.token ? checkUser() : checkGuest()}
        </Menu>
    );
    const mobileMenuId = "primary-search-account-menu-mobile";
    console.log(state.user?.avatar)
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >

                    {(state.user && state.token) ? <Avatar src={state.user?.avatar} /> : <AccountCircle />}
                </IconButton>
                <div>Thông tin</div>
            </MenuItem>
        </Menu>
    );

    const search = () => {
        props.history.push(`/search?key=${searchInp}`)
    }
    const enterToSearch = (e: any) => {
        if (e.key === "Enter") {
            search();
        }
    };

    const useOutsideAlerter = (ref: any) => {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpenModalLogout(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef);

    const ModalConfirmLogout = (
        <div className="w-100 h-100 d-flex position-fixed top-0 text-center" style={{ left: "0px", zIndex: 10, backgroundColor: "rgb(0 0 0 / 25%)" }}>
            <div ref={wrapperRef} className="my-auto mx-auto p-4 rounded-3" style={{ backgroundColor: "#9cf6ff" }}>
                <img className="w-25 h-25" src={avatar} alt="" />

                <p style={{ fontWeight: 500 }} className="mb-0">Bạn có chắc là muốn đăng xuất khỏi Music Game</p>

                <p>Hành động này có thể dẫn đến không thể sử dụng một số tính năng của Music Game</p>

                <div className="d-flex justify-content-center">
                    <button onClick={() => setOpenModalLogout(false)} className="btn btn-light">Hủy</button>
                    <button onClick={logOut} className="btn btn-danger" style={{ marginLeft: "1rem" }}>Đăng xuất</button>
                </div>
            </div>

        </div>
    )
    return (
        <div className="header_ui">
            {handleStatus.status !== "" && (
                <AlertComponent
                    status={handleStatus.status}
                    content={handleStatus.content}
                />
            )}
            {loading && <Loadings />}
            <AppBar position="static" style={{ background: "#222f44" }}>
                <Toolbar>
                    <div className={classes.search} style={{ position: "relative" }}>
                        <div className={classes.searchIcon} style={{ zIndex: 999 }} onClick={search}>
                            <SearchIcon />
                        </div>

                        {searchInp !== '' && (
                            <>
                                <BiX className="hover-icon" onClick={() => setSearchInp("")} style={{ position: 'absolute', fontSize: '30px', right: '0', zIndex: 999 }} />
                            </>
                        )
                        }
                        <InputBase
                            placeholder="Nhập tên bài hát, nghệ sĩ hoăc blog..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            value={searchInp}
                            inputProps={{ "aria-label": "search" }}
                            onChange={(e) => setSearchInp(e.target.value)}
                            onKeyDown={enterToSearch}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            {(state.user && state.token) ? <Avatar src={state.user?.avatar} /> : <AccountCircle />}
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {openModalLogout && ModalConfirmLogout}
        </div>
    );
};

export default withRouter(HeaderClient as any);
