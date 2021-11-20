import React, { useEffect, useRef, useState } from 'react'
import categoryApi from 'api/categoryApi'
import topicsApi from 'api/topicApi'
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

interface Modal<T> {
  state: { display?: boolean, _id?: string },
  onClose: any
}

const ModalCategory: React.FC<Modal<any>> = ({ state, onClose, ...props }) => {
  const [dataCategory, setDataCategory] = useState<any>({ data: {}, error: false, display: false });
  const nameTopic = useRef<any>('');
  const classes = useStyle();

  useEffect(() => {
    (async () => {
      if (dataCategory.error) return;
      const [data, error] = await HandleGet(categoryApi.getOne, state._id);
      if (error) setDataCategory((value: any) => ({ ...value, error: true, display: false }));
      await findTopic(data?.data?.id_Topic)
      setDataCategory({ error: false, data: data?.data, display: true })
    })()
    return () => {
      setDataCategory((value: any) => ({...value, display: false}))
    }
  }, [state._id])

  const findTopic = async <T extends string>(_id: T) => {
    if (!_id) return; 
    const findTopics = await topicsApi.getOne(_id);

    if (findTopics.status !== variableCommon.statusF) {
      const { name } = findTopics.data;
      return nameTopic.current = `${name}`
    }
    nameTopic.current = ''
  }

  return (
    <div>
      {dataCategory.display ? 
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
                    <img src={dataCategory.data?.image} className={classes.styleImage} alt="" />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="Name" value={dataCategory.data?.name} variant="standard" fullWidth />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="Topic" value={nameTopic.current} variant="standard" fullWidth />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="createdAt" value={getDate(dataCategory.data?.createdAt)} variant="standard" fullWidth />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField inputProps={{ readOnly: true }} label="updatedAt" value={getDate(dataCategory.data?.updatedAt)} variant="standard" fullWidth />
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal> : null }
    </div>
  )
}

export default ModalCategory
