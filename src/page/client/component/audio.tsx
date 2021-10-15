
import React, { useRef, useState, useEffect } from 'react'
import { FiRepeat } from 'react-icons/fi';
import { HiVolumeUp } from 'react-icons/hi';
import { PlayArrow, Pause, NavigateNext, NavigateBefore, SkipNext, SkipPrevious, Loop } from '@mui/icons-material';
import { tranFormDuration } from "component/MethodCommon";

interface Audio<T> {

}

const Audio: React.FC<Audio<any>> = ({ ...props }) => {
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
            </div>
        </div>
    )
}

export default Audio
