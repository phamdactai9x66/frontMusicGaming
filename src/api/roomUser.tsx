import { Axios } from "./configApi";

class RoomUserApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/roomUser";
        return Axios.get(url, { params: { ...query } })
    }
}
export default new RoomUserApi();