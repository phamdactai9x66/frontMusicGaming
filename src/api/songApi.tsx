import { Axios, AxiosFormdata } from "./configApi";

class songApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/song";
        return Axios.get(url, { params: { ...query } })
    }

    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/song/${_id}`;
        return Axios.get(url)
    }

    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/song/${_id}/delete`;
        return Axios.delete(url)
    }

    postOne<T extends FormData>(formdata: T): Promise<any> {
        const url: string = "/song/add";
        return AxiosFormdata.post(url, formdata)
    }

    putOne<T extends FormData, Y extends string>(formdata: T, id: Y): Promise<any> {
        const url: string = `/song/${id}/update`;
        return AxiosFormdata.put(url, formdata)
    }
    checkPass<Y extends string>( id: Y): Promise<any> {
        const url: string = `/song/${id}/pass`;
        return AxiosFormdata.put(url)
    }
}
export default new songApi()