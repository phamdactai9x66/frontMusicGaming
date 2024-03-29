
import React, { useEffect, useState } from 'react'
import { BsMusicNoteBeamed, BsListUl } from 'react-icons/bs';
import { FaBlogger, FaChartPie } from 'react-icons/fa';
import { RiFolderMusicFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { BsPlusCircle } from 'react-icons/bs';
import { RiGroupFill } from 'react-icons/ri';
import { BiPlayCircle, BiTimeFive } from 'react-icons/bi';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import Popup from '@titaui/reactjs-popup';
import { useSelector } from 'react-redux';
import { formStateUser } from 'redux/user/stateUser';
import Notification from 'page/notificationModal/NotificationModal';
import playlistApi from 'api/playlistApi';
import Modal from "./component/modal"

interface SidebarIF<T> {

}

const Sidebar: React.FC<SidebarIF<any>> = ({ ...props }) => {
  const userState = useSelector<{ user: any }>(state => state.user) as formStateUser;
  const [playlists, setPlaylists] = useState([]);
  const [isLogin, setIsLogin] = useState({
    status: false,
    path: '',
  });

  const handleLogged = () => {
    setIsLogin({
      status: false,
      path: '',
    });
  }

  const getPlaylists = async () => {
    const responsePL = await playlistApi.getAll({});
    if (!responsePL || responsePL.status === "failed") {
      // console.error("Get playlist failed.");
      return;
    }
    const { data } = responsePL;
    setPlaylists(data)
  }

  useEffect(() => {
    getPlaylists();
    //getSongs();
  }, []);


  return (
    <>
      {isLogin.status && <Notification path={isLogin.path} handleLogged={handleLogged} />}
      <div className="sidebar" style={{ width: 250 }}>
        <h5><Link to="/">MUSIC GAME</Link></h5>
        <ul>
          {userState.token && userState.user ? <Link to="/personal"><li><BsMusicNoteBeamed className="icon" />Cá nhân</li></Link> : <a onClick={() => setIsLogin({ status: true, path: '/personal' })}><li><BsMusicNoteBeamed className="icon" />Cá nhân</li></a>}
          {/* <Link to="/overview"><li><BsMusicNoteBeamed className="icon" />Cá nhân</li></Link> */}
          <Link to="/"><li><RiFolderMusicFill className="icon" />Khám phá</li></Link>
          <Link to="/chart"><li><FaChartPie className="icon" />Music chart</li></Link>
          <Link to="/blog"><li><FaBlogger className="icon" />Blog</li></Link>
        </ul>
        <div className="library-sidebar">
          <ul>
            <Link to="/newmusic"><li><BsMusicNoteBeamed className="icon" />Nhạc mới</li></Link>
            <Link to="/category"><li><BsListUl className="icon" />Thể loại</li></Link>
            {/* <Link to="/toptrending"><li><AiFillStar className="icon" />Top thịnh hành</li></Link> */}
            {userState.token && userState.user ? <Link to="/listenTogether"><li><RiGroupFill className="icon" />Nghe cùng nhau</li></Link> : <a onClick={() => setIsLogin({ status: true, path: '/listenTogether' })}><li><RiGroupFill className="icon" />Nghe cùng nhau</li></a>}
          </ul>
          <ul>
            <h6>Thư viện</h6>
            {/* <Link to="/favorite"><li><AiOutlineHeart className="icon" />Yêu thích</li></Link> */}
            {/* <Link to="/music"><li><BsMusicNoteBeamed className="icon" />Bài hát</li></Link>
            <Link to="/playlist" ><li><BiPlayCircle className="icon" />Playlist</li></Link> */}
            <Link to="/recently"><li><BiTimeFive className="icon" />Gần đây</li></Link>
          </ul>
          <ul>
            {/* <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link>
            <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link>
            <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link>
            <Link to="/playlistDetail"><li>● Nhạc trẻ remix</li></Link> */}
            {playlists.map((item: any) => {
              // if(isShowPLName.filter(_ => _ === item._id).length !== 0) {
              //     return null
              // } ;
              return (
                <Link key={item._id} to={{
                  pathname: `/playlist/${item?._id}`,
                  state: item.name
                }}><li><BiPlayCircle className="icon" />{item.name}</li></Link>
              )
            })}
          </ul>
        </div>
{/* asd */}
        <div className="popup-playlist">
          {userState.token && userState.user ? <Popup
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
            {(close: any) => (<Modal close={close} />)}
          </Popup> : null}
        </div>
      </div>
    </>
  )
}

export default Sidebar
