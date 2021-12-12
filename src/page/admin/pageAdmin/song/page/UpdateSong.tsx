import React, { useRef, useState, useEffect } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField, RadioField, TextareaField, PickDate } from "component/customField/index"
import { page } from "../index"
import songApi from 'api/songApi'
import { HandleGet } from "component/MethodCommon"
import { activeOption } from '../component/stateForm'
import { variableCommon } from "component/variableCommon"
import SelectAlbums from "../component/SelectAlbums"
import SelectCategory from "../component/SelectCategory"
import SelectTopic from "../component/SelectTopic"
import validationSchemaSong from "../component/ValidationSchemaSong"

interface UpdateSong<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  title: '',
  image: '',
  view: '',
  audio: '',
  active: '',
  describe: '',
  day_release: new Date().toISOString(),
  id_Topic: '',
  id_category: '',
  id_aubum: '',
}

const UpdateSong: React.FC<UpdateSong<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataSong, setDataSong] = useState({ data: {}, display: true });

  useEffect(() => {
    (async () => {
      if (!dataSong.display) return navigatePage(page.ListSong);

      const [data, error] = await HandleGet(songApi.getOne, _id);

      if (error) return navigatePage(page.ListSong);
      setDataSong(value => ({ ...value, data: data.data[0] }))
    })()
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
          initialValues={{ ...dataSong.data, active: (dataSong.data as any)?.gender + '' } || initialValue}
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
                          <audio src={(dataSong.data as any)?.audio} />
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
                          <TextareaField
                            name="describe"
                            label="Describe"
                            minRows={3}
                            other={{ variant: 'standard' }}
                          />
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
                      Cập nhật song
                    </LoadingButton>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListSong) }}
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

export default UpdateSong
