import React from 'react'
import { RouteChildrenProps, withRouter } from "react-router-dom";
import userApi from 'api/useApi'
import { HandleGet } from 'component/MethodCommon'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface ChartUser<T> {

}

const ChartUser: React.FC<ChartUser<any>> = ({ ...props }) => {
  const [listUser, setlistUser] = React.useState<Array<any>>([]);

  const createYear = (totalMonth: number = 12): Array<any> => {
    return Array(totalMonth).fill('').map((e, index: number) => {
      return {
        month: index + 1,
        role: 0,
        user: []
      }
    });
  }
  const getRole = (data: any, role: number): number => {
    return data.filter((e: any) => e === role).length;
  }
  React.useEffect(() => {
    (async () => {
      const [res, err] = await HandleGet<Function>(userApi.getAll, {});
      if (err) return
      const formatDate = res.data?.map((e: any) => {
        const getMonth = new Date(e.createdAt);
        return { ...e, createdAt: getMonth.getMonth() + 1 }
      })
      const formatChart = createYear().map(e => {
        const getUserMonth = formatDate.filter((monthUser: any) => monthUser.createdAt === e.month)
          .map((user: any) => user.role)
        const getMember = getRole(getUserMonth, 0);
        const getActor = getRole(getUserMonth, 1);
        const getAdmin = getRole(getUserMonth, 2);
        return {
          ...e,
          Member: getMember,
          Actor: getActor,
          Admin: getAdmin,
          cound: getUserMonth.length
        };
      })
      setlistUser(formatChart)

    })()
  }, [])
  return (
    <>
      <div className="chart_user">
        <ResponsiveContainer>
          <LineChart
            className="line_chart"
            data={listUser}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cound" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Member"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Actor" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Admin" stroke="#b96b6b" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default ChartUser
