import React, { useEffect, useRef, useState } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField } from "component/customField/index"
import { variableCommon } from "component/variableCommon"
import { HandleGet } from "component/MethodCommon"
import { page } from "../index"
import categoryBlogApi from 'api/categoryBlogApi'
import validationSchemaCategoryBlog from '../component/ValidationSchemaCategoryBlog'


interface UpdateCategoryBlog<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  name: ''
}

const UpdateCategoryBlog: React.FC<UpdateCategoryBlog<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataCategoryBlog, setDataCategoryBlog] = useState({ data: null, display: true });

  useEffect(() => {
    (async () => {
      if (!dataCategoryBlog.display) return navigatePage(page.ListCategoryBlog);

      const [data, error] = await HandleGet(categoryBlogApi.getAll, { _id: _id });

      if (error) return navigatePage(page.ListCategoryBlog);
      setDataCategoryBlog(value => ({ ...value, data: data?.data[0] }))
    })()
    return () => {
      setDataCategoryBlog(value => ({ ...value, display: false }))
    }
  }, [_id])

  const navigatePage = (page: string) => {
    changePage(page);
  }

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const UpdateCategoryBlog = await categoryBlogApi.putOne<FormData, string>(getForm, _id);
      if (UpdateCategoryBlog.status !== variableCommon.statusF) {
        setDataCategoryBlog(value => ({ ...value, data: UpdateCategoryBlog.data[0] }));
        setAlert(value => (
          {
            ...value, display: true,
            message: UpdateCategoryBlog.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: UpdateCategoryBlog.message,
            type: 'error'
          }))
      }
      action.setSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <div className="admin-pageAdd">
        <div className="text-name-add">
          <h3>Update Category Blog</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={dataCategoryBlog.data || initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          enableReinitialize
          validationSchema={validationSchemaCategoryBlog}
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
                            label="Tên danh mục Blog"
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
                      Update
                    </LoadingButton>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListCategoryBlog) }}
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

export default UpdateCategoryBlog
