import React, { useEffect, useRef, useState } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { InputBase } from '@material-ui/core';
//
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { Logout } from "redux/user/actionUser";
import avatar from "./../../notificationModal/anc.png";


const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
			position: 'relative',
			zIndex: "1000"
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
		color: '#fff',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));
interface HeaderIF extends RouteChildrenProps { }
const Header: React.FC<HeaderIF> = ({ ...props }) => {
	const [handleStatus, setHandleStatus] = useState({
		status: "",
		content: "",
	});
	const [loading, setLoading] = useState(false);
	const wrapperRef = useRef(null);
	const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
	const dispatch = useDispatch();

	// const [modalSearh, setModalSearh] =useState(false);
	const [openModalLogout, setOpenModalLogout] = useState(false);
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

			return window.location.href = window.location.origin + '/signin'
		} else {
			window.location.href = window.location.origin + '/signin'
		}
		// props.history.replace('/signin');
	};

	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}><Link to="/admin/profile">Thông tin</Link></MenuItem>
			<MenuItem onClick={logOut}>Đăng xuất</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>

			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'
				>
					<AccountCircle />
				</IconButton>
				<div>Thông tin</div>
				<MenuItem onClick={logOut}>Đăng xuất</MenuItem>
			</MenuItem>
		</Menu>
	);
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
			<AppBar position='static' style={{ background: "#1d2d47" }}>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='open drawer'
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title} variant='h6' noWrap>
						<Link to="/" className="text-light">Trang chủ</Link>
					</Typography>

					<div className={classes.search} style={{ position: "relative" }}>
						<div className={classes.searchIcon} style={{ zIndex: 999 }}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Tìm kiếm"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>

					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>

						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label='show more'
							aria-controls={mobileMenuId}
							aria-haspopup='true'
							onClick={handleMobileMenuOpen}
							color='inherit'
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			<div className="mt-5">
				{renderMenu}
			</div>
			{openModalLogout && ModalConfirmLogout}
		</div>
	);
};
export default withRouter(Header as any);
