import { Axios } from "./configApi";

class RoomApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/room";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new RoomApi();