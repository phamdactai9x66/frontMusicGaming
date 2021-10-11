import React, { useEffect, useState, useRef } from 'react';
import { Backdrop, Box, Modal, Fade, Typography, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import apiAlbum from "api/albumApi"
import { HandleGet, getDate } from "component/MethodCommon";
import ArtistApi from "api/ArtistApi";
import { variableCommon } from "component/variableCommon";
const typeModal: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 700,
    bgcolor: 'background.paper',
    // border: '2px solid #000',,
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
    const nameArtist = useRef<any>('');
    const classes = useStyle();
    useEffect(() => {
        (async () => {
            if (dataAlbume.error) return;
            const [data, error] = await HandleGet(apiAlbum.getOne, state._id);
            if (error) setdataAlbume((value: any) => ({ ...value, error: true, display: false }));
            await findArtist(data.data.id_Artist)
            setdataAlbume({ error: false, data: data.data, display: true })
        })()
        return () => {
            setdataAlbume((value: any) => ({ ...value, display: false }))
        }
    }, [state._id])

    const findArtist = async <T extends string>(_id: T) => {
        if (!_id) return;
        const findArirst = await ArtistApi.getOne(_id);

        if (findArirst.status !== variableCommon.statusF) {
            const { first_Name, last_Name } = findArirst.data
            return nameArtist.current = `${first_Name} ${last_Name}`
        }
        nameArtist.current = ''
    }
    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
                                        <TextField inputProps={{ readOnly: true, }} label="Title" value={dataAlbume.data?.title} variant="standard" fullWidth />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography >
                                        <TextField inputProps={{ readOnly: true, }} label="Artist" value={nameArtist.current} variant="standard" fullWidth />
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
