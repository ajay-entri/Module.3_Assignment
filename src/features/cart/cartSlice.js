import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeProductFromCart: (state, action) => {
            state.value = state.value.filter((product) => product.id !== action.payload);
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer