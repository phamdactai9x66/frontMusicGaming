import React, { useEffect, useRef, useState } from 'react';
import { tranFormDuration } from "component/MethodCommon";

interface GetTimeAudioIF<T> {
    url: T
}

const GetTimeAudio: React.FC<GetTimeAudioIF<any>> = ({ url }: any) => {
    const [getDuration, setGetDuration] = useState<number>(0);
    const [renderAgain, setRenderAgain] = useState<number>(0)
    const refAudio = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        let isExistDuration = refAudio.current?.duration as number;
        setGetDuration(isExistDuration);
        if (!renderAgain) {
            setTimeout(() => {
                setRenderAgain(1);
            }, 1000);
        }
    }, [renderAgain]);
    console.log('xin chao')
    return (
        <>
            <audio ref={refAudio} src={url}></audio>
            <span>{tranFormDuration(getDuration)}</span>
        </>
    )
}

export default GetTimeAudio
