import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductAtGlanceData, OurSolutionsData } from "./mockhandler";
// import axios from "axios";

export const fetchProductGlance = createAsyncThunk(
    "pglance/productAtGlance", async () => {
        return await ProductAtGlanceData();
    }
    // async (arg, {rejectWithValue}) => {
    //     try {
    //         const response = await ProductAtGlanceData()
    //         return response.data
    //     } catch (error) {
    //         rejectWithValue(error);
    //     }
       
    // }
)

export const fetchOurSolutions = createAsyncThunk(
    "oSolutions/ourSolutions", async () => {
        return await OurSolutionsData();
    }
)