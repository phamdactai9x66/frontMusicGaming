import React, { useEffect, useState } from 'react'
import useApi from 'api/useApi'
import { makeStyles } from '@mui/styles'
import { HandleGet, getDate } from 'component/MethodCommon'
import { variableCommon } from 'component/variableCommon'
import { Backdrop, Box, Modal, Fade, Typography, Grid, TextField } from "@mui/material"

const typeModal: any = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 700,
  bgColor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  background: 'gray'
}

const useStyle = makeStyles({
  styleImage: {
    objectFit: 'cover',
    width: 150,
    height: 150,
    borderRadius: 5
  }
})

interface ModalUser<T> {
  state: { display?: boolean, _id?: string },
  onClose: any
}

const ModalUser: React.FC<ModalUser<any>> = ({ state, onClose, ...props }) => {
  const [dataUser, setDataUser] = useState<any>({ data: {}, error: false, display: false });
  const classes = useStyle();

  useEffect(() => {
    (async () => {
      if (dataUser.error) return;
      const [data, error] = await HandleGet(useApi.getOne, state._id);
      setDataUser({ error: false, data: data.data, display: true });
    })()
    return () => {
      setDataUser((value: any) => ({ ...value, display: false }))
    }
  }, [state._id])

  return (
    <div>
      {dataUser ?
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
                      src={(dataUser.data?.[0] as any)?.avatar}
                      className={classes.styleImage}
                      alt=""
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="User Name"
                      value={(dataUser.data?.[0] as any)?.userName}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="Email"
                      value={(dataUser.data?.[0] as any)?.email}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="Gender"
                      value={(dataUser.data?.[0] as any)?.gender}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="Role"
                      value={(dataUser.data?.[0] as any)?.role}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true, }}
                      label="Active"
                      value={(dataUser.data?.[0] as any)?.active}
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
                      value={getDate(dataUser.data?.createdAt)}
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
                      value={getDate(dataUser.data?.updatedAt)}
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

export default ModalUser
