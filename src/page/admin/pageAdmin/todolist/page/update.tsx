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
import { HandleGet } from "component/MethodCommon";
import { page } from "../index";
interface AddMusic<T> {
    changePage: any,
    _id: string | any
};

const initialValue = {
    title: '',
    image: '',
    id_Artist: ''
}

const AddMusic: React.FC<AddMusic<any>> = ({ changePage, _id, ...props }) => {
    const refForm = useRef<HTMLFormElement | any>(null)
    const [alert, setalert] = useState({ display: false, message: "", type: "" })
    const [dataAlbum, setdataAlbum] = useState({ data: null, display: true });
    useEffect(() => {
        (async () => {
            if (!dataAlbum.display) return navigatePage(page.todolist);

            const [data, error] = await HandleGet(albumApi.getOne, _id);

            if (error) return navigatePage(page.todolist);
            setdataAlbum(value => ({ ...value, data: data.data }))
        })()
        return () => {
            setdataAlbum(value => ({ ...value, display: false }))
        }
    }, [_id])
    const submitForm = (data: any, action: any) => {

        const getForm = new FormData(refForm.current);
        setTimeout(async () => {
            const createAlbum = await albumApi.putOne<FormData, string>(getForm, _id);
            if (createAlbum.status !== variableCommon.statusF) {
                setdataAlbum(value => ({ ...value, data: createAlbum.data[0] }))
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
                    <h3>Update Music</h3><br />
                </div>
                {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
                    {alert.message}
                </Alert>}

                <Formik
                    initialValues={dataAlbum.data || initialValue}
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
                                                <div className="bia-bai-hat-image">
                                                    <img src={(dataAlbum.data as any)?.image} alt="" />
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

export default AddMusic
