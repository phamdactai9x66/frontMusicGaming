import { Axios, AxiosFormdata } from "./configApi";

class albumsApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/albums";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/albums/${_id}`;
        return Axios.get(url)
    }
}
export default new albumsApi()