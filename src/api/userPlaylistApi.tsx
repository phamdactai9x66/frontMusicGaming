import { Axios, AxiosFormdata } from "./configApi";

class userPlaylistApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/userPlaylist";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/userPlaylist/${_id}`;
        return Axios.get(url)
    }
    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/userPlaylist/${_id}/delete`;
        return Axios.delete(url)
    }
    postOne<T extends FormData>(formdata: T): Promise<any> {
        const url: string = "/userPlaylist/add";
        return AxiosFormdata.post(url, formdata)
    }
    putOne<T extends FormData, Y extends string>(formdata: T, id: Y): Promise<any> {
        const url: string = `/userPlaylist/${id}/update`;
        return AxiosFormdata.put(url, formdata)
    }
}
export default new userPlaylistApi();