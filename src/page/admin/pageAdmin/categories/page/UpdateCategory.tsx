import React, {useState, useRef, useEffect} from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import SelectTopic from '../component/SelectTopic'
import { InputText, FileField } from "component/customField/index"
import validationChemaCategory from '../component/ValidationChemaCategory'
import { variableCommon } from "component/variableCommon"
import { page } from "../index"
import { HandleGet } from "component/MethodCommon"
import categoryApi from 'api/categoryApi'

interface UpdateCategory<T> {
  changePage: any,
  _id: string | any
}

const initialValue = {
  name: '',
  image: '',
  id_Topic: ''
}

const UpdateCategory: React.FC<UpdateCategory<any>> = ({ changePage, _id, ...props}) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataCategory, setDataCategory] = useState({ data: null, display: true });

  const navigatePage = (page: string) => {
    changePage(page);
  }

  useEffect(() => {
    (async () => {
      if (!dataCategory.display) return navigatePage(page.ListCategory);

      const [data, error] = await HandleGet(categoryApi.getOne, _id);

      if (error) return navigatePage(page.ListCategory);
      setDataCategory(value => ({ ...value, data: data.data }))
    })()

    return () => {
      setDataCategory(value => ({ ...value, display: false }))
    }
  }, [_id])

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const editCategory = await categoryApi.putOne<FormData, string>(getForm, _id);
      if (editCategory.status !== variableCommon.statusF) {
        setDataCategory(value => ({ ...value, data: editCategory.data[0]}))
        setAlert(value => (
          {
            ...value, 
            display: true,
            message: editCategory.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, 
            display: true,
            message: editCategory.message,
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
          initialValues={dataCategory.data || initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationChemaCategory={validationChemaCategory}
          enableReinitialize
        >
          {formik => {
            return (
              <Form ref={refForm}>
                <div className="grid-addpage">
                  <div className="section-add">
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="inputForm">
                          <InputText name="name" label="Danh mục bài hát" other={{ variant: "standard" }} />
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card elevation={5}>
                      <div className="form-input-add">
                        <div className="flex-image bg-file">
                          <FileField name="image" label="Image category" type="file" other={{ variant: 'standard' }} />
                        </div>
                        <div className="inputForm">
                          <SelectTopic />
                        </div>
                        <div className="bia-bai-hat-image">
                          <img src={(dataCategory.data as any)?.image} alt="" />
                        </div>
                      </div>
                    </Card>
                    <br />
                    <LoadingButton 
                      loading={formik.isSubmitting} 
                      variant="contained" 
                      type="submit"
                    >
                      Cập nhật
                    </LoadingButton>
                    <Button 
                      variant="contained" 
                      color="error" 
                      style={{ marginLeft: 20 }} 
                      onClick={() => { navigatePage(page.ListCategory)}}
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

export default UpdateCategory
