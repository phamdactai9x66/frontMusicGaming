
import React, { useState, useEffect } from "react";
import { FaBlogger, FaMusic, FaUsers } from 'react-icons/fa';
import { RouteChildrenProps, withRouter,Link } from "react-router-dom";
import { MdLibraryMusic } from 'react-icons/md';
import songApi from 'api/songApi';
import playlistApi from 'api/playlistApi';
import userApi from 'api/useApi';
import blogApi from 'api/BlogApi';

interface StatisticalLength<T> {

}

const StatisticalLength: React.FC<StatisticalLength<any>> = ({ ...props }) => {
    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [users, setUsers] = useState([]);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      const getSongs = async () => {
          const { data } = await songApi.getAll({});
          setSongs(data);
      }
      getSongs();
  }, []);
  useEffect(() => {
    const getPlaylists = async () => {
        const { data } = await playlistApi.getAll({});
        setPlaylists(data);
    }
    getPlaylists();
}, []);
useEffect(() => {
    const getUsers = async () => {
        const { data } = await userApi.getAll({});
        setUsers(data);
    }
    getUsers();
}, []);
useEffect(() => {
    const getBlogs = async () => {
        const { data } = await blogApi.getAll({});
        setBlogs(data);
    }
    getBlogs();
}, []);
    return (
        <div className="home-top">
        <div className="box-bb bg-box-1 box-margin">
          <Link to="#">
            <div className="grid-db-filter">
              <div className="show-text">
                <h3>{songs.length}</h3>
                <p>Music</p>
              </div>
              <div className="icon-music">
                <FaMusic style={{ fontSize: "4rem", color: "rgb(45 45 45 / 62%)", transform: "rotate(-0deg)" }} />
              </div>
            </div>
            <div className="more-info bg-more-info1">
              <p>more info <i className="fas fa-chevron-circle-right" /></p>
            </div>
          </Link>
        </div>
        <div className="box-bb bg-box-2 ">
          <Link to="#">
            <div className="grid-db-filter">
              <div className="show-text">
                <h3>{playlists.length}</h3>
                <p>Play lists</p>
              </div>
              <div className="icon-music">
                <MdLibraryMusic style={{ fontSize: "4rem", color: "rgb(45 45 45 / 62%)", transform: "rotate(-0deg)" }} />
              </div>
            </div>
            <div className="more-info bg-more-info2">
              <p>more info <i className="fas fa-chevron-circle-right" /></p>
            </div>
          </Link>
        </div>
        <div className="box-bb bg-box-3">
          <Link to="#">
            <div className="grid-db-filter">
              <div className="show-text">
                <h3>{users.length}</h3>
                <p>Users</p>
              </div>
              <div className="icon-music">
                <FaUsers style={{ fontSize: "4rem", color: "rgb(45 45 45 / 62%)", transform: "rotate(-0deg)" }} />
              </div>
            </div>
            <div className="more-info bg-more-info3">
              <p>more info <i className="fas fa-chevron-circle-right" /></p>
            </div>
          </Link>
        </div>
        <div className="box-bb bg-box-4">
          <Link to="#">
            <div className="grid-db-filter">
              <div className="show-text">
                <h3>{blogs.length}</h3>
                <p>Blog</p>
              </div>
              <div className="icon-music">
                <FaBlogger style={{ fontSize: "4rem", color: "rgb(45 45 45 / 62%)", transform: "rotate(-0deg)" }} />
              </div>
            </div>
            <div className="more-info bg-more-info4">
              <p>more info <i className="fas fa-chevron-circle-right" /></p>
            </div>
          </Link>
        </div>
      </div> 
    )
}

export default StatisticalLength
