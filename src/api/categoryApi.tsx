import { Axios } from "./configApi";

class categoryApi {

    getAll(): Promise<any> {
        const url: string = "/songCate";
        return Axios.get(url);
    }
}
export default new categoryApi()