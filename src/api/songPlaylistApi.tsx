import { Axios, AxiosFormdata } from "./configApi";

class songPlaylistApi {

    addToPlaylist<T extends object>(data: T): Promise<any> {
        let url: string = "/songPlaylist/add";
        return AxiosFormdata.post(url, data);
    }
}
export default new songPlaylistApi();