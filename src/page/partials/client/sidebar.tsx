
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
        <h5><Link to="/">MUSIC GAME</Link></h5>
        <ul>
          <li><BsMusicNoteBeamed className="icon" /><Link to="/overview">Cá nhân</Link></li>
          <li><RiFolderMusicFill className="icon" /><Link to="/">Khám phá</Link></li>
          <li><FaChartPie className="icon" /><Link to="/chart">Music chart</Link></li>
          <li><FaBlogger className="icon" /><Link to="/blog">Blog</Link></li>
        </ul>
        <div className="library-sidebar">
          <ul>
            <li><BsMusicNoteBeamed className="icon" /><Link to="/newmusic">Nhạc mới</Link></li>
            <li><BsListUl className="icon" /><Link to="/category">Thể loại</Link></li>
            <li><AiFillStar className="icon" /><Link to="/toptrending">Top thịnh hành</Link></li>
          </ul>
          <ul>
            <h6>Thư viện</h6>
            <li><AiOutlineHeart className="icon" /><Link to="/favorite">Yêu thích</Link></li>
            <li><BsMusicNoteBeamed className="icon" /><Link to="/music">Bài hát</Link></li>
            <li><BiPlayCircle className="icon" /><Link to="/playlist">Playlist</Link></li>
            <li><BiTimeFive className="icon" /><Link to="/recently">Gần đây</Link></li>
          </ul>
          <ul>
            <li><Link to="/playlistDetail">● Nhạc trẻ remix</Link></li>
            <li><Link to="/playlistDetail">● Nhạc trẻ remix</Link></li>
            <li><Link to="/playlistDetail">● Nhạc trẻ remix</Link></li>
            <li><Link to="/playlistDetail">● Nhạc trẻ remix</Link></li>
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
