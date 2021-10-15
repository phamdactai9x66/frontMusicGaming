import React, { useEffect, useState, useRef } from 'react';
import { Backdrop, Box, Modal, Fade, Typography, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import apiTopic from "api/topicApi";
import { HandleGet, getDate } from "component/MethodCommon";

const typeModal: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 700,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,

}
const useStyle = makeStyles({
    styleImage: {
        objectFit: 'cover',
        width: 150,
        height: 150,
        borderRadius: 5

    }
})
interface Modal<T> {
    state: { display?: boolean, _id?: string },
    onClose: any
}

const ComponentModal: React.FC<Modal<any>> = ({ state, onClose, ...props }) => {
    const [dataAlbume, setdataAlbume] = useState<any>({ data: {}, error: false, display: false });
    const classes = useStyle();
    useEffect(() => {
        (async () => {
            if (dataAlbume.error) return;
            const [data, error] = await HandleGet(apiTopic.getOne, state._id);
            setdataAlbume({ error: false, data: data.data, display: true })
        })()
        return () => {
            setdataAlbume((value: any) => ({ ...value, display: false }))
        }
    }, [state._id])

    return (
        <div>
            {dataAlbume.display ?
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
                        <Box sx={typeModal}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography >
                                        <img src={dataAlbume.data?.image} className={classes.styleImage} alt="" />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography >
                                        <TextField inputProps={{ readOnly: true, }} label="name" value={dataAlbume.data?.name} variant="standard" fullWidth />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography >
                                        <TextField inputProps={{ readOnly: true, }} label="createdAt" value={getDate(dataAlbume.data?.createdAt)} variant="standard" fullWidth />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography >
                                        <TextField inputProps={{ readOnly: true, }} label="updatedAt" value={getDate(dataAlbume.data?.updatedAt)} variant="standard" fullWidth />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Fade>
                </Modal> : null}

        </div>
    );
}

export default ComponentModal
