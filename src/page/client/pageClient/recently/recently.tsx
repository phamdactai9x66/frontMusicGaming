
import React from 'react'
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';

interface Recently<T> {

}

const Recently: React.FC<Recently<any>> = ({ ...props }) => {
    return (
        <div className="overview">
                <h3>Phát gần đây <MdNavigateNext className="icon" /></h3>
                <div className="main1"  style={{gridTemplateColumns: "100%"}}>
                    <div className="box-music">
                        <div className="music_item">
                            <h3>1 - </h3>
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                      </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                        <h3>2 - </h3>
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                      </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <h3>3 - </h3>
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                        <h3>4 - </h3>
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <h3>5 - </h3>
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                        <div className="music_item">
                            <h3>6 - </h3>
                            <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            <div>
                                <h6>Tên bài hát</h6>
                                <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>Nghệ sĩ</div>
                            </div>
                            <div>
                                4:50
                </div>
                            <div className="icon_item">
                                <AiOutlineDownload className="icon" />
                                <AiFillHeart className="icon" />
                                <IoMdAdd className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
               

                </div>
    )
}

export default Recently
