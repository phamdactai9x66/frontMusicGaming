import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { Select, MenuItem, Menu } from "@mui/material"
import UserPlaylist from "api/userPlaylist";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import { HandleGet } from "component/MethodCommon";
import ImagePlaylist from "./imagePlaylist";
import dataStorage from "component/dataStorage";
import { Box, Modal, Button, TextField } from '@mui/material';

interface ListPLaylistIF<T> {
    render: number
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "0.5rem",
    p: 4,
};
const ListPLaylist: React.FC<ListPLaylistIF<any>> = ({ render, ...props }) => {
    const [openModal, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    //
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //
    const { user: { _id: id_User } } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [state, setstate] = useState({ display: false, data: [] });
    const [renderPlaylist, setrenderPlaylist] = useState<boolean>(false);
    const renderComponent = (): void => {
        setrenderPlaylist(value => !value)
    }
    useEffect(() => {
        dataStorage.renderPlaylist = renderComponent as any
    }, [])
    useEffect(() => {
        (async () => {
            const query = {
                id_User
            }
            const [data, error] = await HandleGet(UserPlaylist.getAll, query);
            if (error) return setstate(value => ({ ...value, display: false }))
            setstate({ display: true, data: data.data });
        })()
        return () => {
            setstate(value => ({ ...value, display: false }))
        }
    }, [id_User, render, renderPlaylist])
    return (
        <>
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
                                        <FiPlayCircle className="icon" style={{marginRight: "0.2rem"}}/>
                                    </Link>
                                    <Button
                                        id="demo-positioned-button"
                                        aria-controls="demo-positioned-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
           
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
                                <MenuItem onClick={handleOpen}><AiFillEdit /> Sửa playlist</MenuItem>
                                <Modal
                                    open={openModal}
                                    onClose={handleCloseModal}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <TextField id="outlined-basic" value={current.name} label="name" variant="outlined" />
                                        <Button style={{ height: "3.4rem", marginLeft: "1rem" }} variant="contained"> Sửa playlist</Button>
                                    </Box>
                                </Modal>
                                <MenuItem><AiFillDelete /> Xóa playlist</MenuItem>
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
