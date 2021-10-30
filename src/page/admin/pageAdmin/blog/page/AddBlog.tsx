import React, {useState, useRef} from 'react'
import { Card } from "@material-ui/core"
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Alert } from "@mui/material"
import { Formik, Form } from "formik"
import { InputText, FileField } from "component/customField/index"
import { page } from "../index"
import { variableCommon } from "component/variableCommon"
import SelectUser from '../component/SelectUser' 
import SelectCategoryBlog from '../component/SelectCategoryBlog'
import blogApi from 'api/BlogApi'
import validationSchemaBlog from '../component/ValidationSchemaBlog'

interface AddBlog<T> {
  changePage: any
}

const initialValue = {
  title: '',
  image: '',
  content: '',
  status: '',
  view: '',
  id_User: '',
  id_CategoryBlog: ''
}

const AddBlog: React.FC<AddBlog<any>> = ({ changePage, ...props }) => {
  
  return (
    <div>
      
    </div>
  )
}

export default AddBlog
