import { Axios, AxiosFormdata } from "./configApi";

class commentApi {
    baseUrl: string = 'comment';
    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/comment";
        return Axios.get(url, { params: { ...query } })
    };
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/comment/${_id}`; // đoạn này mà không dược nhớ sửa thành `${this.baseUrl}/${_id}`
        return Axios.get(url)
    };
    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/comment/${_id}/delete`;
        return Axios.delete(url)
    };
    postOne<T extends object>(data: T): Promise<any> {
        const url: string = `${this.baseUrl}/add`;
        return Axios.post(url, data)
    }
}
export default new commentApi()