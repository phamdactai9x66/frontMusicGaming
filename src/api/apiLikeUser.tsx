import { Axios, AxiosFormdata } from "./configApi";

class likeUserApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/likeSong";
        return Axios.get(url, { params: { ...query } })
    }
    postOne(data: any): Promise<any> {
        const url: string = "/likeSong/add";
        return Axios.post(url, data)
    }
    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/likeSong/${_id}/delete`;
        return Axios.delete(url)
    }
}
export default new likeUserApi()