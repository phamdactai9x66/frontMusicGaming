import React, { useCallback, useState, useEffect } from "react";
import { ReactComponent as File } from '../image/files.svg'
import { Card, TextField, MenuItem, Select } from "@material-ui/core";
import { Button } from "@mui/material"
import { Formik, Form, ErrorMessage } from "formik";
import SelectArtist from "../component/selectArtist";
import InputText from "component/customField/inputText";
interface AddMusic<T> {
    changePage: any
};

const initialValue = {
    title: '',
    image: '',
    id_Artist: ''
}

const AddMusic: React.FC<AddMusic<any>> = ({ ...props }) => {

    const submitForm = (data: any) => {
        console.log(data);
    }

    return (
        <>
            <div className="admin-pageAdd">
                <div className="text-name-add">
                    <h3>Add Music</h3><br />
                </div>
                <Formik
                    initialValues={initialValue}
                    onSubmit={submitForm}
                    validateOnChange={false}
                    validateOnBlur={false}
                // validationSchema
                >
                    {formik => {

                        return (
                            <Form >
                                <div className="grid-addpage">
                                    {/* {JSON.stringify(formik.values)} */}
                                    <div className="section-add">
                                        <Card elevation={5}>
                                            <div className="text-tt" >
                                                {JSON.stringify(formik.values)}
                                                <h5>Thông tin bài hát</h5>
                                            </div>
                                            <div className="form-input-add">
                                                <div>
                                                    <InputText name="title" label="Tên bài hát" other={{ variant: "standard" }} />
                                                </div>

                                                <div>
                                                    <div className="flex-image bg-file">
                                                        <File className="image-file" />
                                                        <input type="file" onChange={(event: Event | any) => {
                                                            const getFile = (event.target as HTMLInputElement)?.files?.[0]
                                                            formik.setFieldValue("image", getFile);
                                                        }} className="custom-file-input width-input" />
                                                    </div>
                                                    <ErrorMessage className="err" name="image" />
                                                </div>
                                                <SelectArtist />
                                            </div>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card elevation={5}>
                                            <div className="text-tt bg-text-tt" >
                                                <h5>Thông tin audio</h5>
                                            </div>
                                            <div className="form-input-add">
                                                <b>Tập tin âm thanh</b>
                                                <div className="flex-image bg-file">
                                                    <File className="image-file" />
                                                    <input type="file" className="custom-file-input width-input" />
                                                </div>
                                                <br />
                                                <audio controls className="audiplay width-audio input-raido">
                                                    <source className="source_music" src="https://dl.dropbox.com/s/oswkgcw749xc8xs/The-Noisy-Freaks.mp3?dl=1" type="audio/mp3" />
                                                </audio>
                                                <br /><br />
                                                <b>Thể loại</b>
                                                <Select className="select" defaultValue="1">
                                                    <MenuItem value={1}>EDM</MenuItem>
                                                    <MenuItem value={2}>Nhac tre</MenuItem>
                                                    <MenuItem value={3}>Nhac nuoc ngoai</MenuItem>
                                                </Select>
                                                <br /><br /><b>Trạng thái</b>
                                                <Select className="select" defaultValue="4">
                                                    <MenuItem value={4}>Hoạt động</MenuItem>
                                                    <MenuItem value={5}>Không hoạt động</MenuItem>
                                                </Select>
                                                <br /><br /><b>Chọn bìa bài hát</b>
                                                <div className="flex-image bg-file">
                                                    <File className="image-file" />
                                                    <input type="file" className="custom-file-input width-input" />

                                                </div>
                                                <div className="bia-bai-hat-image">
                                                    <img src={'https://image.freepik.com/free-vector/user-icon_126283-435.jpg'} alt="" />
                                                </div>
                                            </div>
                                        </Card>
                                        <br />
                                        <Button variant="contained" type="submit" color="primary">Thêm bài hát</Button>
                                        <Button variant="contained" color="error" style={{ marginLeft: 20 }}>Hủy</Button>
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
