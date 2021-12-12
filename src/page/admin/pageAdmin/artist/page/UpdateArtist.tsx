import React, { useState, useEffect, useRef } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField, RadioField, PickDate } from "component/customField/index"
import { page } from "../index"
import { variableCommon } from "component/variableCommon"
import { HandleGet } from "component/MethodCommon"
import ArtistApi from 'api/ArtistApi'
import { genderOption } from '../component/stateForm'
import validationArtist from '../component/ValidationArtist'

interface UpdateArtist<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  first_Name: '',
  last_Name: '',
  image: '',
  gender: 'false',
  birth: new Date().toISOString()
}

const UpdateArtist: React.FC<UpdateArtist<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataArtist, setDataArtist] = useState({ data: {}, display: true });

  useEffect(() => {
    (async () => {
      if (!dataArtist.display) return navigatePage(page.ListArtist);

      const [data, error] = await HandleGet(ArtistApi.getOne, _id);

      if (error) return navigatePage(page.ListArtist);
      setDataArtist((value) => ({ ...value, data: data.data }))
    })()
    return () => {
      setDataArtist(value => ({ ...value, display: false }));
    }
  }, [_id])

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    getForm.set('birth', data.birth)
    setTimeout(async () => {
      const EditArtist = await ArtistApi.putOne<FormData, string>(getForm, _id);
      if (EditArtist.status !== variableCommon.statusF) {
        setDataArtist(value => ({ ...value, data: EditArtist.data[0] }));
        setAlert(value => (
          {
            ...value, display: true,
            message: EditArtist.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: EditArtist.message,
            type: 'error'
          }
        ))
      }
      action.setSubmitting(false)
    }, 1000);
  }

  const navigatePage = (page: string) => {
    changePage(page);
  }

  return (
    <div className="admin-pageAdd">
      <div className="text-name-add">
        <h3>Edit Artist</h3><br />
      </div>
      {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
        {alert.message}
      </Alert>}

      <Formik
        initialValues={{ ...dataArtist.data, gender: (dataArtist.data as any)?.gender + '' } || initialValue}
        onSubmit={submitForm}
        validateOnChange={false}
        validationSchema={validationArtist}
        enableReinitialize
      >
        {formik => {
          // console.log(formik.values)
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
                          other={{ variant: "standard", InputLabelProps: { shrink: true } }}
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
                          other={{ variant: "standard", InputLabelProps: { shrink: true } }}
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
                    <div className="bia-bai-hat-image">
                      <img src={(dataArtist.data as any)?.image} alt="" />
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
                    Cập nhật Artist
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

export default UpdateArtist
