import React, { useRef, useState } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import { InputText, FileField, RadioField, PickDate } from "component/customField/index"
import validationArtist from '../component/ValidationArtist'
import { page } from "../index"
import ArtistApi from 'api/ArtistApi'
import { genderOption } from '../component/stateForm'
import { variableCommon } from "component/variableCommon"

interface AddArtist<T> {
  changePage: any
};

const initialValue = {
  first_Name: '',
  last_Name: '',
  image: '',
  gender: '',
  birth: null
}

const AddArtist: React.FC<AddArtist<any>> = ({ changePage, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const createArtist = await ArtistApi.postOne<FormData>(getForm);

      if (createArtist.status !== variableCommon.statusF) {
        action.resetForm();
        setAlert(value => (
          {
            ...value, display: true,
            message: createArtist.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: createArtist.message,
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
    <div className="admin-pageAdd">
      <div className="text-name-add">
        <h3>Add Artist</h3><br />
      </div>
      {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
        {alert.message}
      </Alert>}

      <Formik
        initialValues={initialValue}
        onSubmit={submitForm}
        validateOnChange={false}
        validationSchema={validationArtist}
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
                          name="first_Name"
                          label="Tên ca sĩ"
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
                          name="last_Name"
                          label="Họ ca sĩ"
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
                          label="Image Artist"
                          type="file"
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
                          name="gender"
                          label="Gender"
                          data={genderOption}
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
                        <PickDate
                          label="Birth"
                          name="birth"
                          other={{ variant: "standard" }}
                        />
                      </div>
                    </div>
                  </Card>
                  <br />
                  <LoadingButton
                    loading={formik.isSubmitting}
                    variant="contained"
                    type="submit"
                  >
                    Thêm Artist
                  </LoadingButton>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ marginLeft: 20 }}
                    onClick={() => { navigatePage(page.ListArtist) }}
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
  )
}

export default AddArtist
