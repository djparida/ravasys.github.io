import { createSlice } from "@reduxjs/toolkit";
import { fetchProductGlance } from "../services/apiServices";


const initialState = {
    product_at_glance: [],
    loading: false,
    isSuccess: false,
    errorMessage: null
}

const productGlanceSlice = createSlice({
    name: 'pglance',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchProductGlance.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchProductGlance.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.product_at_glance = action.payload.result;
        })
        builder.addCase(fetchProductGlance.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload
        })
    }
})

export default productGlanceSlice;