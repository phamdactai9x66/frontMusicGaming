
import React from 'react'
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { FaBlogger, FaChartPie } from 'react-icons/fa';
import { RiFolderMusicFill } from 'react-icons/ri';
import { RouteChildrenProps, withRouter } from "react-router-dom";
import { BsPlusCircle } from 'react-icons/bs';
import Popup from '@titaui/reactjs-popup';

interface Sidebar<T> {

}

const Sidebar: React.FC<Sidebar<any>> = ({ ...props }) => {
  return (
    <>
      <div className="sidebar">
        <h5>MUSIC GAME</h5>
        <ul>
          <li><BsMusicNoteBeamed className="icon" /> Cá nhân</li>
          <li><RiFolderMusicFill className="icon" /> Khám phá</li>
          <li><FaChartPie className="icon" /> Music chart</li>
          <li><FaBlogger className="icon" /> Blog</li>
        </ul>
        <div className="library-sidebar">
          <ul>
            <li><BsMusicNoteBeamed className="icon" /> Cá nhân</li>
            <li><RiFolderMusicFill className="icon" /> Khám phá</li>
            <li><FaChartPie className="icon" /> Music chart</li>
          </ul>
          <ul>
            <h6>Thư viện</h6>
            <li><BsMusicNoteBeamed className="icon" /> Cá nhân</li>
            <li><RiFolderMusicFill className="icon" /> Khám phá</li>
            <li><FaChartPie className="icon" /> Music chart</li>
            <li><FaChartPie className="icon" /> Music chart</li>
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
              <div onClick={close}>
                  
              </div>   
                  <div className="content-modal">
                         <h5 className="text-center">Tạo playlist mới</h5> 
                         <form action="">
                           <input type="text" placeholder="Nhập tên playlist"/>
                           <br/><br/><button>TẠO MỚI</button>
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
