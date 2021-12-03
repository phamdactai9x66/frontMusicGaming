import React, { useState, useEffect, useRef } from 'react'
import { Card } from "@material-ui/core";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik";
import playlistApi from 'api/playlistApi'
import { InputText, FileField } from "component/customField/index";
import validateSchemaPlayList from "../component/ValidateSchemaPlayList"
import { variableCommon } from "component/variableCommon";
import { HandleGet } from "component/MethodCommon";
import { page } from "../index";

interface UpdatePlayList<T> {
  changePage: any,
  _id: string | any,
}

const initialValue = {
  name: '',
  image: ''
}

const UpdatePlayList: React.FC<UpdatePlayList<any>> = ({ changePage, _id, ...props }) => {
  const refForm = useRef<HTMLFormElement | any>(null);
  const [alert, setAlert] = useState({ display: false, message: "", type: "" });
  const [dataPlayList, setDataPlayList] = useState<{ data: any[], display: boolean }>({ data: [], display: true });
  useEffect(() => {
    (async () => {
      if (!dataPlayList.display) return navigatePage(page.ListPlay);

      const [data, error] = await HandleGet(playlistApi.getOne, _id);

      if (error) return navigatePage(page.ListPlay);
      setDataPlayList((value) => ({ ...value, data: data.data }));
    })()
    return () => {
      setDataPlayList((value) => ({ ...value, display: false }));
    }
  }, [_id]);

  const submitForm = (data: any, action: any) => {
    const getForm = new FormData(refForm.current);
    setTimeout(async () => {
      const editPlayList = await playlistApi.putOne<FormData, string>(getForm, _id);
      if (editPlayList.status !== variableCommon.statusF) {
        setDataPlayList(value => ({ ...value, data: [editPlayList.data] }));
        setAlert(value => (
          {
            ...value, display: true,
            message: editPlayList.message,
            type: 'success'
          }
        ))
      } else {
        setAlert(value => (
          {
            ...value, display: true,
            message: editPlayList.message,
            type: 'error'
          }
        ))
      }
      action.setSubmitting(false)
    }, 1000);
  }

  const navigatePage = (page: string) => {
    changePage(page);
  }
  return (
    <>
      <div className="admin-pageAdd">
        <div className="text-name-add">
          <h3>Update PlayList</h3><br />
        </div>
        {alert.display && <Alert severity={alert.type as any} style={{ marginBottom: 5 }}>
          {alert.message}
        </Alert>}

        <Formik
          initialValues={dataPlayList.data?.[0] || initialValue}
          onSubmit={submitForm}
          validateOnChange={false}
          validationSchema={validateSchemaPlayList}
          enableReinitialize
        >

        </Formik>
      </div>
    </>
  )
}

export default UpdatePlayList
