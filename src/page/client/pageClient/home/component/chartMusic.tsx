import React, { useEffect, useState } from "react";
import { HandleGet, sortData } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";
import { BiPlayCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { BsFillPlayFill } from 'react-icons/bs';

import NameSongArtist from "component/nameSongArtist"
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
import songApi from "api/songApi";
import { useDispatch } from "react-redux";
import { playSong } from "redux/audio/actionAudio";
import { saveToLocalStorage } from "page/client/common/localStorageCommon";

export default function ChartMusic() {
  const [state, setstate] = useState({ data: [], display: true });
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!state.display) return
      const [data, error] = await HandleGet(songApi.getAll, { status: true });
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
      <div className="music-charts">
        <div>
          <h4 className="title_all">#Musichart</h4>
          {/* <BiPlayCircle /> */}
          {state.data.map((current, index) => {
            const { title, image, _id } = current;
            return (
              <div className="box-chart mt-3" key={index} style={{ background: "rgb(58 121 174)" }}>
                <h5 className="stt">{index + 1} -</h5>
                <img width={45} height={45} src={image} alt="" />
                <div className="box-icon" style={{ left: "4rem" }} onClick={() => {
                  dispatch(playSong({ _id }));
                  saveToLocalStorage(current)
                }}>
                  <BsFillPlayFill style={{ width: '1.5rem', height: '1.5rem', marginLeft: '-0.3rem' }} />

                </div>
                <div className="name" style={{ cursor: "pointer" }} onClick={() => {
                  dispatch(playSong({ _id }));
                  saveToLocalStorage(current)
                }}>
                  <h6>{title}</h6>
                  <div style={{ fontSize: "0.7rem", marginTop: "-0.2rem", color: "#ccc" }}>
                    <NameSongArtist _id={_id} />
                  </div>
                </div>
              </div>
            )
          })}

          <Button className="mt-4"><Link to="/chart">XEM THÊM</Link></Button>
        </div>
        <div className="chart">
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
      </div>

    </>
  );
}
