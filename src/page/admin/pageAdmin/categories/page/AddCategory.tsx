import React, { useState, useRef } from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import SelectTopic from '../component/SelectTopic'
import { InputText, FileField } from "component/customField/index";
import validationChemaCategory from '../component/ValidationChemaCategory'
import { variableCommon } from "component/variableCommon"
import { page } from "../index";
import categoryApi from 'api/categoryApi'
interface AddCategory<T> {
  changePage: any
}

const initialValue = {
  name: '',
  image: '',
  id_Topic: '',
}

const AddCategory: React.FC<AddCategory<any>> = ({ changePage, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const createCategory = await categoryApi.postOne<FormData>(getForm);
      if (createCategory.status !== variableCommon.statusF) {
        action.resetForm();
        setAlert(value => (
          {
            ...value,
            display: true,
            message: createCategory.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value,
            display: true,
            message: createCategory.message,
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
          <h3>Add Category</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={initialValue}
          onSubmit={submitForm}
          validationSchema={validationChemaCategory}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {formik => {
            return (
              <Form ref={refForm}>
                <div className="grid-addpage">
                  <div className="section-add">
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText name="name" label="Tên thể loại" other={{ variant: "standard" }} />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="flex-image bg-file ">
                          <FileField name="image" label="Image category" type="file" other={{ variant: 'standard' }} />
                        </div>
                        <div className="inputForm">
                          <SelectTopic />
                        </div>
                      </div>
                    </Card>
                    <br />
                    <LoadingButton loading={formik.isSubmitting} variant="contained"
                      type="submit"
                    >
                      Add Category
                    </LoadingButton>

                    <Button variant="contained" color="error" style={{ marginLeft: 20 }}
                      onClick={() => { navigatePage(page.ListCategory) }}
                    >Cancel</Button>
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

export default AddCategory
