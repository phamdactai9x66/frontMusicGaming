
import React, { useState } from 'react'
import { FiRepeat } from 'react-icons/fi';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { RiPauseMiniLine } from 'react-icons/ri';
import { HiVolumeUp } from 'react-icons/hi';
import { BsFillSkipBackwardFill, BsSkipForwardFill, BsFillPlayFill } from 'react-icons/bs';

interface Audio<T> {

}

const Audio: React.FC<Audio<any>> = ({ ...props }) => {
    const [value, setValue] = useState(0);
    const [play, setPlay] = useState(true);
    return (
        <div className="footer">
            <div className="author">
                <img width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdulnc1hxmzx9izhgHHRQGhssK6KshlS6bypOagn9_lVhJ6ntqiCFNislU1nOb7NjJeY&usqp=CAU" />
                <div>
                    <h5>Shape of you</h5>
                    <span>Ed Sheeran</span>
                </div>
            </div>
            <div className="icon_play-music">
                <BsFillSkipBackwardFill className="icon" />
                <MdSkipPrevious className="icon" />
                {play ? <RiPauseMiniLine onClick={() => { setPlay(!play) }} className="icon" /> : <BsFillPlayFill onClick={() => { setPlay(!play) }} className="icon" />}
                <MdSkipNext className="icon" />
                <BsSkipForwardFill className="icon" />
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
                <FiRepeat className="icon" />
            </div>
            <div className="volum-setting">
                <HiVolumeUp />
                <input
                    max="50"
                    min="0"
                    type="range"
                    className="styled-range"
                />
            </div>
        </div>
    )
}

export default Audio
