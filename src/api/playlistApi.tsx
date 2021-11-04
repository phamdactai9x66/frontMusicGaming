import { Axios, AxiosFormdata } from "./configApi";

class playlistApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/playlist";
        return Axios.get(url, { params: { ...query}});
    };
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/playlist/${_id}`;
        return Axios.get(url)
    };
    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/playlist/${_id}/delete`;
        return Axios.delete(url)
    };
    postOne<T extends FormData>(formdata: T): Promise<any> {
        const url: string = "/playlist/add";
        return AxiosFormdata.post(url, formdata)
    };
    putOne<T extends FormData, Y extends string>(formdata: T, id: Y): Promise<any> {
        const url: string = `/playlist/${id}/update`;
        return AxiosFormdata.put(url, formdata)
    }

}
export default new playlistApi();