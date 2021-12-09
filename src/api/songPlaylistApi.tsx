import { Axios, AxiosFormdata } from "./configApi";

class songPlaylistApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/songPlaylist";
        return Axios.get(url, { params: { ...query } });
    }

    addToPlaylist<T extends object>(data: T): Promise<any> {
        let url: string = "/songPlaylist/add";
        return AxiosFormdata.post(url, data);
    }

    removeFromSPL<T extends string>(id: T): Promise<any>{
        const url: string = `/songPlaylist/${id}/delete`;
        return Axios.delete(url);
    }
}
export default new songPlaylistApi();