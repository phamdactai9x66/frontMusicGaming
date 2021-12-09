
import React from 'react'
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { ExpandMore } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
interface SidebarIF<T> {

}
const useStyles = makeStyles((theme) => ({
  search: {
    marginTop: "1.5rem",
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
  }
}));
const Sidebar: React.FC<SidebarIF<any>> = ({ ...props }) => {
  const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    console.log(panel)
    console.log(isExpanded)
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      icon: "fa fa-pie-chart",
      name: "Chart",
      iconAdd: "fa fa-plus-circle",
      details: "Add Chart",
      link: "/admin/",
      subLink: "/admin/"
    },
    {
      icon: "fa fa-music",
      name: "Music",
      iconAdd: "fa fa-plus-circle",
      details: "Add Music",
      link: "/admin/song",
      subLink: "/admin/addSong"
    },
    {
      icon: "fa fa-list",
      name: "Thể loại",
      iconAdd: "fa fa-plus-circle",
      details: "Add Thể Loại",
      link: "/admin/songCate",
      subLink: "/admin/addCate"
    },
    {
      icon: "fa fa-play-circle",
      name: "Playlist",
      iconAdd: "fa fa-plus-circle",
      details: "Add Playlist",
      link: "/admin/playList",
      subLink: "/admin/addPlayList"
    },
    {
      icon: "fa fa-file-image-o",
      name: "Slider",
      iconAdd: "fa fa-plus-circle",
      details: "Add Slider",
      link: "/admin/slide",
      subLink: "/admin/addslide"
    },
    {
      icon: "fa fa-file-audio-o",
      name: "Albums",
      iconAdd: "fa fa-plus-circle",
      details: "Add Albums",
      link: "/admin/album",
      subLink: "/admin/addAlbum"
    },
    {
      icon: "fa fa-users",
      name: "User",
      iconAdd: "fa fa-plus-circle",
      details: "Add User",
      link: "/admin/userAdmin",
      subLink: "/admin/"
    },
    {
      icon: "fa fa-commenting",
      name: "Comment",
      iconAdd: "fa fa-plus-circle",
      details: "Chart Comment",
      link: "/admin/comment",
      subLink: "/admin/"
    },
    {
      icon: "fa fa-book",
      name: "Blog",
      iconAdd: "fa fa-plus-circle",
      details: "Add Blog",
      link: "/admin/blog",
      subLink: "/admin/addBlog"
    },
    {
      icon: "fa fa-calendar",
      name: "Danh mục blog",
      iconAdd: "fa fa-plus-circle",
      details: "Add Danh Mục",
      link: "/admin/categoryBlog",
      subLink: "/admin/addCategoryBlog"
    },
    {
      icon: "fa fa-user-o",
      name: "User play list",
      iconAdd: "fa fa-plus-circle",
      details: "Add User play list",
      link: "/admin/userPlayList",
      subLink: "/admin/addUserPlayList"
    },
    {
      icon: "fa fa-lightbulb-o",
      name: "Topic",
      iconAdd: "fa fa-plus-circle",
      details: "Add Topic",
      link: "/admin/topic",
      subLink: "/admin/addTopic"
    },
    {
      icon: "fa fa-address-book",
      name: "Nhạc sĩ",
      iconAdd: "fa fa-plus-circle",
      details: "Add Nhạc Sĩ",
      link: "/admin/artist",
      subLink: "/admin/addArtist"
    }
  ];
  return (
    <div className="_sidebar">
      <h2>ADMIN MUSIC GAME</h2>
      <div className="main_info">
        <div className="info_admin">
          {(state.user && state.token) ? 
           <Link to="/admin/profile"><div><img width={50} height={50} src={state.user?.avatar} alt="" /><div>{state.user?.first_name} {state.user?.last_name}</div></div></Link> : "err"}
        </div>
      </div>
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
      <nav className="tabs">
        <Link to="/admin">
          <AccordionSummary
            expandIcon={<ExpandMore style={{ color: "aqua" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{ background: "#1d2d47", height: "3.6rem" }}
          >
            <div className="tab">
              <label className="tab-label">
                <div className="grid_item">
                  <label className="tabs__item--icon">
                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                  </label>
                  <label className="button_text">Dashboard</label>
                </div>
              </label>
            </div>
          </AccordionSummary>
        </Link>
        {data.map(accordion => {
          const { icon } = accordion;
          return (
            <Link to={`${accordion.link}`}>
              <Accordion
                expanded={expanded == icon}
                key={icon}
                onChange={handleChange(icon)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore style={{ color: "aqua" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  style={{ background: "#1d2d47", height: "3.6rem" }}
                >
                  <div className="tab">
                    <label className="tab-label">
                      <div className="grid_item">
                        <label className="tabs__item--icon">
                          <i className={`${accordion.icon}`} aria-hidden="true"></i>
                        </label>
                        <label className="button_text">{accordion.name}</label>
                      </div>
                    </label>
                  </div>
                </AccordionSummary>
                <Link to={`${accordion.subLink}`}>
                  <AccordionDetails style={{ height: "3.5rem", background: "#121a34" }}>

                    <div className="tab-content">
                      <label className="add_item">
                        <i className={`${accordion.iconAdd} icon_item`} aria-hidden="true"></i>
                        <div>{accordion.details}</div>
                      </label>
                    </div>
                  </AccordionDetails>
                </Link>
              </Accordion>
            </Link>
          );
        })}
      </nav>
    </div>
  )
}

export default Sidebar
