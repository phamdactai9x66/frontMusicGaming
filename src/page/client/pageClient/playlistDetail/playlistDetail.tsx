import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from "react-router-dom";
import Content from "./component/content";
import MusicDetail from "./component/musicDetail";
import { HandleGet, tranFormDataId } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import songPlaylistApi from "api/songPlaylistApi"
import songApi from "api/songApi";


interface PlaylistDetailIF<T> extends RouteComponentProps {

}
const PlaylistDetail: React.FC<PlaylistDetailIF<any>> = ({ match, history, ...props }) => {
    const [state, setstate] = useState({ display: true, data: [], dataSong: [] });

    useEffect(() => {
        (async () => {
            if (!state.display) return;
            
            const query = {
                id_User_Playlist: (match.params as any)?.idPlaylist
            }
            const [data, error] = await HandleGet(songPlaylistApi.getAll, query);
            const getAllSong = await songApi.getAll<object>({status: true});

            if (error || data.status === variableCommon.statusF) return
            setstate({ display: true, data: data.data, dataSong: tranFormDataId(getAllSong.data) })
        })()
        return () => {
            setstate(value => ({ ...value, display: false }))
        }
    }, []);

    const onRemoveUPL = async (id_song: string) => {
        const id_SPL: any = state.data.filter( (i: any) => i.id_Song === id_song)[0];
        const resRemove = await songPlaylistApi.removeFromSPL(id_SPL?._id)
        setstate({
            display: true,
            data: state.data.filter((i: any) => i.id_Song !== id_song),
            dataSong: state.dataSong
        })
    }
    return (
        <>
            <div className="container-playlist">
                <div className="playlist-content">
                    <Content state={state} history={history} />
                    <MusicDetail state={state} onRemoveUPL={onRemoveUPL} />
                </div>
                {/* <div className="quantam">
                    <div className="quantam-h4">
                        <h4 className="title_all">Có thể quan tâm</h4>
                    </div>
                    <div className="grid-box-playlist">
                        <div className="box">
                            <figure>
                                <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
                            </figure>
                            <div className="icon-box">
                                <div>
                                    <BiHeart className="icon" />
                                    <FiPlayCircle className="icon" />
                                    <HiOutlineDotsCircleHorizontal className="icon" />
                                </div>
                            </div>
                            <Select className="option">
                                <MenuItem>
                                    <AiOutlineDownload /> Tải xuống
                                </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink /> Sao chép link
                                </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                        <div className="box">
                            <figure>
                                <img src="https://i.ytimg.com/vi/Yije8O6eGn8/maxresdefault.jpg" alt="" />
                            </figure>
                            <div className="icon-box">
                                <div>
                                    <BiHeart className="icon" />
                                    <FiPlayCircle className="icon" />
                                    <HiOutlineDotsCircleHorizontal className="icon" />
                                </div>
                            </div>
                            <Select className="option">
                                <MenuItem>
                                    <AiOutlineDownload /> Tải xuống
                                </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink /> Sao chép link
                                </MenuItem>
                            </Select>
                            <h6>Nhạc trẻ remix</h6>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default PlaylistDetail