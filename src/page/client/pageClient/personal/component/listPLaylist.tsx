import React, { useEffect, useState,useReducer } from 'react'
import { Link } from "react-router-dom"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { MenuItem, Menu } from "@mui/material"
import UserPlaylist from "api/userPlaylist";
import { formStateUser } from 'redux/user/stateUser';
import { HandleGet,pustAction,typeAciton,handleReducer,initialReducer } from "component/MethodCommon";
import ImagePlaylist from "./imagePlaylist";
import dataStorage from "component/dataStorage";
import { Button } from '@mui/material';
import Popup from '@titaui/reactjs-popup';
import { useSelector } from 'react-redux';
import ModalPlaylistEdit from './modalPlaylistEdit';
import { variableCommon } from "component/variableCommon";
import { BiFolderOpen } from "react-icons/bi";
import ModalRemove from 'page/client/moldal/modalRemove';

interface ListPLaylistIF<T> {
    render: number,
}

interface stateIF<T> {
    display: boolean,
    data: any | T,
}

const ListPLaylist: React.FC<ListPLaylistIF<any>> = ({ render, ...props }) => {

    const [stateDelete, dispatch] = useReducer(handleReducer, initialReducer);
    const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openModalRemove ,setOpenModalRemove] = useState(false);
    const [anchorItem, setAnchorItem] = useState({
        _id: "",
        name: "",
        id_User: ""
    })
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>, item: any) => {
        setAnchorEl(event.currentTarget);
        setAnchorItem(item)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorItem({
            _id: "",
            name: "",
            id_User: ""
        })
    };
    // 
  
    //
    const { user: { _id: id_User } } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [state, setstate] = useState<stateIF<any>>({ display: false, data: [] });
    const [renderPlaylist, setrenderPlaylist] = useState<boolean>(false);
    const renderComponent = (): void => {
        setrenderPlaylist(value => !value)
    }
    useEffect(() => {
        dataStorage.renderPlaylist = renderComponent as any
    }, []);

    useEffect(() => {
        (async () => {
   
            const query = {
                id_User,
                ...stateDelete.Filter
            }

            const [data, error] = await HandleGet(UserPlaylist.getAll, query);
            if (data?.status !== variableCommon.statusS) return dispatch(pustAction(typeAciton.error))

            if (error) return setstate(value => ({ ...value, display: false }))
            setstate({ display: true, data: data.data });
        })()
        return () => {
            setstate(value => ({ ...value, display: false }))
        }
    }, [id_User, render, renderPlaylist,stateDelete.Filter]);

    const deleteOne = async () => {
        // console.log(anchorItem)
       
            if (!anchorItem._id) return;
            dispatch(pustAction(typeAciton.deleteOne, { _id: anchorItem._id }))
        
            const response = await UserPlaylist.deleteOne(anchorItem._id);
            if(response.status === variableCommon.statusS){
                setstate({ display: true, data: state.data.filter( (i: any) => i._id !== anchorItem._id) })
            }
        
     
      }
    const modalRemove =()=>{
        setOpenModalRemove(!openModalRemove);
        setAnchorItem({
            _id: "",
            name: "",
            id_User: ""
        })
    }
    const handleRename = (item: any) => {
        const findIndex = state.data.findIndex( (i: any) => i._id === item._id);
        state.data.splice(findIndex, 1, item)
    }
    console.log("this is state: ", state.data)
    return (
        <>
        { openModalRemove == false ? '': 
        (
            
            <><ModalRemove modalRemove={modalRemove} deleteOne={deleteOne} ></ModalRemove></>
        )
        }
            {state.display ?
                state?.data?.map((current: any, index: number) => {
                    return (

                        <div className="box" key={index}>

                            <ImagePlaylist idPlaylist={current?._id} />

                            <div className="icon-box">
                                <div>
                                    <FiPlayCircle className="icon" style={{ opacity: 0 }} />
                                    <Link to={{
                                        pathname: `/playlistDetail/${current?._id}`,
                                        state: current
                                    }} >
                                        <BiFolderOpen className="icon" style={{marginRight: "0.2rem"}}/>
                                    </Link>
                                    <Button
                                        id="demo-positioned-button"
                                        aria-controls="demo-positioned-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, current)}
           
                                    >
                                     <HiOutlineDotsCircleHorizontal className="icon" style={{ fontSize: "1.8rem" }}/>
                                    </Button>
                                </div>
                            </div>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                
                                {userState.token && userState.user ? <Popup
                                modal
                                overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                                closeOnDocumentClick={true}
                                closeOnEscape={true}
                                trigger={() =>
                                    <MenuItem><AiFillEdit /> Sửa playlist</MenuItem>
                                }
                                    >
                                {(close: any) => (<ModalPlaylistEdit handleRename={handleRename} anchorItem={anchorItem} close={close} />)}
                            </Popup> : null}
                               <div onClick={handleClose}> <MenuItem onClick={modalRemove}><AiFillDelete /> Xóa playlist</MenuItem></div>
                            </Menu>

                            <h6>{current.name} </h6>
                        </div>

                    )
                })
                : null}
        </>
    )
}

export default ListPLaylist
