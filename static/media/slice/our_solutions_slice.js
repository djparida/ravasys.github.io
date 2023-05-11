import { createSlice } from "@reduxjs/toolkit";
import { fetchOurSolutions } from "../services/apiServices";

const initialState = {
    our_solutions: [],
    loading: false,
    isSuccess: false,
    errorMessage: null
}

const ourSolutionSlice = createSlice({
    name: 'oSolutions',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchOurSolutions.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchOurSolutions.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.our_solutions = action.payload.result;
        })
        builder.addCase(fetchOurSolutions.rejected, (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload
        })
    }
})

export default ourSolutionSlice;