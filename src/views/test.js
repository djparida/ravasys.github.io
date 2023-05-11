import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductGlance } from "../services/apiServices";

const Test = () => {
    const data = useSelector((state) => state.productGlance)

    console.log("data",data)
    
    const dispatch = useDispatch();

    const TestFunc = () => {
        console.log("hiii");
        dispatch(fetchProductGlance())
    }


    return(
        <div>
            <h1>Hello, world!</h1>
            <button onClick={TestFunc} className="btn btn-primary">Test</button>
        </div>
    )
}

export default Test; 