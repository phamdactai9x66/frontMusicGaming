import { Axios } from "./configApi";

class RoomSongApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/roomSong";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new RoomSongApi();