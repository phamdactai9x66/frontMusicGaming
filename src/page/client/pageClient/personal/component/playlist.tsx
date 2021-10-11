import React from 'react'
import Popup from '@titaui/reactjs-popup';
import { IoMdAdd } from 'react-icons/io';
import { Button } from '@material-ui/core';
import { MdNavigateNext } from 'react-icons/md';
import Tabed from './tabed';

const Playlist = () => {
    return (
        <div className="Personal">
            <Tabed />
            <div className="overview">
                <div className="main2">
                    <h4 className="title_all">Playlist <MdNavigateNext className="icon" /></h4>
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
            </div>
        </div>
    )
}

export default Playlist
