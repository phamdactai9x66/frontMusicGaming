import { Link } from 'react-router-dom'
import React, { useCallback, useState, useEffect } from "react";
import songApi from '../../../../api/songApi'
import playlistApi from '../../../../api/playlistApi'
import userApi from '../../../../api/useApi'
import BlogApi from '../../../../api/BlogApi'
import ChartMusicHot from './component/chartMusicHot';
import ChartUser from './component/chartUser';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StatisticalLength from './component/statisticalLength';

interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
  const [song, setSong] = useState(0);
  const [playlist, setPlaylist] = useState(0);
  const [user, setUser] = useState<any[]>([]);
  const [blog, setBlog] = useState(0);
  const [admin, setAdmin] = useState<any[]>([]);
  const [member, setMember] = useState<any[]>([]);
  const [viewer, setViewer] = useState<any[]>([]);

  const getSong = async () => {
    const song = await songApi.getAll({}); 

    setSong(song.data.length)
  }

  const getPlaylist = async () => {
    const playlist = await playlistApi.getAll({}); 
    
    setPlaylist(playlist.data.length)
  }

  const getUser = async () => {
    const { data } = await userApi.getAll({}); 
    setUser(data)

    const admin = data.filter((item:any) => item.role == 1)
    const member = data.filter((item:any) => item.role == 0)
    const viewer = data.filter((item:any) => item.role == 3)

    setAdmin(admin)
    setMember(member)
    setViewer(viewer)
  }

  const getBlog = async () => {
    const blog = await BlogApi.getAll({}); 

    setBlog(blog.data.length)
  }

  useEffect(() => {
    getPlaylist();
    getSong();
    getUser();
    getBlog();
  }, []);

  return (
    <>
      <div className="home-page">
        <section>
          <h3 className="Dashboarh">Dashboard</h3>
<StatisticalLength/>
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
            <div className="main4">
              <div className="main4-all-in ">
                <div>
                  <h5 className="text-light">Tất cả &gt;</h5>
                </div>
              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck14" />
                <label className="_tab-label" htmlFor="chck14">
                  <div className="_grid_item">
                    <label className="_button_text">Nhạc sĩ</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>
              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck15" />
                <label className="_tab-label" htmlFor="chck15">
                  <div className="_grid_item">
                    <label className="_button_text">Topic</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>
              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck16" />
                <label className="_tab-label" htmlFor="chck16">
                  <div className="_grid_item">
                    <label className="_button_text">Music</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>
              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck17" />
                <label className="_tab-label" htmlFor="chck17">
                  <div className="_grid_item">
                    <label className="_button_text">Playlist</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>

              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck18" />
                <label className="_tab-label" htmlFor="chck18">
                  <div className="_grid_item">
                    <label className="_button_text">Thể loại</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>

              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck19" />
                <label className="_tab-label" htmlFor="chck19">
                  <div className="_grid_item">
                    <label className="_button_text">Slider</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>
                  </div>
                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>

              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck20" />
                <label className="_tab-label" htmlFor="chck20">
                  <div className="_grid_item">
                    <label className="_button_text">Users</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>

              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck21" />
                <label className="_tab-label" htmlFor="chck21">
                  <div className="_grid_item">
                    <label className="_button_text">Blogs</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>

              </div>
              <div className="_tab">
                <input hidden type="checkbox" id="chck22" />
                <label className="_tab-label" htmlFor="chck22">
                  <div className="_grid_item">
                    <label className="_button_text">Danh mục blog</label>
                    <div style={{ display: "flex", gridGap: "2rem" }}>
                      <div className="_icon_drop">&#10095;</div>
                      <input className="checkbox_name" type="checkbox" />
                    </div>

                  </div>

                </label>

                <div className="_tab-content">
                  <div className="content_flex">
                    <div>Name 1</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 2</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div className="content_flex">
                    <div>Name 3</div> <input className="checkbox_name" type="checkbox" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <button className="btn" style={{
                  background: "#37AFBF",
                  padding: "0.4rem 1rem 0.4rem 1rem",
                  borderRadius: "0.2rem",
                  border: "none",
                  color: "#fff"
                }}>Check Pass</button>
              </div>
                </div>

              </div>

            </div>
            <div className="main5">

              <div className="main5-table-flex3">
                <Tabs>
                  <TabList>
                    <Tab><Link to="#" className="btn">Admin</Link></Tab>
                    <Tab><Link to="#" className="btn">Member</Link></Tab>
                    <Tab><Link to="#" className="btn">Viewer</Link></Tab>
                  </TabList>

                  <TabPanel>
                    <table className="table">
                      <thead>
                        <tr className="text-white">
                          <th scope="col">#</th>
                          <th scope="col">Full name</th>
                          <th scope="col">Age</th>
                          <th scope="col">Job title</th>
                          <th scope="col">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {admin.map((item,index) => {
                          return <tr key={index}>
                                  <th scope="row">{index+1}</th>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.address}</td>
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
                          <th scope="col">Full name</th>
                          <th scope="col">Age</th>
                          <th scope="col">Job title</th>
                          <th scope="col">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                      {member.map((item,index) => {
                          return <tr key={index}>
                                  <th scope="row">{index+1}</th>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.address}</td>
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
                          <th scope="col">Full name</th>
                          <th scope="col">Age</th>
                          <th scope="col">Job title</th>
                          <th scope="col">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                      {viewer.map((item,index) => {
                          return <tr key={index}>
                                  <th scope="row">{index+1}</th>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.first_name}{item.last_name}</td>
                                  <td>{item.address}</td>
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
