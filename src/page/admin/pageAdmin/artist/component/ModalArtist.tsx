import React, { useEffect, useState } from 'react'
import { Backdrop, Box, Modal, Fade, Typography, Grid, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ArtistApi from 'api/ArtistApi'
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
}
const useStyle = makeStyles({
  styleImage: {
    objectFit: 'cover',
    width: 150,
    height: 150,
    borderRadius: 5
  }
})

interface ModalArtist<T> {
  state: { display?: boolean, _id?: string },
  onClose: any
}

const ModalArtist: React.FC<ModalArtist<any>> = ({ state, onClose, ...props }) => {
  const [dataArtist, setDataArtist] = useState<any>({ data: {}, error: false, display: false });
  const classes = useStyle();

  useEffect(() => {
    (async () => {
      if (dataArtist.error) return;
      const [data, error] = await HandleGet(ArtistApi.getOne, state._id);
      setDataArtist({ error: false, data: data.data, display: true })
    })()
    return () => {
      setDataArtist((value: any) => ({ ...value, display: false }))
    }
  }, [state._id])

  return (
    <div>
      {dataArtist.display ?
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
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="First_Name"
                      value={dataArtist.data?.first_Name}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="Last_Name"
                      value={dataArtist.data?.last_Name}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    <img
                      src={dataArtist.data?.image}
                      className={classes.styleImage}
                      alt=""
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="Gender"
                      value={dataArtist.data?.gender === true ? 'Nam' : 'Nữ'}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="Birth"
                      value={getDate(dataArtist.data?.birth)}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="createdAt"
                      value={getDate(dataArtist.data?.createdAt)}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="updatedAt"
                      value={getDate(dataArtist.data?.updatedAt)}
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

export default ModalArtist
