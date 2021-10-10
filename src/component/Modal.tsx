import React, { useEffect } from 'react';
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material";
import apiAlbum from "api/albumApi"
const style: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface Modal<T> {
    state: { display?: boolean, _id?: string },
    onClose: any
}

const ComponentModal: React.FC<Modal<any>> = ({ state, onClose, ...props }) => {
    console.log(state)
    useEffect(() => {
        (async () => {
            // const findAlbum = await apiAlbum.getOne<string>(state._id as any);
            console.log(state._id);
        })()
        return () => {

        }
    }, [state])
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={state.display as any}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={state.display}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ComponentModal
