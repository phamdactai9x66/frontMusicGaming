import React from "react";
import { typeAction, formTypeAction } from "./typeCart";

export interface ForminitialCart {
    dataCart: any[],
    dataStatic: any[]
}

const initialCart: ForminitialCart = {
    dataCart: [],
    dataStatic: []
}
interface typeAction {
    type: formTypeAction<string>,
    payload: any
}

function reducerCart(initial: ForminitialCart = initialCart, action: typeAction) {
    switch (action.type) {
        case typeAction.pustCart: {

            console.log("xin chao")
            return initial
        }
        default: {
            return initial;
        }
    }

}
export default reducerCart