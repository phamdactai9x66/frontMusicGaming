import { BiPlayCircle } from 'react-icons/bi';
import ChartMusicTrending from './chartMusicTrending';
import { AiOutlineDownload, AiFillHeart } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import {  MenuItem } from "@mui/material"
import { BiMusic } from 'react-icons/bi';
import { Popover } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { HandleGet, sortData } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import { Link } from 'react-router-dom';
import songApi from "api/songApi";
import { useDispatch } from "react-redux";
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
    document.title = "Music Chart - Music Game";
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event: any) => {
        setAnchor(event.currentTarget);
    };
    const [anchor2, setAnchor2] = useState(null);
    const openPopover2 = (event: any) => {
        setAnchor2(event.currentTarget);
    };
    const [state, setstate] = useState({ data: [], display: true });
    const dispatch = useDispatch();
    useEffect(() => {
      (async () => {
        if (!state.display) return
        const [data, error] = await HandleGet(songApi.getAll, {});
        if (data[variableCommon.statusF]) return;
        const tranformData = sortData<string>(data.data, 'view').slice(0, 3) as any;
        // console.log(tranformData)
        setstate({ display: true, data: tranformData });
      })()
      return () => {
        setstate(value => ({ ...value, display: false }));
      }
    }, [])
    return (
        <>
            <div className="container-chart">
                <h4 className="title_all">#Musichart <BiPlayCircle /></h4>
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
                {state.data.map((current, index) => {
            const { title, image, _id } = current;
                    <div className="box-chart" key={index}>
                        <h5 className="stt">{index+1}-</h5>
                        <img width={45} height={45} src={image} alt="" />
                        <div className="box-icon" style={{left: "4rem"}} onClick={() => dispatch(playSong({_id}))}>
                            ▶
                        </div>
                        <div className="name" onClick={() => dispatch(playSong({_id}))}>
                            <h6>{title}</h6>
                            <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>Nghệ sĩ</div>
                        </div>
                        <div className="time_txt">
                            4:50
                        </div>
                        <div className="icon_item">
                            <AiOutlineDownload className="icon" />
                            <AiFillHeart className="icon" />
                            <IoMdAdd className="icon" onClick={openPopover}/>
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
                                onClose={() => setAnchor(null)}
                            >
                                <div style={{ background: "#101929", margin: "", color: "#fff", width: "13rem" }}>
                                    <div className="d-flex gap-2 p-2">
                                        <img width={35} height={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdulnc1hxmzx9izhgHHRQGhssK6KshlS6bypOagn9_lVhJ6ntqiCFNislU1nOb7NjJeY&usqp=CAU" alt="" />
                                        <div>
                                            <h6>Shape of you</h6>
                                            <div style={{ marginTop: "-0.7rem" }}><span style={{ fontSize: "0.8rem" }}>205k </span><span style={{ fontSize: "0.8rem" }}> 3.8M</span></div>
                                        </div>
                                    </div>
                                    <hr style={{ margin: "-0.1rem 0 0.5rem 0" }} />
                                    <MenuItem>
                                        <AiOutlineDownload />&ensp; Tải xuống
                                    </MenuItem>
                                    <MenuItem >
                                        <AiFillHeart />&ensp; Thêm vào thư viện
                                    </MenuItem>

                                    <MenuItem onClick={openPopover2}>
                                        <IoMdAdd />&ensp; Thêm vào playlist
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
                                            <div className="item">
                                                <MenuItem className="list" >
                                                    <BiMusic /> &ensp;Nhạc trẻ remix
                                            </MenuItem>
                                            </div>
                                        </Popover>
                                </div>
                            </Popover>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </>
    )
}

export default Chart