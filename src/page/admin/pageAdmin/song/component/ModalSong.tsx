import React, { useEffect, useRef, useState } from 'react'
import songApi from 'api/songApi'
import albumApi from 'api/albumApi'
import categoryApi from 'api/categoryApi'
import topicsApi from 'api/topicApi'
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

interface ModalSong<T> {
  state: { display?: boolean, _id?: string },
  onClose: any
}


const ModalSong: React.FC<ModalSong<any>> = ({ state, onClose, ...props }) => {
  const [dataSong, setDataSong] = useState<any>({ data: {}, error: false, display: false });
  const classes = useStyle();
  const nameTopic = useRef<any>('');
  const nameAlbums = useRef<any>('');
  const nameCategory = useRef<any>('');

  useEffect(() => {
    (async () => {
      if (dataSong.error) return;
      const [data, error] = await HandleGet(songApi.getOne, state._id);
      if (error) setDataSong((value: any) => ({ ...value, error: true, display: false }));
      await findTopic(data?.data?.id_Topic);
      await findAlbum(data?.data?.id_album);
      await findCategory(data?.data?.id_Categories);
      setDataSong({ error: false, data: data?.data, display: true });
    })()
    return () => {
      setDataSong((value: any) => ({ ...value, display: false }))
    }
  }, [state._id])

  const findTopic = async <T extends string>(_id: T) => {
    if (!_id) return;
    const findTopics = await topicsApi.getOne(_id);

    if (findTopics.status !== variableCommon.statusF) {
      const { name } = findTopics.data[0];
      return nameTopic.current = name
    }
    nameTopic.current = ''
  }

  const findAlbum = async <T extends string>(_id: T) => {
    if (!_id) return;
    const findAlbums = await albumApi.getOne(_id);

    if (findAlbums.status !== variableCommon.statusF) {
      const { title } = findAlbums.data[0];
      return nameAlbums.current = title
    }
    nameAlbums.current = ''
  }

  const findCategory = async <T extends string>(_id: T) => {
    if (!_id) return;
    const findCategories = await categoryApi.getOne(_id);

    if (findCategories.status !== variableCommon.statusF) {
      const { name } = findCategories.data[0];
      return nameCategory.current = name
    }
    nameCategory.current = ''
  }

  return (
    <div>
      {dataSong.display ?
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
                      src={dataSong.data?.image}
                      className={classes.styleImage}
                      alt=""
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Title"
                      value={dataSong.data?.title}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Audio"
                      value={dataSong.data?.audio}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="View"
                      value={dataSong.data?.view}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Active"
                      value={dataSong.data?.active}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Describe"
                      value={dataSong.data?.describe}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Topic"
                      value={nameTopic.current}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Albums"
                      value={nameAlbums.current}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Category"
                      value={nameCategory.current}
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

export default ModalSong
