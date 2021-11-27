import React, {useState, useRef} from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import SelectSong from '../component/selectSong'
import { InputText, FileField } from "../../../../../component/customField/index";
import validateChemaSlide from '../component/validateSchemaSlide'
import { variableCommon } from "../../../../../component/variableCommon"
import { page } from "../index";
import slideApi from '../../../../../api/slideApi'

interface AddSlide<T> {
    changePage: any
  }
  
  const initialValue = {
    name: '',
    image: '',
    content: '',
    id_Songs: ''
  }

const AddSlide: React.FC<AddSlide<any>> = ({ changePage, ...props }) => {
    const refForm = useRef<HTMLFormElement | any>(null);
    const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  
    const submitForm = (data: any, action: any) => {
      const getForm = new FormData(refForm.current);
      setTimeout(async () => {
        const createSlide = await slideApi.postOne<FormData>(getForm);
        if (createSlide.status !== variableCommon.statusF) {
          action.resetForm();
          setAlert(value => (
            {
              ...value, 
              display: true,
              message: createSlide.message,
              type: 'success'
            }
          ))
        } else {
          setAlert(value => (
            {
              ...value, 
              display: true,
              message: createSlide.message,
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
                    <h3>Add slider</h3><br />
                </div>
                {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
                    {alert.message}
                </Alert>}

                <Formik
                    initialValues={initialValue}
                    onSubmit={submitForm}
                    validationChemaCategory={validateChemaSlide}
                    validateOnChange={false}
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
                                        <br/>
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
                                                <div className="flex-image bg-file ">
                                                    <FileField name="image" label="Image slide" type="file" other={{ variant: 'standard' }} />
                                                </div>
                                                <div className="inputForm">
                                                    <SelectSong />
                                                </div>
                                            </div>
                                        </Card>
                                        <br />
                                        <LoadingButton loading={formik.isSubmitting} variant="contained"
                                            type="submit"
                                        >
                                            Thêm Slide
                                        </LoadingButton>
                                        {/* <Button variant="contained" type="submit" color="primary">Thêm bài hát</Button> */}
                                        <Button variant="contained" color="error" style={{ marginLeft: 20 }}
                                            onClick={() => { navigatePage(page.ListSlide) }}
                                        >Hủy</Button>
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

export default AddSlide

