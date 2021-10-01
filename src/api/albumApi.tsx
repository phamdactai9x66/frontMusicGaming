import { Axios, AxiosFormdata } from "./configApi";

class albumsApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/albums";
        return Axios.get(url, { params: { query } })
    }
}
export default new albumsApi()