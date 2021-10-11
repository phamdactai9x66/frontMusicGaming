import { Axios, AxiosFormdata } from "./configApi";

class blogApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/blog";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/blog/${_id}`;
        return Axios.get(url)
    }
}
export default new blogApi()