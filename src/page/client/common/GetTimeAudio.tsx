import React, { useEffect, useRef, useState } from 'react';

interface GetTimeAudioIF<T> {
    url: T
}

const handleTime = <T extends number>( duration: T): any => {
    if(!duration) return "0:0";
    const m = Math.floor(duration / 60);
    const s = Math.floor(duration % 60);
    
    return `${m <= 10 ? '0' + m : m} : ${s <= 10 ? "0" + s : s}`
}

const GetTimeAudio: React.FC<GetTimeAudioIF<any>> = ({ url }: any) => {
    const [getDuration, setGetDuration] = useState(0);
    const refAudio = useRef<HTMLAudioElement>(null);

    useEffect( () => {
        let isExistDuration = refAudio.current?.duration as number;
        setGetDuration(isExistDuration);
        if(!getDuration){
            setTimeout(() => {
                setGetDuration(1);
            }, 600);
        }
    }, [getDuration]);

    return (
        <>
            <audio ref={refAudio} src={url}></audio>
            <span>{handleTime(getDuration)}</span>
        </>
    )
}

export default GetTimeAudio
