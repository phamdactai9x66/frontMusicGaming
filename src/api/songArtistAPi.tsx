import { Axios } from "./configApi";

class songArtistApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/songsArtist";
        return Axios.get(url, { params: { ...query } });
    }
    postOne<T extends object>(formdata: T): Promise<any> {
        const url: string = "/songsArtist/add";
        return Axios.post(url, formdata)
    }
    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/songsArtist/${_id}/delete`;
        return Axios.delete(url)
    }
}
export default new songArtistApi()