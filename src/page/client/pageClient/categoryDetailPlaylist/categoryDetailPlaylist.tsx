import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineDownload, AiOutlineLink } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { RouteComponentProps } from "react-router-dom"
import { Select, MenuItem } from "@mui/material"
import categoryApi from "api/categoryApi"
import { variableCommon } from "component/variableCommon";
import SongApi from "api/songApi";
import { HandleGet } from "component/MethodCommon";
import { useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
import Loadings from "./../../loading/loading";
import { saveToLocalStorage } from 'page/client/common/localStorageCommon';
interface CategoryDetailPlaylistIF<T> extends RouteComponentProps {

}

const CategoryDetailPlaylist: React.FC<CategoryDetailPlaylistIF<string>> = ({ match, ...props }) => {
    const [song, setSong] = useState({ display: true, data: [] });
    const cate = useRef(null);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            if (!song.display) return;
            const getUrl = new URL(window.location.href);
            const getSearch = new URLSearchParams(getUrl.search);
            // console.log('thisis get url: ', getUrl)
            // console.log('thisis get url search: ', getUrl.search)
            // console.log('thisis get search: ', getSearch)
            const query = {
                id_Topic: getSearch.get('idTopic'),
                id_Categories: getSearch.get('id_subCate'),
            }
            const [data, error] = await HandleGet(SongApi.getAll, query)
            const findCate = await categoryApi.getOne(getSearch.get('id_subCate') as string);
            if (error || findCate.status === variableCommon.statusF) {
                return props.history.replace('category')
            }
            setSong({ display: true, data: data.data });
            cate.current = findCate.data;
            setLoading(false);
        })()
        return () => {
            setSong(value => ({ ...value, display: false }));
            setLoading(false);
        }
    }, [])
    const getListId = (dataSong: any[]) => {
        if (!dataSong) return [];
        return dataSong.reduce((reviousV, currentV) => {
            return [...reviousV, currentV._id];
        }, [])
    }
    const listSong = () => {

        return (<React.Fragment>
            {song.data.map((current: any, index: number) => {
                // console.log(current)
                return (
                    <div className="box" key={index}>
                        <figure>
                            <img src={current?.image} alt="" />
                        </figure>
                        <div className="icon-box">
                            <div>
                                <FiPlayCircle className="icon"
                                    onClick={() => {
                                        saveToLocalStorage(current)
                                        dispatch(playSong({ _id: current._id, listIdSong: getListId(song.data) }))
                                    }} />
                            </div>
                        </div>
                        <h6>{current?.title}</h6>
                    </div>
                )
            })}

        </React.Fragment>)
    }

    return (
        <>
            {loading && <Loadings />}
            <div className="CategoryDetailPlaylist">
                <div className="img_banner">
                    <img src={(cate?.current as any)?.image} alt="" />
                </div>
                <h4 className="title_all text-light">Nổi bật</h4>
                <div className="box_cate_detail">
                    {listSong()}
                </div>
            </div>
        </>
    )
}

export default CategoryDetailPlaylist
