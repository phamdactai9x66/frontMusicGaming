import React from 'react'
import { Link } from 'react-router-dom';

const Tabed = () => {
    return (
        <>
            <div className="info_Personal">
                <div className="info_main">
                    <img width={100} src="https://pbs.twimg.com/profile_images/1240708436775632899/lHL8ty85_400x400.jpg" alt="" />
                    <h2>Cau indo</h2>
                </div>
            </div>
            <div className="tab_Personal">
                <ul className="tab_item">
                    <li><Link to="/overview">Tổng quan</Link></li>
                    <li><Link to="/music">Bài hát</Link></li>
                    <li><Link to="/musician">Nhạc sĩ</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                    <li><Link to="/upload">Tải lên</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Tabed;
