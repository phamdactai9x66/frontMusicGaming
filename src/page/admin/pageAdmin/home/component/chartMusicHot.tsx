import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";
import songApi from 'api/songApi';

// const data = [
//   { name: "Music 1", value: 400 },
//   { name: "Music 2", value: 300 },
//   { name: "Music 3", value: 300 },
//   { name: "Music 4", value: 200 }
// ];
const COLORS = ["#FF8042", "#FFBB28", "#00C49F", "#0088FE"];

const ChartMusicHot = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 5;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text className="payload_music" x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        className="text_music"
        x={ex + (cos >= 0 ? 1 : -1) * 3}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`View: ${value}`}</text>
      <text
        className="text_music"
        x={ex + (cos >= 0 ? 1 : -1) * 3}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [datae, setDatae] = useState([]);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  React.useEffect(() => {
    (async () => {
      const newdata = await songApi.getAll({status: true});
      const dataea = newdata?.data
        .sort((a: any, b: any) => b.view - a.view)
        .slice(0, 4)
        .map((item: any) => {
          return { name: item.title, value: item.view };
        });
      setDatae(dataea);
    })();
  }, []);
  return (
    <>
      <div className="chart_music_main">
        <div className="chart_music">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={ChartMusicHot}
                data={datae}
                innerRadius={60}
                outerRadius={80}
                fill="#1d2d47"
                dataKey="value"
                onMouseEnter={onPieEnter}
              >
                {datae.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
