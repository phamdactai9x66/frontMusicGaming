import React, { useEffect, useState } from 'react';
import { ReactComponent as Play } from './play.svg'
import songApi from "api/songApi";
import { HandleGet, sortData } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon";


interface Toptrending<T> {
    userState: any,
}

const Toptrending: React.FC<Toptrending<any>> = ({ ...props }) => {

    // const [state, setstate] = useState({ data: [], display: true });

    // useEffect(() => {
    //     (async () => {
    //       if (!state.display) return
    //       const [data, error] = await HandleGet(songApi.getAll, {});
    //       if (data[variableCommon.statusF]) return;
    //       const tranformData = sortData<string>(data.data, 'view').slice(0, 10) as any;
    //       console.log(tranformData)
    //       setstate({ display: true, data: tranformData });
    //     })()
    //     return () => {
    //       setstate(value => ({ ...value, display: false }));
    //     }
    //   }, [])

    return (
        <>
            <div className="container-nhacmoi">
                    <div className ="title-nhacmoi-tt grid-2">
                        <div className="text-title-nhacmoi-tt">
                            <h3 className="color-nhacmoi-tt title_all">Top thịnh hành</h3>
                        </div>
                        <div className="div-svg">
                            <Play className="svg color-nhacmoi-tt" />
                        </div>
                    </div>
                    <div className="list-box-musicChart">
                        <div className="list-music">
                            <div className="main1">
                            {/* {state.data.map((current, index) => {
                                const { title, image, _id, audio } = current;
                                    return (
                                        <>
                                            <h2>{title}</h2>
                                        </>
                                    )
                            })} */}
                            </div>
                        </div>
                    </div>
                </div>
        </>
        
    )
}

export default Toptrending