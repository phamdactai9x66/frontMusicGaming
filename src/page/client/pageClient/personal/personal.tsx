import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Music from './component/music';
import Musician from './component/musician';
import Overview from './component/overview';
import Playlist from './component/playlist';
import Upload from './component/upload';


interface Personal<T> {

}

const Personal: React.FC<Personal<any>> = ({ ...props }) => {
    return (
        <>
            <div className="Personal">
                <div className="info_Personal">
                    <div className="info_main">
                        <img width={100} src="https://pbs.twimg.com/profile_images/1240708436775632899/lHL8ty85_400x400.jpg" alt="" />
                        <h2>Cau indo</h2>
                    </div>
                </div>
                <Tabs className="Tabs_info">
                    <div className="tab_Personal">
                        <TabList className="tab_item">
                            <Tab>Tổng quan</Tab>
                            <Tab>bài hát</Tab>
                            <Tab>Nhạc sĩ</Tab>
                            <Tab>Playlist</Tab>
                            <Tab>Tải lên</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <Overview />
                    </TabPanel>
                    <TabPanel>
                        <Music />
                    </TabPanel>
                    <TabPanel>
                        <Musician />
                    </TabPanel>
                    <TabPanel>
                        <Playlist />
                    </TabPanel>
                    <TabPanel>
                        <Upload />
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default Personal
