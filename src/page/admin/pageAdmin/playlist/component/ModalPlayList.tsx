import React, { useEffect, useState } from 'react'
import { Backdrop, Box, Modal, Fade, Typography, Grid, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import playlistApi from 'api/playlistApi'
import { HandleGet, getDate } from "component/MethodCommon"

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

const ModalPlayList: React.FC<Modal<any>> = ({ state, onClose, ...props }) => {
  const [dataPlay, setDataPlay] = useState<any>({ data: {}, error: false, display: false });
  const classes = useStyle();

  useEffect(() => {
    (async () => {
      if (dataPlay.error) return;
      const [data, error] = await HandleGet(playlistApi.getOne, state._id);
      setDataPlay({ error: false, data: data?.data, display: true })
    })()
    return () => {
      setDataPlay((value: any) => ({ ...value, display: false }))
    }
  }, [state._id])

  return (
    <div>
      {dataPlay.display ?
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
                    <img
                      src={(dataPlay.data?.[0] as any)?.image}
                      className={classes.styleImage}
                      alt=""
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="name"
                      value={(dataPlay.data?.[0] as any)?.name}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="createdAt"
                      value={getDate(dataPlay.data?.createdAt)}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="updatedAt"
                      value={getDate(dataPlay.data?.updatedAt)}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal> : null}
    </div>
  )
}

export default ModalPlayList
