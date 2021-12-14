import React, { useRef, useState } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField } from "component/customField/index"
import { variableCommon } from "component/variableCommon"
import { page } from "../index"
import categoryBlogApi from 'api/categoryBlogApi'
import validationSchemaCategoryBlog from '../component/ValidationSchemaCategoryBlog'

interface AddCategoryBlog<T> {
  changePage: any
}

const initialValue = {
  name: ''
}


const AddCategoryBlog: React.FC<AddCategoryBlog<any>> = ({ changePage, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const createCategoryBlog = await categoryBlogApi.postOne<FormData>(getForm);
      if (createCategoryBlog.status !== variableCommon.statusF) {
        action.resetForm();
        setAlert(value => (
          {
            ...value, display: true,
            message: createCategoryBlog.message,
            type: 'success'
          }))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: createCategoryBlog.message,
            type: 'error'
          }))
      }
      action.setSubmitting(false)
    }, 1000);
  }
  const navigatePage = (page: string) => {
    changePage(page);
  }
  return (
    <>
      <div className="admin-pageAdd">
        <div className="text-name-add">
          <h3>Add Category Blog</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validateOnBlur={false}
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
                            label="Tên chủ đề"
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
                      Add Category Blog
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

export default AddCategoryBlog
