import { Axios, AxiosFormdata } from "./configApi";

class userApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/user";
        return Axios.get(url, { params: { query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/user/${_id}`;
        return Axios.get(url)
    }
    deleteOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/user/${_id}/delete`;
        return Axios.delete(url)
    }
    checkPass<T extends string>(_id: T): Promise<any> {
        const url: string = `/user/${_id}/pass`;
        return AxiosFormdata.put(url)
    }
    Login<T extends FormData>(form: T): Promise<any> {
        let url: string = "/user/login";
        return AxiosFormdata.post(url, form)
    }
    LoginFacebook(form: any): Promise<any> {
        let url: string = "/user/login/facebook";
        return Axios.post(url, form)
    }
    LoginGoogle(form: any): Promise<any> {
        let url: string = "/user/login/google";
        return Axios.post(url, form)
    }
    Signup(form: any): Promise<any> {
        let url: string = "/user/signUp";
        return AxiosFormdata.post(url, form)
    }
    
}
export default new userApi()