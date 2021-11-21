import React, {useState, useRef, useEffect} from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import SelectUser from '../component/SelectUser'
import { InputText, FileField } from "component/customField/index"
import { variableCommon } from "component/variableCommon"
import { page } from "../index"
import { HandleGet } from "component/MethodCommon"
import userPlaylistApi from 'api/userPlaylistApi'
import validationSchemaUserPlayList from '../component/ValidationSchemaUserPlayList'

interface UpdateUserPlayList<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  name: '',
  id_User: ''
}

const UpdateUserPlayList: React.FC<UpdateUserPlayList<any>> = ({ changePage, _id, ...props}) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataUserPlayList, setDataUserPlayList] = useState({ data: null, display: true });

  const navigatePage = (page: string) => {
    changePage(page);
  }

  useEffect(() => {
    (async () => {
      if (!dataUserPlayList.display) return navigatePage(page.ListUserPlayList);

      const [data, error] = await HandleGet(userPlaylistApi.getOne, _id);

      if (error) return navigatePage(page.ListUserPlayList);
      setDataUserPlayList(value => ({ ...value, data: data.data }))
    })()

    return () => {
      setDataUserPlayList(value => ({ ...value, display: false }))
    }
  }, [_id])

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const editUserPlayList = await userPlaylistApi.putOne<FormData, string>(getForm, _id);
      if (editUserPlayList.status !== variableCommon.statusF) {
        setDataUserPlayList(value => ({ ...value, data: editUserPlayList.data[0]}))
        setAlert(value => (
          {
            ...value, 
            display: true,
            message: editUserPlayList.message,
            type: 'success'
          } 
        ))
      } else {
        setAlert(value => (
          {
            ...value, 
            display: true,
            message: editUserPlayList.message,
            type: 'error'
          }
        ))
      }
      action.setSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <div className="admin-pageAdd">
        <div className="text-name-add">
          <h3>Update thể loại</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={dataUserPlayList.data || initialValue}
          onSubmit={submitForm}
          validationSchema={validationSchemaUserPlayList}
          validateOnChange={false}
          enableReinitialize
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
                      Cập nhật UserPlayList
                    </LoadingButton>
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

export default UpdateUserPlayList

