import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = process.env.URL_SERVER 
const initialState = {
    products : [],
    isLoading : false,
    isError :true
}
export const getProducts = createAsyncThunk('getProducts',async(params,{dispatch})=>{
    try{
        const {data} =await axios.get(`${URL}/product`)
        console.log(data)
    }catch(err){
        console.log(err)
    }
})

const productSlice = createSlice({
    name :'product',
    initialState : initialState,
    reducers : {
        
    },
    extraReducers : {
        [getProducts.pending] : (state,{payload})=>{
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state,{payload})=>{
            state.isLoading = false;
            // state.products = payload
        }
    }
})

export default productSlice.reducer