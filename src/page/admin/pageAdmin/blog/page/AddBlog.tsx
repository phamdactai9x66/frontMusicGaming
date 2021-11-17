import React, {useState, useRef} from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField, RadioField } from "component/customField/index"
import { page } from "../index"
import { variableCommon } from "component/variableCommon"
import SelectUser from '../component/SelectUser' 
import SelectCategoryBlog from '../component/SelectCategoryBlog'
import blogApi from 'api/BlogApi'
import { statusOption } from '../component/stateForm'
import validationSchemaBlog from '../component/ValidationSchemaBlog'

interface AddBlog<T> {
  changePage: any
}

const initialValue = {
  title: '',
  image: '',
  content: '',
  status: '',
  view: '',
  id_User: '',
  id_CategoryBlog: ''
}

const AddBlog: React.FC<AddBlog<any>> = ({ changePage, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: ""});

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const createBlog = await blogApi.postOne<FormData>(getForm);
      if (createBlog.status !== variableCommon.statusF) {
        action.resetForm();
        setAlert(value => (
          {
            ...value, display: true,
            message: createBlog.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: createBlog.message,
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
    <>
      <div className="admin-pageAdd">
        <div className="text-name-add">
          <h3>Add Blog</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationSchema={validationSchemaBlog}
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
                          <InputText 
                            name="content"
                            label="Nội dung bài viết"
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
                      Thêm Blog
                    </LoadingButton>
                    <Button
                      variant="contained"
                      color="error" 
                      style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListBlog) }}
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

export default AddBlog
