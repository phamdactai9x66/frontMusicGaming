import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import topicApi from "api/topicApi"
import categoryApi from "api/categoryApi"
import { HandleGet } from "component/MethodCommon";
import { variableCommon } from "component/variableCommon"
interface CategoryIF<T> {

}

const Category: React.FC<CategoryIF<any>> = ({ ...props }) => {
  document.title = "subpage - Music Game"
  const [handle, setHandle] = useState({ data: { dataTopic: [], dataCate: [] }, display: true })

  // useEffect(() => {
  //   (async () => {
  //     if (!handle.display) return;
  //     const [data, error] = await HandleGet<Function>(topicApi.getAll, {});
  //     const [dataCate, errorCate] = await HandleGet<Function>(categoryApi.getAll, {});
  //     if (error || data.status === variableCommon.statusF || dataCate.status === variableCommon.statusF) return

  //     setHandle({ data: { dataTopic: data?.data, dataCate: dataCate?.data }, display: true })
  //   })()
  //   return () => {
  //     return setHandle(value => ({ ...value, display: false }));
  //   }
  // }, [])
  const subCategory = (subCategory: any[], id_Topic: string): JSX.Element => {
    // console.log(subCategory);
    console.log(id_Topic)
    return (
      <React.Fragment>
        {subCategory.map((current: any, index: number) => {
          return (
            <Link to={{
            }} key={index}>
                {/* pathname: '/category/SubCategory',
              search: `?idTopic=${id_Topic}&id_subCate=${current?._id}` */}
              <div className="box">
                <figure>
                  <img src={'https://cdn.tgdd.vn/2020/08/content/1-640x360-640x360.jpg'} alt="" />
                </figure>
                <div className="icon-box_category">
                  <div>
                    <h6 className="icon">tên subpage</h6>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </React.Fragment>
    )
  }
  const listCategory = (): JSX.Element => {

    return (
      <React.Fragment>
        {
          handle.data?.dataTopic?.map((current: any, index: number) => {
            const listCate = filterCate<string>(current._id);
            console.log(listCate);
            if (!listCate?.length) return ''

            return (
              <div className="box-category" key={index}>
                <div className="box-title-category">
                  <h4 className="title_all">{current?.name}</h4>
                </div>
                <div className="box-grid-category" key={index}>
                  {/* {subCategory(listCate, current._id)} */}
                  title
                </div>
              </div>
            )
          })
        }
      </React.Fragment>
    )
  }
  const filterCate = <T extends string>(idTopic: T) => {
    if (!idTopic) return;
    return handle.data.dataCate.filter((current: any) => current.id_Topic === idTopic)
  }

  return (
    <div className="container-category">
      <div className="banner-category">
        <img src="https://html.nkdev.info/goodgames/assets/images/gallery-7.jpg" alt="" />
      </div>
      {listCategory()}
    </div>


  )
}

export default Category