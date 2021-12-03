import React, { useRef, useState } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField, RadioField, TextareaField } from "component/customField/index"
import { page } from "../index"
import songApi from 'api/songApi'
import { activeOption } from '../component/stateForm'
import { variableCommon } from "component/variableCommon"
import SelectAlbums from "../component/SelectAlbums"
import SelectCategory from "../component/SelectCategory"
import SelectTopic from "../component/SelectTopic"
import validationSchemaSong from "../component/ValidationSchemaSong"


interface AddSong<T> {
  changePage: any
}

const initialValue = {
  title: '',
  image: '',
  view: '',
  audio: '',
  active: '',
  describe: '',
  day_release: null,
  id_Topic: '',
  id_category: '',
  id_aubum: '',
}

const AddSong: React.FC<AddSong<any>> = ({ changePage, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);

    setTimeout(async () => {
      const createSong = await songApi.postOne<FormData>(getForm);
      if (createSong.status !== variableCommon.statusF) {
        action.resetForm();
        setAlert(value => (
          {
            ...value, display: true,
            message: createSong.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: createSong.message,
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
          <h3>Add Song</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationSchema={validationSchemaSong}
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
                            min={0}
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
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          {/* đoạn này chèn thằng ngày tháng vào */}
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
                            label="Active"
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
                            placeholder="Describe"
                            minRows={3}
                            style={{ width: 400 }}
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
                      Thêm Song
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

export default AddSong
