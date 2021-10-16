import { Axios } from "./configApi";

class playlistApi {

    getAll(): Promise<any> {
        const url: string = "/playlist";
        return Axios.get(url);
    }
}
export default new playlistApi();