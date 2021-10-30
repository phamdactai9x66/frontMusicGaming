import React, { useCallback, useState, useEffect, useRef } from "react";
import { Card } from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import { InputText, FileField } from "component/customField/index";
import validateSchema from "../component/validateSchema";
import apiTopic from "api/topicApi";
import { variableCommon } from "component/variableCommon";
import { HandleGet } from "component/MethodCommon";
import { page } from "../index";
interface UpdateTodo<T> {
    changePage: any,
    _id: string | any
};

const initialValue = {
    name: '',
    image: ''
}

const UpdateTodo: React.FC<UpdateTodo<any>> = ({ changePage, _id, ...props }) => {
    const refForm = useRef<HTMLFormElement | any>(null)
    const [alert, setalert] = useState({ display: false, message: "", type: "" })
    const [dataTopic, setdataTopic] = useState<{data:any[],display:boolean}>({ data: [], display: true });
    useEffect(() => {
        (async () => {
            if (!dataTopic.display) return navigatePage(page.todolist);

            const [data, error] = await HandleGet(apiTopic.getOne, _id);
            
            if (error) return navigatePage(page.todolist);
            setdataTopic(value => ({ ...value, data: data.data }))
        })()
        return () => {
            setdataTopic(value => ({ ...value, display: false }))
        }
    }, [_id])
    const submitForm = (data: any, action: any) => {
        const getForm = new FormData(refForm.current);
        setTimeout(async () => {
            const editTopic = await apiTopic.putOne<FormData, string>(getForm, _id);
            if (editTopic.status !== variableCommon.statusF) {
                console.log(editTopic.data)
                setdataTopic(value => ({ ...value, data: [editTopic.data] }))      
                setalert(value => (
                    {
                        ...value, display: true,
                        message: editTopic.message,
                        type: 'success'
                    }))
            } else {
                setalert(value => (
                    {
                        ...value, display: true,
                        message: editTopic.message,
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
                    <h3>Update Topic</h3><br />
                </div>
                {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
                    {alert.message}
                </Alert>}

                <Formik
                    initialValues={dataTopic.data?.[0] || initialValue}
                    onSubmit={submitForm}
                    validateOnChange={false}
                    // validateOnBlur={false}
                    validationSchema={validateSchema}
                    enableReinitialize >
                    {formik => {
                        return (
                            <Form ref={refForm}>
                                <div className="grid-addpage">
                                    <div className="section-add">
                                        <Card elevation={5}>
                                            <div className="form-input-add">
                                                <div className="inputForm">
                                                    <InputText name="name" label="Tên chủ đề" other={{ variant: "standard" }} />
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card elevation={5}>
                                            <div className="form-input-add">
                                                <div className="flex-image bg-file ">
                                                    <FileField name="image" label="Image Topic" type="file" other={{ variant: 'standard' }} />
                                                </div>
                                                <div className="bia-bai-hat-image">
                                                    <img src={(dataTopic.data?.[0] as any)?.image} alt="" />
                                                </div>
                                            </div>
                                        </Card>
                                        <br />
                                        <LoadingButton loading={formik.isSubmitting} variant="contained"
                                            type="submit"
                                        >
                                            thay đổi
                                        </LoadingButton>
                                        {/* <Button variant="contained" type="submit" color="primary">Thêm bài hát</Button> */}
                                        <Button variant="contained" color="error" style={{ marginLeft: 20 }}
                                            onClick={() => { navigatePage(page.todolist) }}
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

export default UpdateTodo
