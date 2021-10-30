import React, { useCallback, useState, useEffect, useRef } from "react";
import { Card } from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import SelectArtist from "../component/selectArtist";
import { InputText, FileField } from "component/customField/index";
import validateSchema from "../component/validateSchema";
import albumApi from "api/albumApi";
import { variableCommon } from "component/variableCommon";
import { page } from "../index";
interface AddTodo<T> {
    changePage: any
};

const initialValue = {
    title: '',
    image: '',
    id_Artist: ''
}

const AddTodo: React.FC<AddTodo<any>> = ({ changePage, ...props }) => {
    const refForm = useRef<HTMLFormElement | any>(null)
    const [alert, setalert] = useState({ display: false, message: "", type: "" })

    const submitForm = (data: any, action: any) => {

        const getForm = new FormData(refForm.current);
        setTimeout(async () => {
            const createAlbum = await albumApi.postOne<FormData>(getForm);
            if (createAlbum.status !== variableCommon.statusF) {
                action.resetForm();
                setalert(value => (
                    {
                        ...value, display: true,
                        message: createAlbum.message,
                        type: 'success'
                    }))
            } else {
                setalert(value => (
                    {
                        ...value, display: true,
                        message: createAlbum.message,
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
                    <h3>Add Albums</h3><br />
                </div>
                {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
                    {alert.message}
                </Alert>}

                <Formik
                    initialValues={initialValue}
                    onSubmit={submitForm}
                    validateOnChange={false}
                    // validateOnBlur={false}
                    validationSchema={validateSchema}
                >
                    {formik => {
                        return (
                            <Form ref={refForm}>
                                <div className="grid-addpage">
                                    <div className="section-add">
                                        <Card elevation={5}>

                                            <div className="form-input-add">
                                                <div className="inputForm">
                                                    <InputText name="title" label="Tên bài hát" other={{ variant: "standard" }} />
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card elevation={5}>
                                            <div className="form-input-add">
                                                <div className="flex-image bg-file ">
                                                    <FileField name="image" label="Image album" type="file" other={{ variant: 'standard' }} />
                                                </div>
                                                <div className="inputForm">
                                                    <SelectArtist />
                                                </div>
                                            </div>
                                        </Card>
                                        <br />
                                        <LoadingButton loading={formik.isSubmitting} variant="contained"
                                            type="submit"
                                        >
                                            Thêm Albums
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

export default AddTodo
