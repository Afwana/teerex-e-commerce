import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        deleteCart:(state,action)=>{
            return state.filter(product=>product.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state = []
        }
    }
})

export const {addToCart,deleteCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer