import { Axios } from "./configApi";

class RoomApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/room";
        return Axios.get(url, { params: { ...query } })
    }
    enterRoom<T extends object>(data: T): Promise<any> {
        const url: string = "/room/checkPassword";
        return Axios.post(url, data)
    }
    createRoom<T extends object>(data: T): Promise<any> {
        const url: string = "/room/add";
        return Axios.post(url, data)
    }
}
export default new RoomApi();