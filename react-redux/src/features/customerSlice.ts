import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface CustomerState{
    value: Customer[]
}

interface AddFoodToCustomerPayload {
    customerId: string;
    food: string;
}

interface RemoveFoodToCustomerPayload {
    customerId: string;
    index: number;
}

interface Customer {
    customerId: string;
    name: string;
    food: string[];
}

const initialState: CustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodtoCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
            state.value.forEach((customer) => {
                if(customer.customerId === action.payload.customerId){
                    customer.food.push(action.payload.food)
                }
            })
        }
    }    
})

export const { addCustomer, addFoodtoCustomer} = customerSlice.actions
export default customerSlice.reducer;