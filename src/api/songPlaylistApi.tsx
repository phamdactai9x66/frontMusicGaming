import { Axios, AxiosFormdata } from "./configApi";

class songPlaylistApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/songPlaylist";
        return Axios.get(url, { params: { ...query } });
    }

    addToPlaylist<T extends object>(data: T): Promise<any> {
        let url: string = "/songPlaylist/add";
        return AxiosFormdata.post(url, data);
    }
}
export default new songPlaylistApi();