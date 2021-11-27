import React, {useState, useRef, useEffect} from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import SelectSong from '../component/selectSong'
import { InputText, FileField } from "../../../../../component/customField/index"
import { variableCommon } from "../../../../../component/variableCommon"
import { page } from "../index"
import { HandleGet } from "../../../../../component/MethodCommon"
import slideApi from '../../../../../api/slideApi'
import validateSchemaSlide from '../component/validateSchemaSlide';


interface UpdateSlide<T> {
    changePage: any,
    _id: string | any
  }
  
const initialValue = {
    name: '',
    image: '',
    content: '',
    id_Songs: ''
}

const UpdateSlide: React.FC<UpdateSlide<any>> = ({ changePage, _id, ...props}) => {
    const refForm = useRef<HTMLFormElement | any>(null);
    const [alert, setAlert] = useState({ display: false, message: "", type: "" });
    const [dataSlide, setDataSlide] = useState({ data: null, display: true });
  
    const navigatePage = (page: string) => {
      changePage(page);
    }
  
    useEffect(() => {
      (async () => {
        if (!dataSlide.display) return navigatePage(page.ListSlide);
  
        const [data, error] = await HandleGet(slideApi.getOne, _id);
  
        if (error) return navigatePage(page.ListSlide);
        setDataSlide(value => ({ ...value, data: data.data }))
      })()
  
      return () => {
        setDataSlide(value => ({ ...value, display: false }))
      }
    }, [_id])
  
    const submitForm = (data: any, action: any) => {
      const getForm = new FormData(refForm.current);
      setTimeout(async () => {
        const editCategory = await slideApi.putOne<FormData, string>(getForm, _id);
        if (editCategory.status !== variableCommon.statusF) {
            setDataSlide(value => ({ ...value, data: editCategory.data[0]}))
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
                    <h3>Update slider</h3><br />
                </div>
                {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
                    {alert.message}
                </Alert>}

                <Formik
                    initialValues={dataSlide.data || initialValue}
                    onSubmit={submitForm}
                    validateOnChange={false}
                    validationChemaCategory={validateSchemaSlide}
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
                                                    <InputText name="name" label="Name slide" other={{ variant: "standard" }} />
                                                </div>
                                            </div>
                                        </Card>
                                        <br />
                                        <Card elevation={5}>
                                            <div className="form-input-add">
                                                <div className="inputForm">
                                                    <InputText name="content" label="Content slide" other={{ variant: "standard" }} />
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card elevation={5}>
                                            <div className="form-input-add">
                                                <div className="flex-image bg-file">
                                                    <FileField name="image" label="Image slide" type="file" other={{ variant: 'standard' }} />
                                                </div>
                                                <div className="inputForm">
                                                    <SelectSong />
                                                </div>
                                                <div className="bia-bai-hat-image">
                                                    <img src={(dataSlide.data as any)?.image} alt="" />
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
                                            onClick={() => { navigatePage(page.ListSlide) }}
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

export default UpdateSlide
