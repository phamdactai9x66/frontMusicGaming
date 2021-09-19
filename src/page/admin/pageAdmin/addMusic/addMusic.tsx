import { Link } from 'react-router-dom'
import React, { useCallback, useState ,useEffect } from "react";
import './add.scss'
import {ReactComponent as File} from './files.svg'

interface AddMusic<T> {

};

const AddMusic: React.FC<AddMusic<any>> = ({ ...props }) => {
// useEffect (()=>{
    
// },[])
  return (
    <>
        <div className="admin-pageAdd">
            <div className="text-name-add">
                <h3>Add muisc</h3>
            </div>
            <div className="grid-addpage-2">
                {/* grid 1 */}
                <div className="section-add">
                    {/* add thông tin */}
                    <div className="add-thongtin">
                        <div className="box-tt">
                            <div className="text-tt bg-text-tt" >
                                <h5>Thông tin bài hát</h5>
                            </div>
                            <div className="form-input-add bg-form-input">
                                <div className="input-add-tt bg-input ">
                                    <p>Tên bài hát</p>
                                    <input type="text" className="width-input" />
                                </div>
                                <div className="input-add-tt bt-margin">
                                    <p>Người thể hiện</p>
                                <input type="text" className="width-input" />
                                </div>
                            </div>
                        </div>
             
                    </div>
                    {/* add mo tả */}
                    <div className="add-thongtin mt-top">
                        <div className="box-tt">
                            <div className="text-tt bg-text-tt" >
                              <h5>Mô tả bài viết</h5>
                            </div>
                            <div className="form-input-add bg-form-input">
                                <div className="input-add-tt bg-input ">
                                    <p>Ngày phát hành</p>
                                    <input type="text" className="width-input"  />
                                </div>
                                <div className="input-add-tt">
                                    <p>Giới thiệu bài hát</p>
                                    <textarea name="" className="width-input textarea-1" id="" ></textarea>
                                </div>
                                <div className="input-add-tt bt-margin">
                                    <p>Lời bài hát</p>
                                    <textarea name="" className="width-input textarea-2" id="" ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* grid 2 */}
                <div className="section-add">
                    {/* thông tin radio */}
                    <div className="add-thongtin">
                        <div className="box-tt">
                            <div className="text-tt bg-text-tt" >
                               <h5>Thông tin radio</h5>
                            </div>
                            <div className="form-input-add bg-form-input ">
                                <div className="input-add-tt bg-input add-file-input">
                                    <p>Tập tin âm thanh</p>
                                  <div className="flex-image bg-file">
                                      <File className="image-file" />
                                       <input type="file" className="custom-file-input width-input"  />
                                       
                                    </div>
                                    <br />
                                    <audio controls className="width-audio input-raido">
                                        {/* <source src="horse.ogg" type="audio/ogg"/> */}
                                        <source src="horse.mp3" type="audio/mpeg"/>
                                    </audio>
                      
                                </div>
                                <div className="input-add-tt bg-input custom-select ">
                                    <p>Thể loại</p>
                                    <select name="" id="" className="add-seclect" >
                                        <option value="" className="add-theloai">quaybarrr</option>
                                        <option value="" className="add-theloai">edm remix</option>
                                        <option value="" className="add-theloai">edm remix</option>
                                    </select>
                                </div>
                                <div className="input-add-tt bg-input ">
                                    <p>Trang thái</p>
                                    <select name="" id="" className="add-seclect ">
                                        <option value="" className="add-theloai">Hoại đông</option>
                                        <option value="" className="add-theloai">Không hoạt đông</option>
                                    </select>
                                </div>
                                <div className="input-add-tt bg-input  bt-margin ">
                                    <p>Chọn bìa bài hát</p>
                                    <div className="flex-image bg-file">
                                      <File className="image-file" />
                                       <input type="file" className="custom-file-input width-input"  />
                                      
                                    </div>
                                    <div className="bia-bai-hat-image">
                                        <img src={'https://cdn.shopify.com/s/files/1/0868/3310/products/Cygnus_20Loop_20Nebula_85988f73-2c8c-456b-92ae-6e23ab013827.jpg?v=1489583062'} alt="" />
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </div>
                    <div className="grid-button-2">
                        <div className="button-them">
                              <button className="color-button">Thêm bài hát</button>
                        </div>
                        <div className="button-huy ">
                            <button className="color-button">Hủy</button>
                        </div>
                       
                    </div>
                  
                </div>
            </div>
        </div>
{/* âsdsa */}
    </>
  )
}

export default AddMusic
