import React from "react";

export interface formTypeAction<T extends string> {
    pustCart?: T
}

const typeAction = {
    pustCart: "pustCart"
}


function funcitonCart(type: any, payload?: any) {
    return {
        type,
        payload
    }

}
export { typeAction, funcitonCart }