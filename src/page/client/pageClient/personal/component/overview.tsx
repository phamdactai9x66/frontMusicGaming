import React from 'react'
import { AiOutlineDownload, AiFillHeart, AiOutlineCheck } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { MdNavigateNext } from 'react-icons/md';
import { BiPlayCircle } from 'react-icons/bi';
import Popup from '@titaui/reactjs-popup';
import { Button } from '@material-ui/core';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Overview = () => {
    var settings = {
        dots: false,
        infinite: true,
        vertical: true,
        fade: true,
        beforeChange: function (currentSlide: any, nextSlide: any) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide: any) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <>
            <div className="overview">
                <h3>Bài hát <MdNavigateNext className="icon" /></h3>
                <div className="main1">
                    <div className="box-slider">
                        <Slider {...settings}>
                            <div>
                                <img src="https://socbay.mobi/publics/uploads/3-2020/post/0065007200320_hinh-nen-cuc-chat-danh-cho-game-thu-phan-1.jpg" alt="" />
                            </div>
                            <div>
                                <img src="https://bizweb.dktcdn.net/100/248/398/files/alan-walker-dj-min.jpg?v=1514559370965" alt="" />
                            </div>
                            <div>
                                <img src="https://2.bp.blogspot.com/-tziLAVIos1c/XNjwlXhYSRI/AAAAAAAAPww/ZmfO9Wa3jiEU004Hx1x3Qq39FXVENPwggCLcBGAs/s1600/11.jpg" alt="" />
                            </div>
                        </Slider>
                    </div>
                    <div className="box-music">
                        <div className="music_item">
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
                <div className="main2">
                    <h3>Playlist</h3>
                    <div className="main2_add">
                        <Popup
                            modal
                            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                            closeOnDocumentClick={false}
                            trigger={() =>
                                <div className="add">
                                    <IoMdAdd className="icon" />
                                  Tạo playlist mới
                            </div>
                            }
                        >
                            {(close: any) => (
                                <div className="modal-playlis">
                                    <div className="content-modal">
                                        <button className="close" onClick={close}>
                                            X
                                    </button>
                                        <h5 className="text-center">Tạo playlist mới</h5>
                                        <form action="">
                                            <input type="text" placeholder="Nhập tên playlist" />
                                            <p className="err">err</p>
                                            <Button className="create_playlist">TẠO MỚI</Button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <div className="box_Playlist">
                            <img height={150} src="https://gamek.mediacdn.vn/133514250583805952/2020/1/16/1-15791579653801179133828.png" alt="" />
                            <h5>Tên bài hát</h5>
                            <span>Tên tác giả</span>
                        </div>

                        <div className="box_Playlist">
                            <img height={150} src="https://gamek.mediacdn.vn/133514250583805952/2020/1/16/1-15791579653801179133828.png" alt="" />
                            <h5>Tên bài hát</h5>
                            <span>Tên tác giả</span>
                        </div>
                    </div>
                </div>
                <div className="main3">
                    <h3>Nhạc sĩ <MdNavigateNext className="icon" /></h3>
                    <div className="main3_nhacsi">
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                        <div className="box_nhacsi">
                            <div className="box-img">
                                <div className="img-hover">
                                    <img height={150} src="https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg" alt="" />
                                    <BiPlayCircle className="icon" />
                                </div>
                            </div>
                            <h5>Tên nhạc sĩ</h5>
                            <p>1.3k quan tâm</p>
                            <Button><AiOutlineCheck /> Đã quan tâm</Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Overview
