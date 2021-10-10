import { FunctionsTwoTone } from "@mui/icons-material"

export const HandleGet = async (functionPromise: Function, params = {}) => {
    try {
        const data = await functionPromise(params);
        return [data, null];
    } catch (error) {
        return [null, error];
    }
}
export const tranFormData = <T extends any[]>(data: T, key: string, findKey: string) => {
    if ([undefined, null].includes(data as any)) return [];
    return data.map(currenV => ({ ...currenV, [key]: currenV[findKey] }))
}
export const initialReducer = {
    Data: [],
    DataStatic: [],
    Display: false,
    checkAll: false,
    Pagination: {
        _limit: 5,
        _page: 1,
        rows: 0,
    },
    Filter: {
        _limit: 5,
        _page: 1,
    }
}
export const typeAciton = {
    getData: 'getData',
    reset: 'reset',
    movePage: 'movePage',
    error: 'error',
    checkOne: 'checkOne',
    checkAll: 'checkAll',
    deleteAll: 'deleteAll',
    deleteOne: 'deleteOne',
    findName: 'findName'
}
export function pustAction(type: string, payload?: any): any {
    payload = payload ?? {};
    return { type, payload }
}
const addCheckDefault = (array = [], check = false) => {
    if ([undefined, null].includes(array as any)) return []
    return array.reduce((previousV: any, currenV: any) => ([...previousV, { ...currenV, check: check }]), [])
}

export function handleReducer(state: any, action: { type: string, payload?: any }) {
    switch (action.type) {
        case typeAciton.getData: {
            const { Data, dataStatic } = action.payload;
            return {
                ...state,
                Data: addCheckDefault(Data),
                DataStatic: addCheckDefault(dataStatic),
                Display: true,
                Pagination: {
                    ...state.Pagination,
                    rows: dataStatic.length
                }
            }
        }
        case typeAciton.movePage: {
            const { nextPage } = action.payload;
            return {
                ...state,
                Filter: { ...state.Filter, _page: +nextPage }
            };
        }
        case typeAciton.checkOne: {
            const { _id } = action.payload;
            const Data = state.Data.map((currenValue: any) => {
                if (currenValue._id === _id) {
                    return { ...currenValue, check: !currenValue.check }
                }
                return currenValue;
            });
            return { ...state, Data };
        }
        case typeAciton.checkAll: {
            const checkAll = !state.checkAll;
            return { ...state, checkAll, Data: addCheckDefault(state.Data, checkAll) };
        }
        case typeAciton.deleteAll: {
            const Data = state.Data.filter((currenValue: any) => currenValue.check === false);
            return { ...state, Data }
        }
        case typeAciton.deleteOne: {
            const { _id } = action.payload;
            const dataStore = state.Data.filter((currenV: any) => {
                return currenV._id !== _id;
            });
            return { ...state, Data: dataStore }
        }
        case typeAciton.error: {
            return { ...state, Display: true }
        }
        case typeAciton.reset: {
            return { ...state, Display: false }
        }
        case typeAciton.findName: {
            return {
                ...state,
                Filter: {
                    ...state.Filter,
                    ...action.payload
                }
            }
        }
        default: {
            return state
        }
    }
}