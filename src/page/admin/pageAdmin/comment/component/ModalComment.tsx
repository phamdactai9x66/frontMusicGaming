import React, { useEffect, useState, useRef } from 'react'
import commentApi from 'api/commentApi'
import useApi from 'api/useApi'
import blogApi from 'api/BlogApi'
import { makeStyles } from '@mui/styles'
import { HandleGet, getDate } from 'component/MethodCommon'
import { variableCommon } from 'component/variableCommon'
import { Backdrop, Box, Modal, Fade, Typography, Grid, TextField } from "@mui/material";

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

interface ModalComment<T> {
  state: { display?: boolean, _id?: string },
  onClose: any
}

const ModalComment: React.FC<ModalComment<any>> = ({ state, onClose, ...props }) => {
  const [dataComment, setDataComment] = useState<any>({ data: {}, error: false, display: false });
  console.log('dataComment : ', dataComment);
  const classes = useStyle();
  const nameBlog = useRef<any>('');
  const nameUser = useRef<any>('');

  useEffect(() => {
    (async () => {
      if (dataComment.error) return;
      const [data, error] = await HandleGet(commentApi.getOne, state._id);
      // console.log('data comment : ', data);
      if (error) setDataComment((value: any) => ({ ...value, error: true, display: false }));
      await findUser(data?.data?.id_User);
      await findBlog(data?.data?.id_Blog);
      setDataComment({ error: false, data: data?.data, display: true })
    })()
    return () => {
      setDataComment((value: any) => ({ ...value, display: false }))
    }
  }, [state._id])

  const findUser = async <T extends string>(_id: T) => {
    if (!_id) return;
    const findUser = await useApi.getOne(_id);
    console.log('Modal Comment user : ', findUser);

    if (findUser.status !== variableCommon.statusF) {
      const { first_name, last_name } = findUser.data;
      return nameUser.current = `${first_name} ${last_name}`;
    }
    nameUser.current = ''
  }

  const findBlog = async <T extends string>(_id: T) => {
    if (!_id) return;
    const findBlog = await blogApi.getOne(_id);
    console.log('Modal Comment blog : ', findBlog);

    if (findBlog.status !== variableCommon.statusF) {
      const { title } = findBlog.data;
      return nameBlog.current = title;
    }
    nameBlog.current = ''
  }

  return (
    <div>
      {dataComment.display ?
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
                      label="Title"
                      variant="standard"
                      fullWidth
                      value={(dataComment.data?.[0] as any)?.title}
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="rangeStart"
                      variant="standard"
                      fullWidth
                      value={dataComment.data?.[0].rangeStart}
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="Comment"
                      variant="standard"
                      fullWidth
                      value={dataComment.data?.[0].comment}
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="State"
                      variant="standard"
                      fullWidth
                      value={dataComment.data?.[0].state}
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
                      label="Blog"
                      value={nameBlog.current}
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
                      value={getDate(dataComment.data?.createdAt)}
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
                      value={getDate(dataComment.data?.updatedAt)}
                      variant="standard"
                      fullWidth
                    />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal> : null
      }
    </div>
  )
}

export default ModalComment
