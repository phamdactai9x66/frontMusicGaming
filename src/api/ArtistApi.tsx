import { Axios, AxiosFormdata } from "./configApi";

class artistApi {

    getAll<T extends object>(query: T): Promise<any> {
        console.log(query);
        const url: string = "/artist";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new artistApi()