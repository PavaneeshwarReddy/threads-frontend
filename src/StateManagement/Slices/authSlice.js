import {createSlice} from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        token:null
    },
    reducers:{
        setLoginInfo:(state,action)=>{
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
            return state;
        },
        removeLoginInfo:(state,action)=>{
            state.user=null;
            state.token = null;
            return state;
        }
    }
});


export const {setLoginInfo,removeLoginInfo} = authSlice.actions;
export default authSlice.reducer;
