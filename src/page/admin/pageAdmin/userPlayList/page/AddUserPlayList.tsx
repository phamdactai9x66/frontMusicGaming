import React, {useState, useRef} from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import SelectUser from '../component/SelectUser'
import { InputText, FileField } from "component/customField/index"
import { variableCommon } from "component/variableCommon"
import { page } from "../index"
import userPlaylistApi from 'api/userPlaylistApi'
import validationSchemaUserPlayList from '../component/ValidationSchemaUserPlayList'

interface AddUserPlayList<T> {
  changePage: any
}

const initialValue = {
  name: '',
  id_User: ''
}

const AddUserPlayList: React.FC<AddUserPlayList<any>> = ({ changePage, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const createUserPlayList = await userPlaylistApi.postOne<FormData>(getForm);
      if (createUserPlayList.status !== variableCommon.statusF) {
        action.resetForm();
        setAlert(value => (
          {
            ...value, 
            display: true,
            message: createUserPlayList.message,
            type: 'success'
          } 
        ))
      } else {
        setAlert(value => (
          {
            ...value, 
            display: true,
            message: createUserPlayList.message,
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
          <h3>Add thể loại</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={initialValue}
          onSubmit={submitForm}
          validationSchema={validationSchemaUserPlayList}
          validateOnChange={false}
        >
          {(formik) => {
            return (
              <Form ref={refForm}>
                <div className="grid-addpage">
                  <div className="section-add">
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText 
                            name="name" 
                            label="Tên userPlayList" 
                            other={{ variant: "standard" }} 
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                    <div className="inputForm">
                      <SelectUser />
                    </div>
                    </Card>
                    <br />
                    <LoadingButton 
                      loading={formik.isSubmitting} 
                      variant="contained"
                      type="submit"
                    >
                      Thêm UserPlayList
                    </LoadingButton>
                    {/* <Button variant="contained" type="submit" color="primary">Thêm bài hát</Button> */}
                    <Button 
                      variant="contained" 
                      color="error" 
                      style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListUserPlayList) }}
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

export default AddUserPlayList
