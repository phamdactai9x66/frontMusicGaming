
import React from 'react'
import { BsMusicNoteBeamed,BsListUl } from 'react-icons/bs';
import { FaBlogger, FaChartPie } from 'react-icons/fa';
import { RiFolderMusicFill } from 'react-icons/ri';
import { Link, useLocation } from "react-router-dom";
import { BsPlusCircle } from 'react-icons/bs';
import { RiGroupFill } from 'react-icons/ri';
import { BiPlayCircle,BiTimeFive } from 'react-icons/bi';
import { AiFillStar,AiOutlineHeart } from 'react-icons/ai';
import Popup from '@titaui/reactjs-popup';

interface Sidebar<T> {

}

const Sidebar: React.FC<Sidebar<any>> = ({ ...props }) => {
  const location = useLocation();

  // console.log("this is sidebar location: ", location)
  return (
    <>
      <div className="sidebar">
        <h5><Link to="/">MUSIC GAME</Link></h5>
        <ul>
        <Link to={{pathname: '/overview', state: {page: "OverView", lastLocation: location.pathname}}}><li><BsMusicNoteBeamed className="icon" />Cá nhân</li></Link>
        {/* <Link to="/overview"><li><BsMusicNoteBeamed className="icon" />Cá nhân</li></Link> */}
        <Link to="/"><li><RiFolderMusicFill className="icon" />Khám phá</li></Link>
        <Link to="/chart"><li><FaChartPie className="icon" />Music chart</li></Link>
        <Link to="/blog"><li><FaBlogger className="icon" />Blog</li></Link>
        </ul>
        <div className="library-sidebar">
          <ul>
            <Link to="/newmusic"><li><BsMusicNoteBeamed className="icon" />Nhạc mới</li></Link>
            <Link to="/category"><li><BsListUl className="icon" />Thể loại</li></Link>
            <Link to="/toptrending"><li><AiFillStar className="icon" />Top thịnh hành</li></Link>
            <Link to="/listenTogether"><li><RiGroupFill className="icon" />Nghe cùng nhau</li></Link>
          </ul>
          <ul>
            <h6>Thư viện</h6>
            <Link to={{pathname: '/overview', state: {page: "OverView", lastLocation: location.pathname}}}><li><AiOutlineHeart className="icon" />Yêu thích</li></Link>
            <Link to={{pathname: '/overview', state: {page: "Music", lastLocation: location.pathname}}}><li><BsMusicNoteBeamed className="icon" />Bài hát</li></Link>
            <Link to={{pathname: '/overview', state: {page: "Playlist", lastLocation: location.pathname}}}><li><BiPlayCircle className="icon" />Playlist</li></Link>
            <Link to="/recently"><li><BiTimeFive className="icon" />Gần đây</li></Link>
          </ul>
          <ul>
            <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link>
            <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link>
            <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link>
            <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link>
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
