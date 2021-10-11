import { Axios, AxiosFormdata } from "./configApi";

class artistApi {

    getAll<T extends object>(query: T): Promise<any> {
        console.log(query);
        const url: string = "/artist";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/artist/${_id}`;
        return Axios.get(url)
    }
}
export default new artistApi()