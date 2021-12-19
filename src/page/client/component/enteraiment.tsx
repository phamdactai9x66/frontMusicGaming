import React, { useEffect, useRef, useState } from 'react'
import Audio from './audio';
import { useSelector, useDispatch } from "react-redux";
import { renderSong, playSong } from "redux/audio/actionAudio";
import { formStateAudio } from "redux/audio/stateAudio";
import { pausePlaying } from "redux/audio/actionAudio";
import roomUser from "api/roomUser";
import { formStateUser } from 'redux/user/stateUser';
import { io } from 'socket.io-client';
interface Enteraiment<T> {

}

const Enteraiment: React.FC<Enteraiment<any>> = ({ ...props }) => {
    const { audio, display, playRealTime } = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [renderUser, setrenderUser] = useState<number>(0)
    const server = "https://music-game-api-v1.herokuapp.com";
    const saveUser = useRef<Array<string>>([]);
    const dispatch = useDispatch();
    window.addEventListener("beforeunload", function (event) {
        dispatch(pausePlaying())
    });
    useEffect(() => {
        io(server).on("joined", (date: number) => {
            if (date) {
                setrenderUser(date);
            }
        });
    }, [])
    useEffect(() => {
        setTimeout(async () => {
            const { data } = await roomUser.getAll({});
            saveUser.current = data?.map((current: any) => current.id_User);
        }, 2000);//render agian when user leave out room
    }, [renderUser])
    useEffect(() => {
        io(server).on("Output", (data) => {
            if (saveUser.current.length) {
                if (saveUser.current.includes(user._id)) {
                    dispatch(playSong({ _id: data.idSong }))
                }
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
