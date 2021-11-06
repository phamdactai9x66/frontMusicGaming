import React, {useEffect, useRef, useState } from 'react'
import { makeStyles } from "@mui/styles"
import { Backdrop, Box, Modal, Fade, Typography, Grid, TextField } from "@mui/material"
import { variableCommon } from '../../../../../component/variableCommon'
import { HandleGet, getDate } from "../../../../../component/MethodCommon"
import slideApi from '../../../../../api/slideApi'
import songApi from '../../../../../api/songApi'

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
};
  
const useStyle = makeStyles({
    styleImage: {
        objectFit: 'cover',
        width: 150,
        height: 150,
        borderRadius: 5
    }
});

interface Modal<T> {
    state: { display?: boolean, _id?: string },
    onClose: any
};

const ModalSlide: React.FC<Modal<any>> = ({ state, onClose, ...props }) => {
    const [dataSlide, setDataSlide] = useState<any>({ data: {}, error: false, display: false });
    const nameSong = useRef<any>('');
    const classes = useStyle();

    useEffect(() => {
        (async () => {
          if (dataSlide.error) return;
          const [data, error] = await HandleGet(slideApi.getOne, state._id);
          if (error) setDataSlide((value: any) => ({ ...value, error: true, display: false }));
          await findSong(data?.data?.id_Topic)
          setDataSlide({ error: false, data: data?.data, display: true })
        })()
        return () => {
            setDataSlide((value: any) => ({...value, display: false}))
        }
      }, [state._id])
      
  const findSong = async <T extends string>(_id: T) => {
    if (!_id) return; 
    const findSong = await songApi.getOne(_id);

    if (findSong.status !== variableCommon.statusF) {
      const { name } = findSong.data
      return nameSong.current = `${name}`
    }
    nameSong.current = ''
  }
  return (
    <div>
      {dataSlide.display ? 
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
                  <Typography>
                    <img src={dataSlide.data?.image} className={classes.styleImage} alt="" />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="Name" value={dataSlide.data?.name} variant="standard" fullWidth />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="Content" value={dataSlide.data?.content} variant="standard" fullWidth />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="Song" value={nameSong.current} variant="standard" fullWidth />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="createdAt" value={getDate(dataSlide.data?.createdAt)} variant="standard" fullWidth />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="updatedAt" value={getDate(dataSlide.data?.updatedAt)} variant="standard" fullWidth />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal> : null }
    </div>
  )
}

export default ModalSlide
