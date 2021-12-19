import React, { useRef, useState, useEffect } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Formik, Form } from "formik"
import { InputText, FileField, RadioField, TextareaField, PickDate } from "component/customField/index"
import { page } from "../index"
import songApi from 'api/songApi'
import { activeOption } from '../component/stateForm'
import { variableCommon } from "component/variableCommon"
import SelectAlbums from "../component/SelectAlbums"
import SelectCategory from "../component/SelectCategory"
import SelectTopic from "../component/SelectTopic"
import validationSchemaSong from "../component/ValidationSchemaSong"
import { Button, Alert, List, ListItem, ListItemText, ListItemAvatar, Avatar, Autocomplete, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import songArtistAPi from "api/songArtistAPi"
import artist from 'api/ArtistApi'
import { HandleGet, tranFormDataId } from "component/MethodCommon";

interface UpdateSong<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  title: '',
  image: '',
  view: '',
  audio: '',
  active: 'false',
  describe: '',
  day_release: new Date().toISOString(),
  id_Topic: '',
  id_Categories: '',
  id_album: '',
}

const UpdateSong: React.FC<UpdateSong<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataSong, setDataSong] = useState({ data: {}, display: true });
  const [listSong, setlistSong] = useState<any[]>([]);
  const tranFormId = useRef<any>({});
  const getArtist = useRef([]);
  useEffect(() => {
    (async () => {
      const getAllArtist = await artist.getAll<object>({});
      const tranForm = getAllArtist.data.map((current: any) => {
        return { label: `${current?.first_Name} ${current?.last_Name}`, id: current?._id }
      })
      getArtist.current = tranForm
      tranFormId.current = tranFormDataId(getAllArtist.data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      if (!dataSong.display) return navigatePage(page.ListSong);
      const [data, error] = await HandleGet(songApi.getOne, _id);
      const getsongArtistAPi = await songArtistAPi.getAll<object>({ id_Songs: data.data?.[0]?._id });
      // console.log(getsongArtistAPi)
      setlistSong([...getsongArtistAPi.data])

      if (error) return navigatePage(page.ListSong);
      setDataSong(value => ({ ...value, data: data.data[0] }))
    })()
    return () => {
      setDataSong(value => ({ ...value, display: false }));
    }
  }, [_id]);

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    getForm.set('day_release', data.day_release);

    setTimeout(async () => {
      const editSong = await songApi.putOne<FormData, string>(getForm, _id);
      if (editSong.status !== variableCommon.statusF) {
        setDataSong(value => ({ ...value, data: editSong.data[0] }));
        setAlert(value => (
          {
            ...value, display: true,
            message: editSong.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: editSong.message,
            type: 'error'
          }
        ))
      }
      action.setSubmitting(false)
    }, 1000)
  }


  const navigatePage = (page: string) => {
    changePage(page);
  }
  const onchangeOption = async (event: any, newValue: any | null): Promise<void> => {
    const checkExist = listSong.find(e => e.id_Artist === newValue?.id);
    if (checkExist) return;
    const query = {
      id_Songs: _id,
      id_Artist: newValue?.id
    }
    const addSongPlaylist = await songArtistAPi.postOne<object>(query);
    setlistSong(value => [...value, addSongPlaylist.data])
  }
  const deleteSongPlaylist = async (id: string): Promise<void> => {
    if (!id) return;
    const addSongPlaylist = await songArtistAPi.deleteOne<string>(id);
    const deleteSongPlayList = listSong.filter(e => e._id !== id);
    setlistSong(deleteSongPlayList)

  }

  return (
    <>
      <div className="admin-pageAdd">
        <div className="text-name-add">
          <h3>Edit Song</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={((dataSong.data as any)?.title && { ...dataSong.data, active: (dataSong.data as any)?.active + '' }) || initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationSchema={validationSchemaSong}
          enableReinitialize
        >
          {formik => {
            return (
              <Form ref={refForm}>
                <div className="grid-addpage">
                  <div className="section-add">
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText
                            name="title"
                            label="Tiêu đề bài hát"
                            other={{ variant: "standard" }}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText
                            name="view"
                            label="Lượt xem"
                            type="number"
                            other={{ variant: "standard" }}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="flex-image bg-file">
                          <FileField
                            name="image"
                            label="Image song"
                            type="file"
                            other={{ variant: 'standard' }}
                          />
                        </div>
                        <div className="bia-bai-hat-image">
                          <img src={(dataSong.data as any)?.image} alt="" />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <FileField
                            name="audio"
                            label="audio song"
                            type="file"
                            other={{ variant: 'standard' }}
                          />
                        </div>
                        <div className="bia-bai-hat-image">
                          <audio src={(dataSong.data as any)?.audio} controls></audio>

                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <PickDate
                            label="Birth"
                            name="day_release"
                            other={{ variant: "standard" }}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <RadioField
                            name="active"
                            data={activeOption}
                            other={{ variant: 'standard' }}
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText name="describe" placeholder="Mô tả bài hát"
                            other={{
                              multiline: true,
                              rows: 3
                            }} />
                        </div>
                        <div className="inputForm">
                          <SelectTopic />
                        </div>
                        <div className="inputForm">
                          <SelectAlbums />
                        </div>
                        <div className="inputForm">
                          <SelectCategory />
                        </div>
                      </div>
                    </Card>
                    <br />
                    <LoadingButton
                      loading={formik.isSubmitting}
                      variant="contained"
                      type="submit"
                    >
                      Update Song
                    </LoadingButton>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListSong) }}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Card elevation={5} style={{ marginTop: 5 }}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={getArtist.current}
                            onChange={onchangeOption}
                            renderInput={(params) => <TextField {...params} variant="standard" label="Search Artist" fullWidth />}
                            fullWidth

                          />
                        </div>
                      </div>
                      <List sx={{ width: '100%' }}>
                        {listSong.map((current: any, index: number) => {
                          const findSong = tranFormId.current[current?.id_Artist]
                          // console.log(findSong)
                          return <ListItem key={index}>
                            <ListItemAvatar>
                              <Avatar src={findSong?.image}></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`${findSong?.first_Name} ${findSong?.last_Name}`} secondary={findSong?.day_release} />
                            <IconButton onClick={() => deleteSongPlaylist(current._id)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItem>
                        })}

                      </List>
                    </Card>
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

export default UpdateSong
