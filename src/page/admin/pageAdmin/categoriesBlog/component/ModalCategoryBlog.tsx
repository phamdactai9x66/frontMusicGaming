import React, { useEffect, useState } from 'react'
import { makeStyles } from "@mui/styles"
import categoryBlogApi from 'api/categoryBlogApi'
import { HandleGet, getDate } from "component/MethodCommon"
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
interface ModalCategoryBlog<T> {
  state: { display?: boolean, _id?: string },
  onClose: any
}

const ModalCategoryBlog: React.FC<ModalCategoryBlog<any>> = ({ state, onClose, ...props }) => {
  const [dataCategoryBlog, setDataCategoryBlog] = useState<any>({ data: {}, error: false, display: false });
  console.log('Dtaaa : ', dataCategoryBlog);
  useEffect(() => {
    (async () => {
      if (dataCategoryBlog.error) return;
      const [data, error] = await HandleGet(categoryBlogApi.getAll, { _id: state._id });

      if (error) setDataCategoryBlog((value: any) => ({ ...value, error: true, display: false }))
      setDataCategoryBlog({ error: false, data: data?.data, display: true })
    })()
    return () => {
      setDataCategoryBlog((value: any) => ({ ...value, display: false }))
    }
  }, [state._id])

  return (
    <div>
      {dataCategoryBlog.display ?
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
                      label="name"
                      variant="standard"
                      fullWidth
                      value={(dataCategoryBlog.data?.[0] as any)?.name}
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography >
                    <TextField
                      inputProps={{ readOnly: true }}
                      label="createdAt"
                      value={getDate(dataCategoryBlog.data?.createdAt)}
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
                      value={getDate(dataCategoryBlog.data?.updatedAt)}
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

export default ModalCategoryBlog
