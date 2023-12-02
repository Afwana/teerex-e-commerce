import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        deleteWishlist:(state,action)=>{
            return state.filter(product=>product.id!=action.payload)
        }
    }
})

export const {addToWishlist,deleteWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer