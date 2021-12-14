import { Link } from 'react-router-dom'
import React, { useCallback, useState, useEffect, useRef } from "react";
import userApi from '../../../../api/useApi'
import ChartMusicHot from './component/chartMusicHot';
import ChartUser from './component/chartUser';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StatisticalLength from './component/statisticalLength';
import CheckPass from './component/checkPass';
import { getDate } from 'component/MethodCommon';
import { Avatar } from "@mui/material"
import { useSelector } from "react-redux";
import { formStateUser } from "redux/user/stateUser";
import { Redirect } from 'react-router-dom';
interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
  const [admin, setAdmin] = useState<any[]>([]);
  const [member, setMember] = useState<any[]>([]);
  const [viewer, setViewer] = useState<any[]>([]);
  const { user } = useSelector<{ user: any }>(state => state.user) as formStateUser;

  const getUser = async () => {
    const { data } = await userApi.getAll({ _limit: 6 });

    const admin = data?.filter((item: any) => item.role === 2)
    const member = data?.filter((item: any) => item.role === 1)
    const viewer = data?.filter((item: any) => item.role === 0)

    admin && setAdmin(admin)
    member && setMember(member)
    viewer && setViewer(viewer)
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="home-page">
        <section>
          <h3 className="Dashboarh">Dashboard</h3>
          <StatisticalLength />
        </section>
        <section>
          <div className="grid-main-2">
            <div className="main1">
              <ChartUser />
            </div>
            <div className="main2">
              <ChartMusicHot />
            </div>
          </div>
        </section>
        <section>
          <div className="gird-main-3">
            <div className="grid4">
              {user && user.role < 2 ? <Redirect to={{ pathname: '/admin'}} /> : <CheckPass />}
            </div>

            <div className="main5">

              <div className="main5-table-flex3">
                <Tabs>
                  <TabList>
                    <Tab><Link to="#" className="btn">Admin</Link></Tab>
                    <Tab><Link to="#" className="btn">Actor</Link></Tab>
                    <Tab><Link to="#" className="btn">Member</Link></Tab>
                  </TabList>

                  <TabPanel>
                    <table className="table">
                      <thead>
                        <tr className="text-white">
                          <th scope="col">#</th>
                          <th scope="col">Avatar</th>
                          <th scope="col">Fullname</th>
                          <th scope="col">Create by</th>
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admin.map((item, index) => {
                          return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><Avatar variant='rounded' alt="" src={item?.avatar} /></td>
                            <td>{item.first_name}{item?.last_name}</td>
                            <td>{getDate(item?.createdAt)}</td>
                            <td>{item?.role === 1 ? 'Admin' : "Admin"}</td>
                          </tr>
                        })}
                      </tbody>
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="table ">
                      <thead>
                        <tr className=" text-white">
                          <th scope="col">#</th>
                          <th scope="col">Avatar</th>
                          <th scope="col">Fullname</th>
                          <th scope="col">Create by</th>
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {member.map((item, index) => {
                          return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><Avatar variant='rounded' alt="" src={item?.avatar} /></td>
                            <td>{item.first_name}{item?.last_name}</td>
                            <td>{getDate(item?.createdAt)}</td>
                            <td>{item?.role === 1 ? 'Actor' : "Actor"}</td>
                          </tr>
                        })}
                      </tbody>
                    </table>
                  </TabPanel>
                  <TabPanel>
                    <table className="table">
                      <thead>
                        <tr className=" text-white">
                          <th scope="col">#</th>
                          <th scope="col">Avatar</th>
                          <th scope="col">Fullname</th>
                          <th scope="col">Create by</th>
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {viewer.map((item, index) => {
                          return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><Avatar variant='rounded' alt="" src={item?.avatar} /></td>
                            <td>{item?.first_name}{item?.last_name}</td>
                            <td>{getDate(item?.createdAt)}</td>
                            <td>{item?.role === 0 ? 'Member' : "Member"}</td>
                          </tr>
                        })}
                      </tbody>
                    </table>
                  </TabPanel>
                </Tabs>
              </div>

            </div>
          </div>

          {/* tabs */}

        </section>
      </div>

    </>
  )
}

export default Home
