
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
       height: "6rem",
       borderRadius: "0.3rem",
       padding: "1rem",
       background: "#ffd6ba",
       boxShadow: "0px 3px 4px 1px rgb(0 0 0 / 50%)"
    },
    topic_select_color: {
       display: "grid",
       gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
       gap: "2rem",
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
           <br/>
             <section className={classes.topic_select_color}>
               <figure>
             <img width={80} height={80} style={{borderRadius: "0.3rem",cursor: "pointer"}} src="https://giaydantuonganhtuan.vn/upload_images/images/do-600x600.jpg" alt=""/>
              <div>Màu đỏ</div>
               </figure>
               <figure>
             <img width={80} height={80} style={{borderRadius: "0.3rem",cursor: "pointer"}} src="https://giaydantuonganhtuan.vn/upload_images/images/vang-600x600.jpg" alt=""/>
             <div>Màu vàng</div>
               </figure>
               <figure>
             <img width={80} height={80} style={{borderRadius: "0.3rem",cursor: "pointer"}} src="https://vn.japo.news/contents/wp-content/uploads/2017/07/hqdefault.jpg" alt=""/>
             <div>Màu xanh</div>
               </figure>
               <figure>
             <img width={80} height={80} style={{borderRadius: "0.3rem",cursor: "pointer"}} src="https://genk.mediacdn.vn/thumb_w/600/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg" alt=""/>
             <div>Màu đen</div>
               </figure>
               <figure>
             <img width={80} height={80} style={{borderRadius: "0.3rem",cursor: "pointer"}} src="https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-32.jpg" alt=""/>
             <div>Màu trắng</div>
               </figure>
             </section>
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
