import React, { useEffect } from 'react'
import Audio from './audio';
import { useSelector, useDispatch } from "react-redux";
import { renderSong } from "redux/audio/actionAudio";
import { formStateAudio } from "redux/audio/stateAudio";
import { pausePlaying } from "redux/audio/actionAudio";
interface Enteraiment<T> {

}

const Enteraiment: React.FC<Enteraiment<any>> = ({ ...props }) => {
    const { audio: { audio: url }, display } = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const dispatch = useDispatch();
    window.addEventListener("beforeunload", function (event) {
        dispatch(pausePlaying())
    });

    useEffect(() => {
        return () => {
            dispatch(renderSong())
        }
    }, [display])
    console.log(display)
    return (
        <>
            <footer >
                {display ? <Audio url={url} /> : null}
            </footer>
        </>
    )
}

export default Enteraiment
