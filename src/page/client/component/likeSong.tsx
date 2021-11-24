import React, { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import { formStateAudio } from 'redux/audio/stateAudio';
import apiLikeUser from "api/apiLikeUser";
import { HandleGet } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
interface LikeSongIF<T> {

}

const LikeSong: React.FC<LikeSongIF<any>> = ({ ...props }) => {
    const [heart, setHeart] = useState(false);
    const state = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const stateAudio = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const [stateLike, setstateLike] = useState({ display: true, data: [] });
    useEffect(() => {
        (async () => {
            if (!stateLike.display) return
            if (state.user?._id && stateAudio.audio) {
                const [data, error] = await HandleGet(apiLikeUser.getAll, {});
                if (error) return;
                const checkLike = data.data.some((curren: any) => {
                    const { id_User, id_Songs } = curren;
                    return stateAudio.audio._id === id_Songs && state.user._id === id_User
                })
                if (checkLike) setHeart(true)
                return setstateLike({ data: data.data, display: checkLike })
            }
            setstateLike(value => ({ ...value, display: false }))
        })()
        return () => {
            setstateLike(value => ({ ...value, display: false }))
        }
    }, [])
    const LikeSong = async () => {
        if (!stateLike.display) {
            const getData = {
                id_User: state.user._id,
                id_Songs: stateAudio.audio._id
            }
            const addLinkSong = await apiLikeUser.postOne(getData);
            if (addLinkSong.status !== variableCommon.statusF) {
                return setHeart(true)
            }
        } else {
            const checkLike: any = stateLike.data.find((curren: any) => {
                const { id_User, id_Songs } = curren;
                return stateAudio.audio._id === id_Songs && state.user._id === id_User
            })
            await apiLikeUser.deleteOne(checkLike._id)
            return setHeart(false)
        }
        // alert('bạn phải đăng nhập để sử dụng tính năng này.')
    }
    return (
        <>
            {heart ?
                <AiFillHeart onClick={LikeSong} className="icon" />
                : <BiHeart onClick={LikeSong} className="icon" />
            }
        </>
    )
}


export default LikeSong
