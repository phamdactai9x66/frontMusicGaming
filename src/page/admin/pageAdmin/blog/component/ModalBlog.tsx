import React, { useEffect, useRef, useState } from 'react'
import useApi from 'api/useApi'
import categoryBlogApi from 'api/categoryBlogApi'
import blogApi from 'api/BlogApi'
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

interface ModalBlog<T> {
  state: { display?: boolean, _id?: string},
  onClose: any
}

const ModalBlog: React.FC<ModalBlog<any>> = ({state, onClose, ...props}) => {
  // tối code tiếp
  const [dataBlog, setDataBlog] = useState<any>({ data: {}, error: false, display: false});
  const nameCategoryBlog = useRef<any>('');
  const nameUser = useRef<any>('');
  const classes = useStyle();

  useEffect(() => {
    (async () => {
      if (dataBlog.error) return ;
      const [data, error] = await HandleGet(blogApi.getOne, state._id);
      if (error) setDataBlog((value: any) => ({ ...value, error: true, display: false }));
      await findUser(data?.data?.id_User);
      await findCategoryBlog(data?.data?.id_CategoryBlog);
      setDataBlog({ error: false, data: data?.data, display: true });
    })()
    return () => {
      setDataBlog((value: any) => ({...value, display: false}))
    }
  }, [state._id])
  
  const findUser = async <T extends string>(_id: T) => {
    if (!_id) return; 
    const findUser = await useApi.getOne(_id);

    if (findUser.status !== variableCommon.statusF) {
      const { name } = findUser.data;
      return nameUser.current = `${name}`;
    }
    nameUser.current = ''
  }

  const findCategoryBlog = async <T extends string>(_id: T) => {
    if (!_id) return; 
    const findCategoryBlog = await categoryBlogApi.getOne(_id);

    if (findCategoryBlog.status !== variableCommon.statusF) {
      const { name } = findCategoryBlog.data;
      return nameCategoryBlog.current = `${name}`;
    }
    nameCategoryBlog.current = ''
  }

  return (
    <div>
      {dataBlog.display ? 
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
                      src={dataBlog.data?.image} 
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
                      value={dataBlog.data?.title} 
                      variant="standard" 
                      fullWidth 
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField 
                      inputProps={{ readOnly: true }} 
                      label="Content" 
                      value={dataBlog.data?.content} 
                      variant="standard" 
                      fullWidth 
                    />
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography>
                    <TextField 
                      inputProps={{ readOnly: true }} 
                      label="Status" 
                      value={dataBlog.data?.status} 
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
                      value={dataBlog.data?.view} 
                      variant="standard" 
                      fullWidth 
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
                      label="Category Blog" 
                      value={nameCategoryBlog.current} 
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
                      value={getDate(dataBlog.data?.createdAt)} 
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
                      value={getDate(dataBlog.data?.updatedAt)} 
                      variant="standard" 
                      fullWidth 
                    />
                  </Typography>
                </Grid>

              </Grid>
            </Box>
          </Fade>
        </Modal> : null }
    </div>
  )
}

export default ModalBlog
