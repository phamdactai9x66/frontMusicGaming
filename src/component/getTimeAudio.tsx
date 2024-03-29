import React, { useState, useEffect, useRef } from 'react';
import { tranFormDuration } from "component/MethodCommon"

interface GetTimeAudio<T> {
    audio: string
}

const GetTimeAudio: React.FC<GetTimeAudio<any>> = ({ audio, ...props }) => {
    const [count, setcount] = useState(0);
    const getAudio = useRef<HTMLAudioElement>(null);
    const [getDuration, setgetDuration] = useState<number>(0);
    useEffect(() => {
        if (count <= 3) {
            setTimeout(() => {
                const durationAudio = getAudio?.current?.duration as number;
                setcount(value => value + 1);
                setgetDuration(+durationAudio);
            }, 1000);
        }
    }, [count, getAudio.current?.readyState])
    return (
        <>
            <audio src={audio} ref={getAudio}></audio>
            {tranFormDuration(getDuration)}
        </>
    )
}

export default GetTimeAudio
