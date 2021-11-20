import axios, { AxiosResponse } from "axios";
import dataStoreage from "component/dataStorage";

const baseURL = 'http://localhost:5000'

const getUser = JSON.parse(localStorage?.getItem("persist:root") as any).user;
const getToken = getUser ? JSON.parse(getUser).token : '';

const Axios = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: dataStoreage.accessToken || getToken
    }
})
const AxiosFormdata = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/form-data',
        Authorization: dataStoreage.accessToken || getToken
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






