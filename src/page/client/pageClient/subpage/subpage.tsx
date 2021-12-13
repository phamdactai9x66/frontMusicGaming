import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import topicApi from "api/topicApi"
import categoryApi from "api/categoryApi"
import { HandleGet } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getlistAudio, playSong } from 'redux/audio/actionAudio';
import { saveToLocalStorage } from 'page/client/common/localStorageCommon';
import { BiCaretRightCircle } from "react-icons/bi";
import { FiPlayCircle } from 'react-icons/fi';
import './style.scss'
interface SubCategoryIF<T> extends RouteComponentProps {

}

const SubCategory: React.FC<SubCategoryIF<any>> = ( { location, history, ...props }: any ) => {
  
  const [handle, setHandle] = useState({ data: { dataSongs: [], dataCate: [] }, display: true });
  const [allSongs, setAllSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const dataDispatch = await dispatch(getlistAudio());
      setAllSongs(dataDispatch.payload);

      if (!handle.display) return;
        const [dataCate, error] = await HandleGet<Function>(categoryApi.getAll, { id_Topic: location.state?._id });
      if (error || dataCate.status === variableCommon.statusF) return;

      setHandle({ data: { dataSongs: dataDispatch?.payload, dataCate: dataCate?.data }, display: true })
    })()
    return () => {
      return setHandle(value => ({ ...value, display: false }));
    }
  }, []);

  if(!location.state){
    console.log('aa')
    history.push('/')
  }else{
    document.title = `${location.state.name ? location.state.name : ""} - Music Game`;
  }

  return (
    <div className="container-category">
      <h4 className="title_all text-light" style={{color:"#a8eff9"}}>Chủ đề {location.state ? location.state.name : ""}</h4>
      <div className="banner-category">
      <img src={location.state ? location.state.image : ""} alt={location.state ? location.state.image : ""} />
      </div>

      {handle.data.dataCate.map( (itemCate: any) => {
        return <div className="box-category" key={itemCate._id}>
        <div className="box-title-category mt-4">
          <h4 className="title_all" >{itemCate.name}</h4>
        </div>
        <div className="box-grid-category">
          {handle.data.dataSongs.filter( (i: any) => i.id_Topic === location.state?._id && i.id_Categories === itemCate._id).map( (itemSong: any) => 
            // <Link to={{ }} key={itemSong._id}>
            <span  key={itemSong._id}  >
                {/* pathname: '/category/SubCategory',
              search: `?idTopic=${id_Topic}&id_subCate=${current?._id}` */}
              <div className="box" >
                <figure>
                  <img src={itemSong.image} alt={itemSong.title} />
                </figure>
                <div className="icon-box_category hover_box--opacity">
                  <div>
                    <FiPlayCircle className="icon hover_icon--none"
                       onClick={() => {
                          dispatch(playSong({ _id: itemSong._id}));
                          saveToLocalStorage(itemSong)
                        }}   />
                  </div>
                </div>
                <div>
                <p className='text-white'>{itemSong.title}</p>
                </div>
              </div>
            </span>
            // </Link>
          
          )}
        </div>
      </div>
      })}
    </div>


  )
}

export default SubCategory