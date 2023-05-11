import React, { useState, useEffect } from "react";
import OurSolution from "../../components/our_solution";
import { useSelector, useDispatch } from "react-redux";
import { fetchOurSolutions } from "../../services/apiServices";


const OurSolutionSection = (props) => {
    const { our_solutions, isSuccess } = useSelector((state) => state.ourSolution);
    const [lastEle, setLastEle] = useState(0);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchOurSolutions());
        getLastOdds()
    }, [our_solutions])

    const getLastOdds = () => {
        return setLastEle(our_solutions.length % 3);
    }

    const {styles} = props
    return (
        <section className="service-area section-padding2">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-tittle mb-5 text-center">
                            <h2 className="wow  fadeInUp animated" data-wow-delay="0.2s"
                                style={styles.data1}>Our Solutions
                            </h2>
                            <p className="wow  fadeInUp animated" data-wow-delay="0.3s"
                                style={styles.data2}>We are
                                innovating next generation API, SDK and Plug n Play</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                { isSuccess===true ? our_solutions.map((oSolution, key)=>(
                    
                    <div className={ key > our_solutions.length - lastEle - 1 && lastEle === 2 ? "col-xl-6 col-lg-6 col-md-6" : key > our_solutions.length - lastEle - 1 && lastEle === 1 ? "col-xl-12 col-lg-12 col-md-12" : "col-xl-4 col-lg-4 col-md-4" } key={key}>
                        <OurSolution
                            styles = {styles.data2}
                            image_ = {require(`../../assets/images/${oSolution.image}`)}
                            header = {oSolution.name}
                            desc = {oSolution.description}
                        />
                    </div>
                    )):<p>loading...</p>
                }
                    {/* <div className="col-xl-4 col-lg-4 col-md-4">
                        <OurSolution
                            styles = {styles.data2}
                            image_ = {require("../../assets/images/bank.svg").default}
                            header = "BC Program Management"
                            desc = "Full stack financial inclusion solution with on boarding , transaction...."
                        />
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <OurSolution
                            styles = {styles.data2}
                            image_ = {require("../../assets/images/finance.svg").default}
                            header = "CRM Solutions"
                            desc = "Full stack financial inclusion solution with on boarding , transaction processing...."
                        />
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default OurSolutionSection;