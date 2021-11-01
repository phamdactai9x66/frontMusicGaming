import React, { useState, useEffect, useRef } from "react";
import { Card } from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import { InputText, FileField } from "component/customField/index";
import { variableCommon } from "component/variableCommon";
import { HandleGet } from "component/MethodCommon";
import { page } from "../index";
import playlistApi from "api/playlistApi";
import validateSchemaPlayList from "../component/ValidateSchemaPlayList";

interface UpdatePlayList<T> {
  changePage: any,
  _id: string | any
};

const initialValue = {
  name: '',
  image: ''
}

const UpdatePlayList: React.FC<UpdatePlayList<any>> = ({changePage, _id, ...props}) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataPlayList, setDataPlayList] = useState({ data: null, display: true });
  
  const navigatePage = (page: string) => {
    changePage(page);
  }

  useEffect(() => {
    (async () => {
      if (!dataPlayList.display) return navigatePage(page.ListPlay);

      const [data, error] = await HandleGet(playlistApi.getOne, _id);

      if (error) return navigatePage(page.ListPlay);
      setDataPlayList(value => ({ ...value, data: data.data}))
    })()
    return () => {
      setDataPlayList(value => ({ ...value, display: false}))
    }
  }, [_id])

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const createPlayList = await playlistApi.putOne<FormData, string>(getForm, _id);

      if (createPlayList.status !== variableCommon.statusF) {
        setDataPlayList(value => ({...value, data: createPlayList.data[0]}));
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
          initialValues={dataPlayList.data || initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationSchema={validateSchemaPlayList}
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
                            label="Tên Play List"
                            other={{ variant: "standard"}}
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
                            label="Image Play List"
                            type="file"
                            other={{variant: 'standard'}}
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
