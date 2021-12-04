import { Axios } from "./configApi";

class playlistSongApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/playlistSong";
        return Axios.get(url, { params: { ...query } })
    }
    postOne<T extends object>(data: T): Promise<any> {
        let url: string = "/playlistSong/add";
        return Axios.post(url, data)
    }
    deleteOne<T extends string>(id: T): Promise<any> {
        let url: string = `/playlistSong/${id}/delete`;
        return Axios.delete(url)
    }
}
export default new playlistSongApi();