import React, { useEffect, useRef } from 'react'
import Audio from './audio';
import { useSelector, useDispatch } from "react-redux";
import { renderSong, playSong, pauseSongRealTime } from "redux/audio/actionAudio";
import { formStateAudio } from "redux/audio/stateAudio";
import { pausePlaying } from "redux/audio/actionAudio";
import { io } from "socket.io-client";
import roomUser from "api/roomUser";
import { tranFormDataId } from "component/MethodCommon";
import { formStateUser } from 'redux/user/stateUser';
interface Enteraiment<T> {

}

const Enteraiment: React.FC<Enteraiment<any>> = ({ ...props }) => {
    const { audio, display, playRealTime } = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const server = "http://localhost:5000";
    const saveUser = useRef<Array<string>>([]);
    const dispatch = useDispatch();
    window.addEventListener("beforeunload", function (event) {
        dispatch(pausePlaying())
    });
    useEffect(() => {
        setTimeout(async () => {
            const { data } = await roomUser.getAll({});
            saveUser.current = data.map((current: any) => current.id_User);
        }, 1000);
    }, [])
    useEffect(() => {
        io(server).on("Output", (data) => {
            if (saveUser.current.includes(user._id)) {
                dispatch(playSong({ _id: data.idSong }))
            }

        });
    }, [playRealTime])

    useEffect(() => {
        return () => {
            dispatch(renderSong())
        }
    }, [display])
    return (
        <>
            <footer >
                {display ? <Audio audio={audio} /> : null}
            </footer>
        </>
    )
}

export default Enteraiment
