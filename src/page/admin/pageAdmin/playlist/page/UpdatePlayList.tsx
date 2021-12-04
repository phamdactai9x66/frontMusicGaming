import React, { useState, useEffect, useRef } from "react";
import { Card } from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Alert, List, ListItem, ListItemText, ListItemAvatar, Avatar, Autocomplete, TextField } from "@mui/material"
import { Formik, Form } from "formik";
import { InputText, FileField } from "component/customField/index";
import { variableCommon } from "component/variableCommon";
import { HandleGet, tranFormDataId } from "component/MethodCommon";
import { page } from "../index";
import playlistApi from "api/playlistApi";
import validateSchemaPlayList from "../component/ValidateSchemaPlayList";
import ImageIcon from '@mui/icons-material/Image';
import songApi from "api/songApi";
import playlistSongApi from "api/playlistSongApi"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

interface UpdatePlayList<T> {
  changePage: any,
  _id: string | any
};

const initialValue = {
  name: '',
  image: '',
  searchSong: ''
}

const UpdatePlayList: React.FC<UpdatePlayList<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataPlayList, setDataPlayList] = useState({ data: null, display: true });
  const getSong = useRef([]);
  const tranFormId = useRef<any>({});
  const [listSong, setlistSong] = useState<any[]>([]);

  const navigatePage = (page: string) => {
    changePage(page);
  }
  useEffect(() => {
    (async () => {
      const getAllSong = await songApi.getAll<object>({});
      // console.log(getAllSong.data);
      const tranForm = getAllSong.data.map((current: any) => {
        return { label: current?.title, id: current?._id }
      })
      getSong.current = tranForm
      tranFormId.current = tranFormDataId(getAllSong.data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      if (!dataPlayList.display) return navigatePage(page.ListPlay);

      const [data, error] = await HandleGet(playlistApi.getOne, _id);
      const getPlaylistSongApi = await playlistSongApi.getAll<object>({ id_PlayList: data.data[0]._id });

      setlistSong([...getPlaylistSongApi.data])

      if (error) return navigatePage(page.ListPlay);
      setDataPlayList(value => ({ ...value, data: data.data }))
    })()
    return () => {
      setDataPlayList(value => ({ ...value, display: false }))
    }
  }, [_id])

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const createPlayList = await playlistApi.putOne<FormData, string>(getForm, _id);
      if (createPlayList.status !== variableCommon.statusF) {

        setDataPlayList(value => ({ ...value, data: createPlayList.data }));
        setAlert(value => (
          {
            ...value, display: true,
            message: createPlayList.message,
            type: 'success'
          }))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: createPlayList.message,
            type: 'error'
          }))
      }
      action.setSubmitting(false);
    }, 1000)
  }
  // console.log(dataPlayList.data)
  const onchangeOption = async (event: any, newValue: any | null): Promise<void> => {
    // console.log(newValue)
    const checkExist = listSong.find(e => e.id_Songs === newValue?.id);
    if (checkExist) return;
    const query = {
      id_Songs: newValue?.id,
      id_PlayList: _id
    }
    const addSongPlaylist = await playlistSongApi.postOne<object>(query);
    setlistSong(value => [...value, addSongPlaylist.data])
    console.log(addSongPlaylist)
  }
  const deleteSongPlaylist = async (id: string): Promise<void> => {
    if (!id) return;
    const addSongPlaylist = await playlistSongApi.deleteOne<string>(id);
    const deleteSongPlayList = listSong.filter(e => e._id !== id);
    setlistSong(deleteSongPlayList)
    console.log(addSongPlaylist)

  }
  return (
    <>
      <div className="admin-pageAdd">
        <div className="text-name-add">
          <h3>Update Play List</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={dataPlayList.data?.[0] || dataPlayList.data || initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationSchema={validateSchemaPlayList}
          enableReinitialize
        >
          {(formik) => {
            // console.log(formik.values)
            return (
              <Form ref={refForm}>
                {/* {JSON.stringify(formik.values)} */}
                <div className="grid-addpage">
                  <div className="section-add">
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText
                            name="name"
                            label="Tên Play List"
                            other={{ variant: "standard" }}
                          />
                        </div>
                      </div>
                    </Card>
                    <Card elevation={5} style={{ marginTop: 5 }}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={getSong.current}
                            // sx={{ width: 300 }}
                            onChange={onchangeOption}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Search Song" fullWidth />}
                            fullWidth

                          />
                        </div>
                      </div>
                      <List sx={{ width: '100%' }}>
                        {listSong.map((current: any, index: number) => {
                          // console.log(current)
                          const findSong = tranFormId.current[current?.id_Songs]
                          console.log(findSong)
                          return <ListItem key={index}>
                            <ListItemAvatar>
                              <Avatar src={findSong?.image}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={findSong?.title} secondary={findSong?.day_release} />
                            <IconButton onClick={() => deleteSongPlaylist(current._id)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItem>
                        })}

                      </List>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="flex-image bg-file">
                          <FileField
                            name="image"
                            label="Image Play List"
                            type="file"
                            other={{ variant: 'standard' }}
                          />
                        </div>
                        <div className="bia-bai-hat-image">
                          <img src={(formik.values as any)?.image} alt="" />
                        </div>
                      </div>
                    </Card>
                    <br />
                    <LoadingButton
                      loading={formik.isSubmitting}
                      variant="contained"
                      type="submit"
                    >
                      Sửa
                    </LoadingButton>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListPlay) }}
                    >
                      Hủy
                    </Button>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </>
  )
}

export default UpdatePlayList