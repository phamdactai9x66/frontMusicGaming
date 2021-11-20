import axios, { AxiosResponse } from "axios";
import dataStoreage from "component/dataStorage";

const baseURL = 'http://localhost:5000'


const Axios = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: dataStoreage.accessToken || ''
    }
})
const AxiosFormdata = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/form-data',
        Authorization: dataStoreage.accessToken || ''
    }
})
Axios.interceptors.response.use((response: AxiosResponse) => {
    if (response.data || response) {
        return response.data
    }
    return response
}, (err: any) => {
    throw Error(err)
})
AxiosFormdata.interceptors.response.use((response: AxiosResponse) => {
    if (response.data || response) {
        return response.data
    }
    return response
}, (err: any) => {
    throw Error(err)
})

export { Axios, AxiosFormdata }






