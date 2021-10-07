import { Link } from 'react-router-dom'
import React, { useCallback, useState, useEffect } from "react";
import { ReactComponent as File } from './component/files.svg'
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Select, MenuItem } from "@material-ui/core";
import { Button } from "@mui/material"

interface AddMusic<T> {

};

const AddMusic: React.FC<AddMusic<any>> = ({ ...props }) => {

    return (
        <>
            <div className="admin-pageAdd">
                <div className="text-name-add">
                    <h3>Add Music</h3><br />
                </div>
                <form action="#">
                <div className="grid-addpage">
                    <div className="section-add">
                        <Card elevation={5}>
                            <div className="text-tt" >
                                <h5>Thông tin bài hát</h5>
                            </div>
                            <div className="form-input-add">
                                <TextField style={{ width: "100%" }} id="fullName" label="Tên bài hát" />
                                 <p className="err">not empy</p>
                                <TextField style={{ width: "100%" }} id="fullName" label="Người thể hiện" />
                                <p className="err">not empy</p>
                            </div>
                        </Card>
                        <Card elevation={5} className="mt-5">
                            <div className="text-tt bg-text-tt" >
                                <h5>Mô tả bài viết</h5>
                            </div>
                            <div className="form-input-add">
                                <TextField style={{ width: "100%" }} id="fullName" label="Ngày phát hành" />
                                 <p className="err">not empy</p>
                                <TextField style={{ width: "100%" }} id="fullName" label="Giới thiệu bài hát" />
                                <p className="err">not empy</p>
                                <TextField
                                    style={{ width: "100%",marginTop: 30 }}
                                    variant="outlined"
                                    placeholder="Lời bài hát"
                                    multiline
                                    rows={15}
                                    rowsMax={15}
                                />
                                <p className="err">not empy</p>
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
                                <br /><br /><b>Thể loại</b>
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
                    <br/>
                        <Button variant="contained" color="primary">Thêm bài hát</Button>
                        <Button variant="contained" color="error" style={{ marginLeft: 20 }}>Hủy</Button>
                    </div>
                   
                </div>
                </form>
            </div>
        </>
    )
}

export default AddMusic
