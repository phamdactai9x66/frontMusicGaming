import { Axios, AxiosFormdata } from "./configApi";

class userApi {

    getAll<T extends object>(query: T): Promise<any> {
        let url: string = "/user";
        return Axios.get(url, { params: { ...query } })
    }
    getOne<T extends string>(_id: T): Promise<any> {
        const url: string = `/user/${_id}`;
        return Axios.get(url)
    }
    activeUser<T extends string, Y extends string>(_id: T, hash: Y): Promise<any> {
        const url: string = `/user/verifyUser/${_id}/${hash}`;
        return Axios.put(url)
    }
    forgotPassWord<T extends any>(form: T): Promise<any> {
        const url: string = `/user/forgotPassword`;
        return Axios.post(url, form)
    }
    resetPassWord<T extends string, Y extends string, N extends any>(_id: T, hash: Y, form: N): Promise<any> {
        // console.log(_id, hash)
        const url: string = `/user/resetPassword/${_id}/${hash}`;
        return Axios.put(url, form)
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