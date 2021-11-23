
import React from 'react'
import { Link } from "react-router-dom";
import imgAdmin from './image/admin.png'
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { ExpandMore } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';

interface SidebarIF<T> {

}

const Sidebar: React.FC<SidebarIF<any>> = ({ ...props }) => {
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
      link: "/admin/",
      subLink: "/admin/"
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
      link: "/admin/",
      subLink: "/admin/"
    },
    {
      icon: "fa fa-commenting",
      name: "Comment",
      iconAdd: "fa fa-plus-circle",
      details: "Chart Comment",
      link: "/admin/",
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
      link: "/admin/",
      subLink: "/admin/"
    }
  ];
  return (
    <div className="_sidebar">
      <h2>ADMIN MUSIC GAME</h2>
      <div className="main_info">
        <div className="info_admin">
          <img width={50} height={50} src={imgAdmin} alt="" />
          <div>Lò Văn An</div>
        </div>
      </div>
      <div className="main_search">
        <SearchIcon className="icon_search" /> 
        <input type="text" placeholder="Search..." className="_search" />
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
