import React, { useState, useRef, useEffect } from 'react'
import blogApi from 'api/BlogApi'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField, RadioField, TextareaField } from "component/customField/index"
import { page } from "../index"
import { variableCommon } from "component/variableCommon"
import { HandleGet } from "component/MethodCommon"
import SelectUser from '../component/SelectUser'
import SelectCategoryBlog from '../component/SelectCategoryBlog'
import { statusOption } from '../component/stateForm'
import validationSchemaBlog from '../component/ValidationSchemaBlog'

interface UpdateBlog<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  title: '',
  image: '',
  content: '',
  status: 'false',
  view: '',
  id_User: '',
  id_CategoryBlog: ''
}

const UpdateBlog: React.FC<UpdateBlog<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataBlog, setDataBlog] = useState({ data: {}, display: true });

  const navigatePage = (page: string) => {
    changePage(page);
  }

  useEffect(() => {
    (async () => {
      if (!dataBlog.display) return navigatePage(page.ListBlog);

      const [data, error] = await HandleGet(blogApi.getAll, { _id: _id });

      if (error) return navigatePage(page.ListBlog);
      setDataBlog(value => ({ ...value, data: data.data[0] }));
    })()
    return () => {
      setDataBlog(value => ({ ...value, display: false }));
    }
  }, [_id])

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const editBlog = await blogApi.putOne<FormData, string>(getForm, _id);
      if (editBlog.status !== variableCommon.statusF) {
        setDataBlog(value => ({ ...value, data: editBlog.data[0] }));
        setAlert(value => (
          {
            ...value,
            display: true,
            message: editBlog.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value,
            display: true,
            message: editBlog.message,
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
          <h3>Update Blog</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={((dataBlog.data as any)?.title && { ...dataBlog.data, status: (dataBlog.data as any)?.status + '' }) || initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationSchema={validationSchemaBlog}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form ref={refForm}>
                <div className="form-input-add">
                  <div className="section-add">
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText
                            name="title"
                            label="Tên bài viết"
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
                          <InputText name="content" placeholder="Nội dung bài viết"
                            other={{
                              multiline: true,
                              rows: 3
                            }}
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
                            name="status"
                            data={statusOption}
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
                          <InputText
                            name="view"
                            type="number"
                            min={0}
                            label="Lượt xem"
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
                            label="Image blog"
                            type="file"
                            other={{ variant: 'standard' }}
                          />
                        </div>
                        <div className="bia-bai-hat-image">
                          <img src={(dataBlog.data as any)?.image} alt="" />
                        </div>
                        <div className="inputForm">
                          <SelectUser />
                        </div>
                        <div className="inputForm">
                          <SelectCategoryBlog />
                        </div>
                      </div>
                    </Card>
                    <br />
                    <LoadingButton
                      loading={formik.isSubmitting}
                      variant="contained"
                      type="submit"
                    >
                      Update Blog
                    </LoadingButton>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListBlog) }}
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
    </>
  )
}

export default UpdateBlog
