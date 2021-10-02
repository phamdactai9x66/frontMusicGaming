
import React from 'react'
import { BsMusicNoteBeamed,BsListUl } from 'react-icons/bs';
import { FaBlogger, FaChartPie } from 'react-icons/fa';
import { RiFolderMusicFill } from 'react-icons/ri';
import { Link, RouteChildrenProps, withRouter } from "react-router-dom";
import { BsPlusCircle } from 'react-icons/bs';
import { BiPlayCircle,BiTimeFive } from 'react-icons/bi';
import { AiFillStar,AiOutlineHeart } from 'react-icons/ai';
import Popup from '@titaui/reactjs-popup';

interface Sidebar<T> {

}

const Sidebar: React.FC<Sidebar<any>> = ({ ...props }) => {
  return (
    <>
      <div className="sidebar">
        <h5>MUSIC GAME</h5>
        <ul>
          <li><BsMusicNoteBeamed className="icon" /><Link to="/personal">Cá nhân</Link></li>
          <li><RiFolderMusicFill className="icon" /><Link to="/">Khám phá</Link></li>
          <li><FaChartPie className="icon" /> Music chart</li>
          <li><FaBlogger className="icon" /> Blog</li>
        </ul>
        <div className="library-sidebar">
          <ul>
            <li><BsMusicNoteBeamed className="icon" /> Nhạc mới</li>
            <li><BsListUl className="icon" /> Thể loại</li>
            <li><AiFillStar className="icon" /> Top thịnh hành</li>
          </ul>
          <ul>
            <h6>Thư viện</h6>
            <li><AiOutlineHeart className="icon" /> Yêu thích</li>
            <li><BsMusicNoteBeamed className="icon" /> Bài hát</li>
            <li><BiPlayCircle className="icon" /> Playlist</li>
            <li><BiTimeFive className="icon" /><Link to="/recently">Gần đây</Link></li>
          </ul>
          <ul>
            <li>● Nhạc trẻ remix</li>
            <li>● Nhạc trẻ remix</li>
            <li>● Nhạc trẻ remix</li>
            <li>● Nhạc trẻ remix</li>
          </ul>
        </div>
        <div className="popup-playlist">
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            closeOnDocumentClick={false}
            trigger={() =>
              <div className="add-playlist">
                <BsPlusCircle className="icon" />
                <span>&ensp;Tạo playlist mới</span>
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
                    <button className="create_playlist">TẠO MỚI</button>
                  </form>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </>
  )
}

export default Sidebar
