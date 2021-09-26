
import  React, { useState } from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import { FiRepeat } from 'react-icons/fi';
import { MdSkipNext } from 'react-icons/md';
import { MdSkipPrevious } from 'react-icons/md';
import { RiPauseMiniLine } from 'react-icons/ri';
import { BiShuffle } from 'react-icons/bi';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp } from 'react-icons/hi';
import { AiFillSetting } from 'react-icons/ai';
interface Footer<T> {

}

const Footer: React.FC<Footer<any>> = ({ ...props }) => {
    const [value, setValue] = useState(0);
    const [play, setPlay] = useState(true);
    return (
        <footer>
            <div className="author">
                <img width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdulnc1hxmzx9izhgHHRQGhssK6KshlS6bypOagn9_lVhJ6ntqiCFNislU1nOb7NjJeY&usqp=CAU" />
                <div>
                    <h5>Shape of you</h5>
                    <span>Ed Sheeran</span>
                </div>
            </div>
            <div className="icon_play-music">
                <FiRepeat className="icon" />
                <MdSkipPrevious className="icon" />                
                {play ? <RiPauseMiniLine onClick={() => {setPlay(!play)}} className="icon"/>  : <BsFillPlayFill onClick={() => {setPlay(!play)}} className="icon"/>}                      
                <MdSkipNext className="icon" />
                <BiShuffle className="icon" />
            </div>
            <div className="audio-run">
            <div className="time">1:{value}</div>
            <div>
                
            <input
                    max="50"
                    min="0"
                    type="range"
                    className="styled-range"
                    value={value}
                    onChange={(e: any) => setValue(e.target.value)}
                />
            </div>
            <div className="time">&ensp;&ensp;1:50</div>
            </div>
            <div className="volum-setting">
                <HiVolumeUp/>
                <input
                    max="50"
                    min="0"
                    type="range"
                    className="styled-range"
                />
                <AiFillSetting/>
            </div>
        </footer>
    )
}

export default Footer
