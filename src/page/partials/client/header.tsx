
import React, {useState} from 'react'
import { BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';
import { RiAdminFill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSignInAlt,FaTshirt } from 'react-icons/fa';
import { Select, MenuItem, Button } from "@mui/material";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";

interface Header<T> {

}
const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    topic: {
        background: "#2c5491",
        borderRadius: "0.3rem",
        padding: "2rem",
        color: "#fff",
        display: "flex",
        gap: "2rem"
    },
    topic_color: {
       width: "100%",
       height: "13rem",
       borderRadius: "0.3rem",
       padding: "1rem",
       background: "#ffd6ba",
       boxShadow: "0px 3px 4px 1px rgb(0 0 0 / 50%)"
    }
  }));
const Header: React.FC<Header<any>> = ({ ...props }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        <div className="header">
            <div className="search">
                <BiSearch className="icon" />
                <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
            </div>
            <div className="icon-main">
                <BiUpload className="icon" />
                <FaTshirt className="icon" onClick={() => {
          setOpen(!open);
        }} />
                <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className={classes.modal}
      >
       <div className={classes.topic}>
         <img width={300} src="https://i.pinimg.com/736x/6e/f3/7d/6ef37da810d9bff3a983198a178f8390.jpg" alt=""/>
           <div>
           <h3>Chọn chủ đề của bạn <FaTshirt className="icon" /></h3>
       <input type="color" className={classes.topic_color}/>
       <br/><br/>
       <Button variant="contained" color="error">Chosse</Button>
           </div>
           
       </div>
      </Modal>
    </div>
                <BiUserCircle className="icon"/>
                <Select>
          <div style={{background: "#101929",margin: "-0.5rem 0 -0.5rem 0"}}>
          <MenuItem  value={10}>
        <Link to="/signin" className="link"><FaSignInAlt className="_icon"/>Sign in</Link>
                        
        </MenuItem>
        <MenuItem  value={20}>
        <Link to="/admin" className="link"><RiAdminFill className="_icon" /> Admin</Link>
        </MenuItem>
          </div>

      </Select>
      <IoMdArrowDropdown className="drop_icon"/>
            </div>
        </div>
    )
}

export default Header
