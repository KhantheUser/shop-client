import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    products : [],
    quantity : 0,
    total : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState: initialState,
    reducers : {
        addProduct : (state,{payload})=>{
            state.quantity +=payload.quantity;
            state.products.push(payload)
            state.total += payload.price * payload.quantity
        },
        quantityProduct : (state,{payload})=>{
            const index = state.products.findIndex((product)=>product._id === payload.id)
            if(state.products[index].quantity >0){

                state.products[index].quantity += payload.number
                state.total += state.products[index].price * payload.number
            }else return
        }
    }

})

export const {addProduct,quantityProduct} = cartSlice.actions
export default cartSlice.reducer