
import React, { useRef, useState, useEffect } from 'react'
import { FiRepeat } from 'react-icons/fi';
import { HiVolumeUp } from 'react-icons/hi';
import { PlayArrow, Pause, NavigateNext, NavigateBefore, SkipNext, SkipPrevious, Loop } from '@mui/icons-material';
import { tranFormDuration } from "component/MethodCommon";
import { BiHeart, BiDotsHorizontalRounded, BiMusic } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { MenuItem } from "@mui/material";
import { AiOutlineDownload } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { Popover } from "@material-ui/core";


interface Audio<T> {

}

const Audio: React.FC<Audio<any>> = ({ ...props }) => {
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    const [play, setPlay] = useState(false);
    const [duration, setduration] = useState(0);
    const [currentTime, setcurrentTime] = useState(0);
    const [loop, setloop] = useState(false);
    const [heart, setHeart] = useState(true);
    const [fakeRender, setfakeRender] = useState(false);

    const AudioPlay = useRef<HTMLAudioElement>(null);
    const stateCurrentTime = useRef<any>(null);
    const Range = useRef<any>(null);
    const volume = useRef<HTMLInputElement>(null);

    const changeTime = () => {
        setcurrentTime(value => value + 1);
        Range.current.value++;
    }
    useEffect(() => {
        const getDuration = Math.ceil(AudioPlay.current?.duration as any);
        setduration(getDuration)
    }, [AudioPlay.current?.readyState]);

    useEffect(() => {
        if (!fakeRender) {
            setTimeout(() => {
                //fake render
                setfakeRender(true);
            }, 800);
        }
        if (currentTime > duration) {
            AudioPlay.current?.load();
            if (loop) {
                AudioPlay.current?.play();
                setPlay(true)
            } else {
                setPlay(false)
                clearInterval(stateCurrentTime.current)
            }
            setduration(0)
            setcurrentTime(0)
            Range.current.value = 0
        }

    }, [currentTime, fakeRender])

    const playAudio = () => {
        const stateAudio = !play;
        if (stateAudio) {
            AudioPlay.current?.play();
            stateCurrentTime.current = setInterval(changeTime, 1000)
        }
        if (!stateAudio) {
            AudioPlay.current?.pause();
            clearInterval(stateCurrentTime.current)
        }
        setPlay(stateAudio);
    }
    const changeCurrenT = () => {
        const getValue = +(Range.current as HTMLInputElement).value as any;
        if (getValue >= 0 && getValue <= duration) {
            console.log(getValue)
            setcurrentTime(getValue);
            (AudioPlay.current as any).currentTime = getValue;
        }
    }
    const nextTime = (nextTime: number) => {
        if (nextTime > 0 && nextTime < duration) {
            setcurrentTime(nextTime);
            (AudioPlay.current as any).currentTime = nextTime;
            Range.current.value = nextTime
        }
    }
    const changeVolume = () => {
        const getValue = +(volume.current?.value as string) / 100;
        (AudioPlay.current as any).volume = getValue;
    }

    return (
        <div className="footer">
            <audio ref={AudioPlay} src="https://firebasestorage.googleapis.com/v0/b/test12-873e4.appspot.com/o/test2%2FChoAnhTrongMua-ThuyChi_423u7.mp3?alt=media&token=f8a55d4a-e79d-4603-beef-eecc7eb80511"></audio>
            <div className="author">
                <img width={50} height={50} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdulnc1hxmzx9izhgHHRQGhssK6KshlS6bypOagn9_lVhJ6ntqiCFNislU1nOb7NjJeY&usqp=CAU" />
                <div>
                    <h5>Shape of you</h5>
                    <span>Ed Sheeran</span>
                </div>
            </div>
            <div className="icon_play-music">
                <SkipPrevious className="icon" />
                <NavigateBefore className="icon" onClick={() => { nextTime(currentTime - 10) }} />
                <div onClick={playAudio}>
                    {play ? <Pause className="icon" /> : <PlayArrow className="icon" />}
                </div>
                <NavigateNext className="icon" onClick={() => { nextTime(currentTime + 10) }} />
                <SkipNext className="icon" />
            </div>
            <div className="audio-run">
                <div className="time">{tranFormDuration<number>(currentTime) as any}</div>
                <input
                    max={duration || 100}
                    type="range"
                    className="styled-range"
                    defaultValue="0"
                    onMouseUp={changeCurrenT}
                    ref={Range}
                />
                <div className="time">&ensp;&ensp;{tranFormDuration<number>(duration)}</div>
                <FiRepeat className="icon" color={loop ? 'red' : ''}
                    onClick={() => { setloop(value => !value) }}
                />
                {heart ?
                    <BiHeart onClick={() => { setHeart(!heart) }} className="icon" />
                    : <AiFillHeart onClick={() => { setHeart(!heart) }} className="icon" />
                }

            </div>
            <div className="volum-setting" >
                <HiVolumeUp />
                <input
                    max="100"
                    min="0"
                    type="range"
                    className="styled-range"
                    ref={volume}
                    onChange={changeVolume}
                />
                <BiDotsHorizontalRounded className="icon h4" onClick={openPopover} />
                <Popover
                    open={Boolean(anchor)}
                    anchorEl={anchor}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    onClose={() => setAnchor(null)}
                >
                    <div style={{ background: "#101929", margin: "", color: "#fff", width: "13rem" }}>
                        <div className="d-flex gap-2 p-2">
                            <img width={35} height={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdulnc1hxmzx9izhgHHRQGhssK6KshlS6bypOagn9_lVhJ6ntqiCFNislU1nOb7NjJeY&usqp=CAU" alt="" />
                            <div>
                                <h6>Shape of you</h6>
                                <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                            </div>
                        </div>
                        <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                        <MenuItem>
                            <AiOutlineDownload />&ensp; Tải xuống
                        </MenuItem>
                        <MenuItem >
                            <AiFillHeart />&ensp; Thêm vào thư viện
                        </MenuItem>

                        <MenuItem onClick={openPopover2}>
                            <IoMdAdd />&ensp; Thêm vào playlist
                            </MenuItem>
                        <Popover
                            open={Boolean(anchor2)}
                            anchorEl={anchor2}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            onClose={() => setAnchor2(null)}
                        >
                            <div className="item">
                                <MenuItem className="list">
                                    <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                                <MenuItem className="list">
                                    <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                                <MenuItem className="list">
                                    <BiMusic /> &ensp;Nhạc trẻ remix
                            </MenuItem>
                            </div>
                        </Popover>
                    </div>
                </Popover>
            </div>
        </div>
    )
}

export default Audio
