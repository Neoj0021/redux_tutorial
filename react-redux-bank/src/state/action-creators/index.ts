import { Action } from "../action";
import { ActionType } from "../action-types"
import { Dispatch } from "redux"

export const depositMoney = (amount: number)=>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number)=>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = ()=>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}