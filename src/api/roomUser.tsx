import { Axios } from "./configApi";

class RoomUserApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/roomUser";
        return Axios.get(url, { params: { ...query } })
    }
    postOne<T extends object>(data: T): Promise<any> {
        let url: string = "/roomUser/add";
        return Axios.post(url, data)
    }
    DeleteOne<T extends string>(id: T): Promise<any> {
        let url: string = `/roomUser/${id}/delete`;
        return Axios.delete(url)
    }
}
export default new RoomUserApi();