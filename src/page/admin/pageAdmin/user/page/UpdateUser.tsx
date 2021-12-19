import React, { useRef, useState, useEffect } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField, RadioField, TextareaField } from "component/customField/index"
import { page } from "../index"
import useApi from 'api/useApi'
import validationSchemaUser from '../component/validateUpdateUser'
import { HandleGet, tranFormData } from "component/MethodCommon"
import { activeOption } from '../component/activeOption'
import { variableCommon } from "component/variableCommon"
interface UpdateUser<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  first_name: '',
  last_name: '',
  email: '',
  image: '',
  gender: 'false',
  role: 0,
  address: ''
}
const selectRole = [
  { value: 0, label: 'Guest' },
  { value: 1, label: 'Member' },
  { value: 2, label: 'Admin' },
]

const UpdateUser: React.FC<UpdateUser<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataUser, setDataUser] = useState({ data: {}, display: true });
  useEffect(() => {
    (async () => {
      if (!dataUser.display) return navigatePage(page.ListUser);

      const [data, error] = await HandleGet(useApi.getOne, _id);

      if (error) return navigatePage(page.ListUser);
      setDataUser(value => ({ ...value, data: data.data[0] }))
    })()
    return () => {
      setDataUser(value => ({ ...value, display: false }));
    }
  }, [_id]);

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const editUser = await useApi.putOne<FormData, string>(getForm, _id);
      if (editUser.status !== variableCommon.statusF) {
        setDataUser(value => ({ ...value, data: editUser.data[0] }));
        setAlert(value => (
          {
            ...value, display: true,
            message: editUser.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: editUser.message,
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
        <h3>Edit User</h3><br />
      </div>
      {alert.display ? <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
        {alert.message}
      </Alert> : null}

      <Formik
        initialValues={{
          ...dataUser.data,
          gender: (dataUser.data as any)?.gender + '',
          role: (dataUser.data as any)?.role + ''
        } || initialValue}
        onSubmit={submitForm}
        validateOnChange={false}
        validationSchema={validationSchemaUser}
        enableReinitialize
      >
        {formik => {
          console.log(formik.errors)
          return (
            <Form ref={refForm}>
              <div className="grid-addpage">
                <div className="section-add">
                  <Card elevation={5}>
                    <div className="form-input-add">
                      <div className="inputForm">
                        <InputText
                          name="first_name"
                          label="Họ"
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
                          name="last_name"
                          label="Tên"
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
                          name="email"
                          label="Email"
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
                        <RadioField
                          name="gender"
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
                        <RadioField name='role' label="Quyền" data={selectRole} other={{ variant: "standard" }} />
                      </div>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card elevation={5}>
                    <div className="form-input-add">
                      <div className="inputForm">
                        <FileField
                          name="image"
                          label="Image User"
                          type="file"
                          other={{ variant: 'standard' }}
                        />
                      </div>
                      <div className="bia-bai-hat-image">
                        <img src={(dataUser.data as any)?.avatar} alt="" />
                      </div>
                    </div>
                  </Card>
                  <br />
                  <LoadingButton
                    loading={formik.isSubmitting}
                    variant="contained"
                    type="submit"
                  >
                    Update User
                  </LoadingButton>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ marginLeft: 20 }}
                    onClick={() => { navigatePage(page.ListUser) }}
                  >
                    Cancel
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

export default UpdateUser
