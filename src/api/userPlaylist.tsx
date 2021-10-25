import { Axios, AxiosFormdata } from "./configApi";

class userPlaylistApi {
    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/userPlaylist";
        return Axios.get(url, { params: query });
    }
    postOne<T extends FormData>(form: T): Promise<any> {
        const url: string = "/userPlaylist/add";
        return AxiosFormdata.post(url, form);
    }

}
export default new userPlaylistApi();