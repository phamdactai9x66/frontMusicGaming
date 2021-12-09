import { BiPlayCircle } from 'react-icons/bi';
import ChartMusicTrending from './chartMusicTrending';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { BiMusic } from 'react-icons/bi';
import { Popover } from "@material-ui/core";
import { HandleGet, sortData } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import { Link } from 'react-router-dom';
import songApi from "api/songApi";
import { ReactComponent as Play } from './play.svg'
import { handleLike, handleDownload, handleAddToPlaylist } from 'page/client/common/handle';
import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsMusicNoteList } from 'react-icons/bs';
import { CircularProgress, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getlistAudio } from "redux/audio/actionAudio";
import userPlaylistApi from 'api/userPlaylist';
import { useHistory } from 'react-router';
import NameSongArtist from 'component/nameSongArtist';
import GetTimeAudio from "component/getTimeAudio";
import AlertComponent from 'component/clientComponent/Alert';
import Notification from 'page/notificationModal/NotificationModal';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import LoadingButton from '@mui/lab/LoadingButton';
import { formStateUser } from 'redux/user/stateUser';
import './style.scss'
import { playSong } from "redux/audio/actionAudio";
import {
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar
  } from "recharts";
    const data = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ];
interface chart<T> {

}
const Chart: React.FC<chart<any>> = ({ ...props }) => {
  const history: any = useHistory<any>();
  const [playlistName, setPlaylistName] = useState('');
  // const [anchor, setAnchor] = useState(null);
  const [anchor2, setAnchor2] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState<any>({
      data: [],
      loading: false,
  });
  const [likeLoading, setLikeLoading] = useState<any[]>([]);
  const [isLogged, setIsLogged] = useState(false);
  const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  const [handleStatus, setHandleStatus] = useState({ status: "", content: "" });
  const [addPlaylistLoading, setAddPlaylistLoading] = useState(false);
  const [locationLogged, setLocationlogged] = useState(history.location.state?.isLogged ? history.location.state.isLogged : false);
    document.title = "Music Chart - Music Game";
    const [anchor, setAnchor] = useState(null);
  
    const [state, setstate] = useState({ data: [], display: true });
    const [anchorItem, setAnchorItem] = useState<any>({
        title: '',
        image: '',
        view: ''
    });

    // const dispatch = useDispatch();
    useEffect(() => {
      (async () => {
        if (!state.display) return
        const [data, error] = await HandleGet(songApi.getAll, {});
        if (data[variableCommon.statusF]) return;
        const tranformData = sortData<string>(data.data, 'view').slice(0, 7) as any;
        // console.log(tranformData)
        setstate({ display: true, data: tranformData });
      })()
      return () => {
        setstate(value => ({ ...value, display: false }));
      }
    }, [])
    const openPopover = (event: any) => {
      setAnchor(event.currentTarget);
      setAnchorItem({
        title: '',
        image: '',
        view: ''
    })
  };

  const openPopover2 = (event: any) => {
      setAnchor2(event.currentTarget);
  };

  useEffect(() => {
      (async () => {
          dispatch(getlistAudio());
          const { data } = await songApi.getAll({ _limit: 20, view: "desc" });
          setSongs(data);
      })()
  }, []);

  const handleAdd = async <T extends string>(s: T, u: T, t: T) => {
      if (!u) {
          setIsLogged(true);
          return;
      }
      if (t === 'like') {
          setLikeLoading([...likeLoading, s]);
          let likeRes = await handleLike(s, u);
          if (likeRes && likeRes.status === "added") {
              setHandleStatus({
                  status: "success",
                  content: "Thêm vào yêu thích thành công."
              })
          } else if (likeRes && likeRes.status === "deleted") {
              setHandleStatus({
                  status: "success",
                  content: "Bỏ yêu thích thành công."
              })
          } else {
              setHandleStatus({
                  status: "failed",
                  content: "Thêm vào yêu thích không thành công."
              })
          }
          setLikeLoading(likeLoading.filter(i => i !== s));
      }

      if (t === "playlist") {
          let playlistRes = await handleAddToPlaylist(s, u);
          if (playlistRes && playlistRes.status === "successfully") {
              setHandleStatus({
                  status: "success",
                  content: "Thêm vào Playlist thành công."
              })
              setAnchor(null)
          } else if (playlistRes.status === "existed") {
              setHandleStatus({
                  status: "failed",
                  content: "Bài hát đã tồn tại trong Playlist của bạn."
              })
          } else {
              setHandleStatus({
                  status: "failed",
                  content: "Thêm vào vào playlist không thành công."
              })
          }
      }
  }


  const getUserPlaylists = async () => {
      if (user === "" || user === undefined) {
          setAnchor(null);
          setIsLogged(true);
          setAnchorItem({
            title: '',
            image: '',
            view: ''
        })
          return;
      }
      const { data } = await userPlaylistApi.getAll({ id_User: user._id });
      setUserPlaylists({
          data: data,
          loading: false,
      });
  }

  const playAudio = <T extends string>(_id: T): void => {
      dispatch(playSong({ _id }))
      // console.log(_id);
  }
  const handleLogged = () => {
      setIsLogged(false);
      setLocationlogged(false);
  }

  useEffect( () => {
    if(handleStatus.status !== ""){
        let timer = setTimeout(() => {
            setHandleStatus({ status: "", content: "" })
        }, 2500);
        return () => clearTimeout(timer);
    }
}, [handleStatus])

  const handleCreatePlaylist = async () => {
      setAddPlaylistLoading(true)
      if (!playlistName) {
          setHandleStatus({
              status: "failed",
              content: "Bạn cần nhập tên Playlist"
          })
          setAddPlaylistLoading(false);
          return;
      }
      let form = new FormData();
      form.append("name", playlistName);
      form.append("id_User", user._id);

      const isCreatedPlaylist = await userPlaylistApi.postOne(form);
      if (isCreatedPlaylist.status === "successfully") {
          setUserPlaylists([...userPlaylists.data, ...isCreatedPlaylist.data]);
          setHandleStatus({
              status: "success",
              content: "Tạo Playlist thành công"
          });
          setAnchor2(null);
      } else {
          setHandleStatus({
              status: "failed",
              content: "Playlist chưa được tạo"
          });
      }
      setAddPlaylistLoading(false);
  }

    return (
        <>
            <div className="container-chart">
                <h4 className="title_all">#Musichart</h4>
                {/* <BiPlayCircle /> */}
                <div className="chart">
                    {/* <ChartMusicTrending /> */}
                    <div className="chartMusic">
                      <ResponsiveContainer>
                        <BarChart
                          className="line_chart"
                          data={state.data}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="title" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            type="monotone"
                            dataKey="view"
                            stroke="#ff6ea7"
                            fill="#ff6ea7"
                          // activeDot={{ r: 8 }}
                          />
                          <Line type="monotone" dataKey="uv" stroke="#3ed6da" />
                        </BarChart>
                      </ResponsiveContainer>           
                    </div> 
                </div>
                <br />
                <div className="list-box-musicChart">
                  {isLogged && <Notification handleLogged={handleLogged} />}
                  {locationLogged && <Notification handleLogged={handleLogged} />}
                  {handleStatus.status !== "" && <AlertComponent status={handleStatus.status} content={handleStatus.content} />}
                  {songs.length !== 0 && songs.map((item: any,index) => (
                      <div className="music_item music_item--grid border-0 p-1 mb-4" key={item._id}>
                          <div>
                              <h5 className="stt mt-2 ms-2">{index+1}</h5>
                          </div>
                          <img src={item.image} alt={item.title} />
                          <div className="box-icon m-1 pt-1 ml-3s " >
                              <BsFillPlayFill onClick={() => playAudio(item._id)} />
                          </div>
                          <div onClick={() => playAudio(item._id)} style={{cursor: "pointer"}} className="mt-1">
                              <h6>{item.title}</h6>
                              <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem" }}>
                                  <NameSongArtist _id={item._id} />
                              </div>
                          </div>
                          <div className="mt-3">
                              <GetTimeAudio audio={item?.audio} />
                          </div>
                          <div className="icon_item " style={{marginTop:'0.7rem'}}>
                              <AiOutlineDownload onClick={() => handleDownload(item)} className="icon" />
                              {likeLoading.indexOf(item._id) === -1 ? <AiFillHeart onClick={() => handleAdd( item._id, user._id, "like")} className="icon" /> : <span className='loading-icon'><CircularProgress  className='loading-icon' size={15} sx={{ color: "#d6f4f8"}} /></span> }
                              <IoMdAdd className="icon" onClick={(e) => {
                                  openPopover(e);
                                  getUserPlaylists();
                                  setAnchorItem(item);
                              }} />
                              <Popover
                                  open={Boolean(anchor)}
                                  anchorEl={anchor}
                                  anchorOrigin={{
                                      vertical: "top",
                                      horizontal: "left",
                                  }}
                                  transformOrigin={{
                                      vertical: "bottom",
                                      horizontal: "right",
                                  }}
                                  onClose={() => {
                                    setAnchor(null);
                                    setAnchorItem({
                                        title: '',
                                        image: '',
                                        view: ''
                                    })
                                }}
                              >
                                  <div style={{ background: "#101929", margin: "", color: "#fff", width: "15rem" }}>
                                      <div className="d-flex gap-2 p-2">
                                          <img width={35} height={35} src={anchorItem?.image} alt={anchorItem?.title} />
                                          <div>
                                          <h6>{anchorItem?.title}</h6>
                                              <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>{anchorItem.view} </span></div>
                                          </div>
                                      </div>
                                      <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                      <MenuItem className="add list" onClick={openPopover2}>
                                          <IoMdAdd className="icon" /> &ensp; Tạo Playlist mới
                                      </MenuItem>
                                      <Popover
                                          open={Boolean(anchor2)}
                                          anchorEl={anchor2}
                                          anchorOrigin={{
                                              vertical: "top",
                                              horizontal: "left",
                                          }}
                                          transformOrigin={{
                                              vertical: "bottom",
                                              horizontal: "right",
                                          }}
                                          onClose={() => setAnchor2(null)}
                                      >
                                          <div className="item p-3">
                                              <form>
                                                  <input type="text" onChange={(e) => setPlaylistName(e.target.value)} className="mb-2 p-2 text-light" style={{ background: "#0d141f", border: "0.1rem solid #0e5353", borderRadius: ".4rem", }} placeholder="Tên Playlist" />
                                                  <br />
                                                  <LoadingButton
                                                      onClick={handleCreatePlaylist}
                                                      startIcon={<ControlPointIcon />}
                                                      loading={addPlaylistLoading}
                                                      loadingPosition="start"
                                                      variant="contained"
                                                  >
                                                      Tạo
                                                  </LoadingButton>
                                              </form>
                                          </div>
                                      </Popover>
                                      
                                      {userPlaylists.loading && <MenuItem className="list" >
                                            <CircularProgress />
                                        </MenuItem>}
                                        {userPlaylists.data.length === 0 && <MenuItem className="list" >
                                            <BsMusicNoteList /> &ensp; Bạn chưa có Playlist nào.
                                        </MenuItem>}
                                        {userPlaylists.data.length !== 0 && userPlaylists.data.map((_: any) => (
                                            <MenuItem className="list" onClick={() => handleAdd(anchorItem._id, _._id, 'playlist')} >
                                                <BsMusicNoteList /> &ensp; {_.name}
                                            </MenuItem>
                                        ))}
                                  </div>
                              </Popover>
                          </div>
                      </div>
                  ))}
                </div>
            </div>
        </>
    )
}

export default Chart