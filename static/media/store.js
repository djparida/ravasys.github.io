import { configureStore } from "@reduxjs/toolkit";
import productGlanceSlice from "../src/slice/product_at_glance_slice";
import ourSolutionSlice from "../src/slice/our_solutions_slice";

export default configureStore({
    reducer: {
        productGlance : productGlanceSlice.reducer,
        ourSolution: ourSolutionSlice.reducer
    },
})