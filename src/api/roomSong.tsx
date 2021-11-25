import { Axios } from "./configApi";

class RoomSongApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/roomSong";
        return Axios.get(url, { params: { ...query } })
    }
    postSong<T extends object>(data: T): Promise<any> {
        let url: string = "/roomSong/add";
        return Axios.post(url, data)
    }
}
export default new RoomSongApi();