import { Axios } from "./configApi";

class songArtistApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/songsArtist";
        return Axios.get(url, { params: { ...query } });
    }
}
export default new songArtistApi()