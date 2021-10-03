import { FunctionsTwoTone } from "@mui/icons-material"

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
    checkAll: false,
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
export const typeAciton = {
    getData: 'getData',
    reset: "reset"
}
export function pustAction(type: string, payload?: any): any {
    payload = payload ?? {};
    return { type, payload }
}
const addIndexToArray = (array = []) => {
    return array.map((currenValue: any, index) => ({ ...currenValue, indexElement: index }))
}

export function handleReducer(state: any, action: { type: string, payload?: any }) {
    switch (action.type) {
        case typeAciton.getData: {
            const { Data, dataStatic } = action.payload;
            return {
                ...state,
                Data,
                DataStatic: addIndexToArray(dataStatic),
                Display: true,
                Pagination: {
                    ...state.Pagination,
                    rows: dataStatic.length
                }
            }
        }
        case typeAciton.reset: {
            return { ...state, Display: true }
        }
        default: {
            return state
        }
    }
}