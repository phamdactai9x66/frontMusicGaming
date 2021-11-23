import React, {useState} from 'react'
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { FaTshirt } from 'react-icons/fa';
import { Button } from "@mui/material";

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
  },
  topic_button: {
    background: "#000000ad",
    width: "80px",
    height: "80px",
    borderRadius: "0.3rem",
    position: "absolute",
    top: "0",
    display: "flex",
    justifyContent: "center",      
    alignItems: "center",
    opacity: "0",
    transition: "0.3s",
    "&:hover": {
      opacity: "1",
      transition: "0.3s",
    }
  },
  topic_img: {
    width: "80px",
    height: "80px",
    borderRadius: "0.3rem",
    cursor: "pointer",
  },
  topic_figure: {
    position: "relative",
  }
}));
interface TopicIF<T> {

}
const Topic: React.FC<TopicIF<any>> = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
    return (
        <>
            <FaTshirt className="icon" onClick={() => {
          setOpen(!open);
        }} />
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
               <figure className={classes.topic_figure}>
             <img className={classes.topic_img} src="https://img1.songdelamgi.com/gallery/2020/04/118905-11748.jpg" alt=""/>
             <div className={classes.topic_button}>
                <Button variant="outlined" style={{fontSize: "0.45rem"}} className="text-light">Áp dụng</Button>
              </div>
             <div>Màu xanh</div>
               </figure>
               <figure className={classes.topic_figure}>
             <img className={classes.topic_img} src="https://giaydantuonganhtuan.vn/upload_images/images/do-600x600.jpg" alt=""/>
              <div className={classes.topic_button}>
                <Button variant="outlined" style={{fontSize: "0.45rem"}} className="text-light">Áp dụng</Button>
              </div>
              <div>Màu đỏ</div>
               </figure>
               <figure className={classes.topic_figure}>
             <img className={classes.topic_img} src="https://giaydantuonganhtuan.vn/upload_images/images/vang-600x600.jpg" alt=""/>
             <div className={classes.topic_button}>
                <Button variant="outlined" style={{fontSize: "0.45rem"}} className="text-light">Áp dụng</Button>
              </div>
             <div>Màu vàng</div>
               </figure>
               <figure className={classes.topic_figure}>
             <img className={classes.topic_img} src="https://genk.mediacdn.vn/thumb_w/600/2016/11349324-1685331671706633-667022670-n-1457155607213-crop-1457155622873.jpg" alt=""/>
             <div className={classes.topic_button}>
                <Button variant="outlined" style={{fontSize: "0.45rem"}} className="text-light">Áp dụng</Button>
              </div>
             <div>Màu đen</div>
               </figure>
               <figure className={classes.topic_figure}>
             <img className={classes.topic_img} src="https://st.quantrimang.com/photos/image/2020/07/30/Hinh-Nen-Trang-32.jpg" alt=""/>
             <div className={classes.topic_button}>
                <Button variant="outlined" style={{fontSize: "0.45rem"}} className="text-light">Áp dụng</Button>
              </div>
             <div>Màu trắng</div>
               </figure>
             </section>
       <input type="color" className={classes.topic_color}/>
       <br/><br/>
       <Button variant="contained" color="error">Chosse</Button>
           </div>
           
       </div>
      </Modal> 
        </>
    )
}

export default Topic
