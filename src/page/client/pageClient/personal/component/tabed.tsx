import React from 'react'
import { Link } from 'react-router-dom';

const Tabed = () => {
    return (
        <>
            <div className="info_Personal">
                <div className="info_main">
                    <img width={100} height={100} src="http://localhost:3000/static/media/admin2.b721e1dd.png" alt="" />
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
