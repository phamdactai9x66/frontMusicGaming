import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
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
interface ChartMusicTrending<T> {

}

const ChartMusicTrending: React.FC<ChartMusicTrending<any>> = ({ ...props }) => {
    return (
      <>  
     <div className="chartMusic">
     <ResponsiveContainer>
              <BarChart
                className="line_chart"
                data={data}
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
      </>
    )
}

export default ChartMusicTrending
