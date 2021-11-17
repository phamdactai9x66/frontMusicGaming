import React, { useEffect, useRef, useState } from 'react'
import userPlaylistApi from 'api/userPlaylistApi'
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

interface ModalUserPlayList<T> {
  state: { display?: boolean, _id?: string },
  onClose: any
}

const ModalUserPlayList: React.FC<ModalUserPlayList<any>> = ({ state, onClose, ...props }) => {
  const [dataUserPlayList, setDataUserPlayList] = useState<any>({data: {}, error: false, display: false});
  const nameUser = useRef<any>('');
  const classes = useStyle();

  useEffect(() => {
    (async () => {
      if (dataUserPlayList.error) return;
      const [data, error] = await HandleGet(userPlaylistApi.getOne, state._id);
      if (error) setDataUserPlayList((value: any) => ({ ...value, error: true, display: false }));
      await findUser(data?.data?.id_User);
      setDataUserPlayList({ error: false, data: data?.data, display: true });
    })()
    return () => {
      setDataUserPlayList((value: any) => ({ ...value, display: false }))
    }
  }, [state._id])

  const findUser = async <T extends string>(_id: T) => {
    if (!_id) return;
    const findUsers = await useApi.getOne(_id);

    if (findUsers.status !== variableCommon.statusF) {
      const { last_name } = findUsers.data;
      return nameUser.current = `${last_name}`
    }
    nameUser.current = ''
  }

  return (
    <div>
      {dataUserPlayList.display && (
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
                      inputProps={{ readOnly: true }} 
                      label="Name" 
                      value={dataUserPlayList.data?.name}
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField 
                      inputProps={{ readOnly: true }} 
                      label="User" 
                      value={nameUser.current} 
                      variant="standard" 
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField 
                      inputProps={{ readOnly: true }} 
                      label="createdAt" 
                      value={getDate(dataUserPlayList.data?.createdAt)} 
                      variant="standard" 
                      fullWidth 
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField 
                      inputProps={{ readOnly: true }} 
                      label="updatedAt" 
                      value={getDate(dataUserPlayList.data?.updatedAt)} 
                      variant="standard" 
                      fullWidth 
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
      )}
    </div>
  )
}

export default ModalUserPlayList
