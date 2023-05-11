import React, { useEffect } from "react";
import ProductAtGlance from "../../components/product_at_glance";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductGlance } from "../../services/apiServices";

const ProductGlaceSection = (props) => {
    const { product_at_glance, isSuccess, errorMessage } = useSelector((state) => state.productGlance);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProductGlance());
    }, [product_at_glance])

    const { styles } = props;
    return (
        <section className="best-features-area section-padd4 sky-blue" style={styles.section}>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={require("../../assets/images/writer.svg").default} height="200" />
                    </div>
                    <div className="col-xl-8 col-lg-10">

                        <div className="section-tittle">
                            <h2 className="wow fadeInUp  animated" data-wow-delay="0.5s"
                                style={styles.pGlance}>Products at a
                                Glance</h2>
                        </div>

                        <div className="row">
                        { isSuccess===true ? product_at_glance.map((pGlance, key)=>(
                            <div className="col-xl-6 col-lg-6 col-md-6" key={key}>
                                <ProductAtGlance 
                                    styles = {styles.data1}
                                    image_ = {require(`../../assets/images/${pGlance.image}`)}
                                    header = {pGlance.name}
                                    desc = {pGlance.description}
                                />
                            </div>
                        ))
                        : <p>loading..</p> }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductGlaceSection;