
import React, { useRef, useState, useEffect, memo } from 'react'
import { FiRepeat } from 'react-icons/fi';
import { HiVolumeUp } from 'react-icons/hi';
import { PlayArrow, Pause, NavigateNext, NavigateBefore, SkipNext, SkipPrevious } from '@mui/icons-material';
import { tranFormDuration } from "component/MethodCommon";
import { formStateAudio } from "redux/audio/stateAudio";
import { formStateUser } from "redux/user/stateUser"
import { useSelector, useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
import NameSongArtist from "component/nameSongArtist";
import OptionAudio from "./optionAudio";
import LikeSong from "./likeSong";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { io } from "socket.io-client"
import roomUserApi from "api/roomUser";
interface AudioIF<T> extends RouteComponentProps {
    audio?: any | T
}
const server = "http://localhost:5000";
const Audio: React.FC<AudioIF<any>> = ({ audio: { audio: url, title, image, _id }, ...props }) => {
    const state = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const userInfo = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const dispatch = useDispatch();
    const [play, setPlay] = useState(false);
    const [duration, setduration] = useState(0);
    const [currentTime, setcurrentTime] = useState(0);
    const [loop, setloop] = useState(false);
    const [fakeRender, setfakeRender] = useState(false);

    const AudioPlay = useRef<HTMLAudioElement>(null);
    const stateCurrentTime = useRef<any>(null);
    const Range = useRef<any>(null);
    const volume = useRef<HTMLInputElement>(null);

    const changeTime = () => {
        if (!url) return
        setcurrentTime(value => value + 1);
        Range.current?.value && Range.current.value++;
    }
    useEffect(() => {
        const getDuration = Math.ceil(AudioPlay.current?.duration as any);
        setduration(getDuration)
    }, [AudioPlay.current?.readyState]);

    useEffect(() => {
        io(server).on('pauseSongUser', async (data) => {
            // console.log(data.idRoom);
            if (!data.idRoom) return
            const getRoom = await roomUserApi.getAll({ _idRoom: data.idRoom })
            getRoom.data.forEach((current: any) => {
                if (current.id_User === userInfo.user._id) {
                    setPlay(false)
                    AudioPlay.current?.pause();
                    clearInterval(stateCurrentTime.current);
                }
            })
        })
        io(server).on('playSongUser', async (data) => {
            // console.log(data.idRoom);
            if (!data.idRoom) return
            const getRoom = await roomUserApi.getAll({ _idRoom: data.idRoom })
            getRoom.data.forEach((current: any) => {
                if (current.id_User === userInfo.user._id) {
                    setPlay(true)
                    AudioPlay.current?.play();
                    clearInterval(stateCurrentTime.current);
                    stateCurrentTime.current = setInterval(changeTime, 1000)
                }
            })
        })
    }, [])

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
                if (state.listAudio.length) {
                    // console.log(state.listAudio)
                    const findIndex = state.listAudio.findIndex((current: any) => {
                        return current?._id === state?.audio?._id
                    })
                    const nextSong = findIndex + 1;
                    if (nextSong <= state.listAudio.length - 1) {
                        AudioPlay.current?.play();
                        setPlay(true)
                        dispatch(playSong({ _id: state.listAudio[nextSong]._id, listIdSong: state.listAudio }))
                    } else {
                        setPlay(false)
                        clearInterval(stateCurrentTime.current)
                    }
                } else {
                    setPlay(false)
                    clearInterval(stateCurrentTime.current)
                }

            }
            setduration(0)
            setcurrentTime(0)
            Range.current.value = 0
        }
    }, [currentTime, fakeRender])
    useEffect(() => {
        if (AudioPlay.current) {
            if (state.playing && fakeRender) {
                AudioPlay.current?.play();
                stateCurrentTime.current = setInterval(changeTime, 1000)
                setPlay(true);
            }
        }
    }, [fakeRender])
    const playAudio = () => {
        if (!url) return
        const stateAudio = !play;
        if (stateAudio) {
            AudioPlay.current?.play();
            stateCurrentTime.current = setInterval(changeTime, 1000)

            const savePath = props.location.pathname.split('/')
            const tranformArray = savePath.includes("roomDetail");
            const idRoom = savePath[savePath.length - 1]
            if (tranformArray && idRoom) {
                io(server).emit('playSong', { idRoom })
            }
        }
        if (!stateAudio) {
            AudioPlay.current?.pause();
            clearInterval(stateCurrentTime.current);
            //check in room detail
            const savePath = props.location.pathname.split('/')
            const tranformArray = savePath.includes("roomDetail");
            const idRoom = savePath[savePath.length - 1]
            if (tranformArray && idRoom) {
                io(server).emit('pauseSong', { idRoom })
            }
        }
        setPlay(stateAudio);
    }
    const changeCurrenT = () => {
        if (!url) return
        const getValue = +(Range.current as HTMLInputElement).value as any;
        if (getValue >= 0 && getValue <= duration) {
            console.log(getValue)
            setcurrentTime(getValue);
            (AudioPlay.current as any).currentTime = getValue;
        }
    }
    const nextTime = (nextTime: number) => {
        if (!url) return
        if (nextTime > 0 && nextTime < duration) {
            setcurrentTime(nextTime);
            (AudioPlay.current as any).currentTime = nextTime;
            Range.current.value = nextTime
        }
    }
    const changeVolume = () => {
        if (!url) return
        const getValue = +(volume.current?.value as string) / 100;
        (AudioPlay.current as any).volume = getValue;
    }

    return (
        <div className="footer">
            <audio ref={AudioPlay} src={url}></audio>
            <div className="author">
                <img width={50} height={50} src={image} alt='' />
                <div>
                    <h5>{title ? title : 'Shape of you'}</h5>
                    <NameSongArtist _id={_id} />
                </div>
            </div>
            <div className="icon_play-music">
                <SkipPrevious className="icon" />
                <NavigateBefore className="icon" onClick={() => { nextTime(currentTime - 10) }} />
                <div onClick={playAudio}>
                    {/* {url ? play ? <Pause className="icon" /> : <PlayArrow className="icon" /> : <CircularProgress size="20px" />} */}
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
                <LikeSong />
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
                <OptionAudio />
            </div>
        </div>
    )
}

export default withRouter(memo(Audio))
