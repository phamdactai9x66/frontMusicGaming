import React, { useEffect,useState } from 'react';
import playlistApi from 'api/playlistApi';
import songApi from 'api/songApi';
import playlistSongApi from 'api/playlistSongApi';
import { tranFormDataId } from "component/MethodCommon";

import { RouteComponentProps } from 'react-router-dom';
import WantHearComponent from '../home/component/WantHearComponent';


interface PlayListClient<T> extends RouteComponentProps {
    userState: any | T,
}
const settings_category = () => { 
   return ""
}
const PlayListClient: React.FC<PlayListClient<any>> = ( { location, history, ...props }: any ) => {
    const [PLS, setPLS] = useState<any[]>([]);
    const [songsTransform, setSongsTransform] = useState([]);

    // if(!location.state){
    //     history.push('/')
    //   }else{
    //     document.title = `${location.state.name ? location.state.name : ""} - Music Game`;
    //   }
    const [playlists, setPlaylists] = useState([]);


   useEffect(() => {
        (async () => {
            const { data: dataPL } = await playlistApi.getAll({});
//
            const { data: dataSongs} = await songApi.getAll({});
            const resSongsTransform = await tranFormDataId(dataSongs);

            //
            const { data: dataPLS } = await playlistSongApi.getAll({});

            // tìm ra những playlistsong có chứa _id song
            const findPLS = dataPLS.filter( (i: any) => dataSongs.findIndex( (_:any) => _._id === i.id_Songs) !== -1);
            const handlePL = dataPL.filter( (i: any) => findPLS.findIndex( (_: any) => _.id_PlayList === i._id) !== -1);
            setPlaylists(handlePL);
            setSongsTransform(resSongsTransform);
            setPLS(findPLS);
        })();
    }, []);

    return (
        <div className="container-nhacmoi">
            <div className ="title-nhacmoi-tt grid-2">
                <div>
                {playlists.length !== 0 && playlists.map((item: any) => 
                    <div className="list-slider " key={item._id} style={{width: "14rem"}}>
                        <h4 className="title_all">{item.name} </h4>
                        {/* <MdNavigateNext className="icon" /> */}

                        <WantHearComponent PLS={PLS} settings_category={settings_category} songs={songsTransform} idPlaylist={item._id} />
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default PlayListClient