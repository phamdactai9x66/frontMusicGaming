import { Axios } from "./configApi";

class userPlaylistApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/userPlaylist";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new userPlaylistApi();