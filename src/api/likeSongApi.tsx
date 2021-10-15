import { Axios, AxiosFormdata } from "./configApi";

class likeSongApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/likeSong";
        return Axios.get(url, { params: { ...query } })
    }

    addToLikeSong<T extends object>(data: T): Promise<any> {
        let url: string = "/likeSong/add";
        return Axios.post(url, data);
    }
}
export default new likeSongApi()