import { Axios, AxiosFormdata } from "./configApi";

class blogApi {

    getAll<T extends object>(query: T): Promise<any> {
        const url: string = "/blog";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/blog/${_id}`;
        return Axios.get(url)
    }
    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/blog/${_id}/delete`;
        return Axios.delete(url)
    }

    postOne<T extends FormData>(formdata: T): Promise<any> {
        const url: string = "/blog/add";
        return AxiosFormdata.post(url, formdata)
    }

    putOne<T extends FormData, Y extends string>(formdata: T, id: Y): Promise<any> {
        const url: string = `/blog/${id}/update`;
        return AxiosFormdata.put(url, formdata)
    }
    checkPass< Y extends string>(  id: Y): Promise<any> {
        const url: string = `/blog/${id}/pass`;
        return AxiosFormdata.put(url)
    }
}
export default new blogApi()