import { Axios, AxiosFormdata } from "./configApi";

class blogDetail {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/detailBlog";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/detailBlog/${_id}`;
        return Axios.get(url)
    }
}
export default new blogDetail()