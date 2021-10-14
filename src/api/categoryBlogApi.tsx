import { Axios, AxiosFormdata } from "./configApi";

class categoryBlogApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/categoryBlog";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/categoryBlog/${_id}`;
        return Axios.get(url)
    }
}
export default new categoryBlogApi()