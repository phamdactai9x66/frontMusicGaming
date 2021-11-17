import React, { useEffect, useState } from "react";
import { RouteChildrenProps, withRouter } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Pagination } from "@mui/material";
import { FcKey } from "react-icons/fc";
import { Modal } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { spacing } from "@mui/system";

interface ListenTogether<T> {}

const ListenTogether: React.FC<ListenTogether<any>> = ({ ...props }) => {
    document.title = "Nghe cùng nhau - Music Game";
    const [open, setOpen] = React.useState(false);
    const [rooms, setRooms] = useState([]);

    // useEffect( () => {

    // }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#2F6292",
        borderRadius: 3,
        border: 0,
        p: 4,
        color: "white",
    };

    const styleContend = {};

    return (
        <>
            <div className="listenTogeter">
                <div className="room">
                    <div className="search">
                        <form action="">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <div className="search_hover"></div>
                            <input type="text" placeholder="Nhập tên phòng" />
                        </form>
                    </div>
                    {/* map rooms here */}
                    <div className="room_box">
                        <div className="name">
                            <h6>Name room</h6>
                            <div>
                                <AvatarGroup max={4}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                    />
                                    <Avatar
                                        alt="Travis Howard"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="/static/images/avatar/3.jpg"
                                    />
                                    <Avatar
                                        alt="Agnes Walker"
                                        src="/static/images/avatar/4.jpg"
                                    />
                                    <Avatar
                                        alt="Trevor Henderson"
                                        src="/static/images/avatar/5.jpg"
                                    />
                                </AvatarGroup>
                            </div>
                        </div>
                        <div className="key">
                            <FcKey
                                className="key"
                                id="myBtn"
                                onClick={handleOpen}
                            />
                            {/* Modal */}
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className="box__room">
                                    <h5>Mời nhập Pass</h5>
                                    <input
                                        type="text"
                                        placeholder="Room ID"
                                        style={{
                                            width: 330,
                                            height: 40,
                                            marginTop: 15,
                                            marginBottom: 10,
                                            backgroundColor: "#06111C",
                                            borderRadius: 3,
                                            color: "#fff",
                                            border: "none",
                                            paddingLeft: 10,
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        sx={{ width: 330 }}
                                    >
                                        Join room
                                    </Button>
                                </Box>
                            </Modal>
                            {/* end */}
                        </div>
                    </div>
                    {/* end map room */}

                    {/* <div className="room_box">
                        <div className="name" onClick={handleOpen}>
                            <h6>Name room</h6>
                            <div>
                                <AvatarGroup max={4}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                    />
                                    <Avatar
                                        alt="Travis Howard"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="/static/images/avatar/3.jpg"
                                    />
                                    <Avatar
                                        alt="Agnes Walker"
                                        src="/static/images/avatar/4.jpg"
                                    />
                                    <Avatar
                                        alt="Trevor Henderson"
                                        src="/static/images/avatar/5.jpg"
                                    />
                                </AvatarGroup>
                            </div>
                        </div>
                        <div className="key" data-bs-toggle="modal">
                            <FcKey />
                            <FcKey onClick={handleOpen} />
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className="box__room">
                                    <h5>Mời nhập Pass</h5>
                                    <input
                                        type="text"
                                        placeholder="Room ID"
                                        style={{
                                            width: 330,
                                            height: 40,
                                            marginTop: 15,
                                            marginBottom: 10,
                                            backgroundColor: "#06111C",
                                            borderRadius: 3,
                                            color: "#fff",
                                            border: "none",
                                            paddingLeft: 10,
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        sx={{ width: 330 }}
                                    >
                                        Join room
                                    </Button>
                                </Box>
                            </Modal>
                        </div>
                    </div> */}
                    <div className="Pagination">
                        <Pagination
                            count={10}
                            onClick={() => {
                                console.log();
                            }}
                            style={{
                                padding: 10,
                                paddingTop: 20,
                                color: "#fff",
                            }}
                        />
                    </div>
                </div>
                <div className="create_room">
                    <TextField
                        label="Name"
                        variant="filled"
                        className="input_room"
                    />
                    <TextField
                        label="Password"
                        variant="filled"
                        className="input_room"
                    />
                    <Button variant="contained" color="primary">
                        Create room
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ListenTogether;
