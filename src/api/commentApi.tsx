import { Axios, AxiosFormdata } from "./configApi";

class commentApi {
    baseUrl: string = 'comment';
    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/comment";
        return Axios.get(url, { params: { ...query } })
    }
    postOne<T extends object>(data: T): Promise<any> {
        const url: string = `${this.baseUrl}/add`;
        return Axios.post(url, data)
    }
}
export default new commentApi()