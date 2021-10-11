import { Axios, AxiosFormdata } from "./configApi";

class songApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/song";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new songApi()