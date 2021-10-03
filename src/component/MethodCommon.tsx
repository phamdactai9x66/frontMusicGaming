import { FunctionsTwoTone } from "@mui/icons-material"
import react from "react"

export const HandleGet = async (functionPromise: Function, params = {}) => {
    try {
        const data = await functionPromise(params);
        return [data, null];
    } catch (error) {
        return [null, error];
    }
}
export const initialReducer = {
    Data: [],
    DataStatic: [],
    Display: false,
    Pagination: {
        _limit: 6,
        _page: 1,
        rows: 0,
    },
    Filter: {
        _limit: 6,
        _page: 1,
    }
}
const typeAciton = {
    getData: 'getData'
}
const pustAction = (name: string, payload: any = {}) => {
    return { name, payload }
}

function Reducer(state: any, action: { payload: any, type: string }) {
    switch (action.type) {
        case "":

            break;

        default:
            break;
    }
}