import { Axios } from "./configApi";

class playlistSongApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/playlistSong";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new playlistSongApi();