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

    unLikeSong<T extends object>(id: string): Promise<any> {
        let url: string = `/likeSong/${id}/delete`;
        return Axios.delete(url);
    }
}
export default new likeSongApi()