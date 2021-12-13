import React, { useEffect, useState } from 'react'
import ListSong from "./listSong";
import LikeSongApi from "api/likeSongApi";
import SongApi from "api/songApi";
import { useSelector } from "react-redux";
import { formStateUser } from 'redux/user/stateUser';
import { HandleGet, tranFormDataId } from "component/MethodCommon";
import Slide from "./slideSong"
import Loadings from 'page/client/loading/loading';
interface LikeSongIF<T> {

}
const LikeSong: React.FC<LikeSongIF<any>> = ({ ...props }) => {
    const [likeSong, setLikeSong] = useState({ display: true, data: [], dataSong: [] });
    const { user: { _id } } = useSelector<{ user: any }>(state => state.user) as formStateUser;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            if (!likeSong.display) return;
            const query = {
                id_User: _id
            }
            const [data, error] = await HandleGet(LikeSongApi.getAll, query);
            const [dataSong, errorSong] = await HandleGet(SongApi.getAll, {status:true});
            if (error) return;
            setLikeSong((value: any) => ({ ...value, data: [data?.data], dataSong: tranFormDataId(dataSong?.data) }))
            setLoading(false);
        })()
        return () => {
            setLikeSong(value => ({ ...value, display: false }))
            setLoading(false);
        }
    }, [])
    return (
        <>
            {loading && <Loadings/> }
            <div className="main1">
                <div className="box-slider">
                    <Slide data={likeSong} />
                </div>
                <ListSong data={likeSong} />
            </div>

        </>
    )
}

export default LikeSong
