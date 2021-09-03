import { Axios, AxiosFormdata } from "./configApi";

class testApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/songs";
        return Axios.get(url, { params: { query } })
    }
}
export default new testApi()