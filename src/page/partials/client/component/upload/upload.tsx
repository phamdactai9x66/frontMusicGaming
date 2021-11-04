import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { BiUpload } from 'react-icons/bi';

const useStyles = makeStyles(theme => ({
   file: {
      width: "2rem",
      height: "2.7rem",
      position: "absolute",
      zIndex: 1,
      opacity: 0
   }
}));
interface Upload<T> {

}
const Upload: React.FC<Upload<any>> = ({ ...props }) => {
  const classes = useStyles();
    return (
        <>
        <div style={{position: "relative"}}>
        <input type="file" className={classes.file}/>
          <BiUpload className="icon" style={{marginTop: "-0.3rem"}}/> 
        </div>        
        </>
    )
}

export default Upload
