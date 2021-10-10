import { Axios, AxiosFormdata } from "./configApi";

class slideApi {

    getAll(): Promise<any> {
        const url: string = "/slide";
        return Axios.get(url);
    }
}
export default new slideApi()