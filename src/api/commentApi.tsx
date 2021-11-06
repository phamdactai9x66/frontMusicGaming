import { Axios, AxiosFormdata } from "./configApi";

class commentApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/comment";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new commentApi()