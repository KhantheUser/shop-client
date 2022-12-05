import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { publicRequest } from '../../requestData';


const initialState = {
    currentUser : null,
    isLoading : false,
    isError :false,
};


export const login = createAsyncThunk('user',async(user,{dispatch})=>{
    
   
        const res= await publicRequest.post('auth/login',user)
        console.log(res.data.data.data)
        return res.data.data.data
   
})
export const registerUser =createAsyncThunk('user',async(user,{dispatch})=>{
    
   console.log(user)
    const res= await publicRequest.post('auth/register',user)
    console.log(res.data.data.data)
    return res.data.data.data

})

const userSlice = createSlice({
    name : "user",
    initialState :initialState,
    reducers :{

    },
    extraReducers :{
        [login.pending]:(state,{payload})=>{
            state.isLoading = true;
            state.isError = false;
        },
        [login.fulfilled]: (state,{payload})=>{
            state.isLoading = false;
            state.isError = false
            state.currentUser = payload

        },
        [login.rejected] : (state,{error})=>{
            state.isLoading = false;
            state.isError = true;
        }
    }
})

export default userSlice.reducer