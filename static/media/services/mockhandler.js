import productGlance from '../mockdata/product_at_glance.json';
import ourSolutions from '../mockdata/our_solutions.json';

export const ProductAtGlanceData = async () => {
    return {
        statusCode: 200,
        statusMessage: 'Product at Glance',
        result: productGlance
    }
}

export const OurSolutionsData = async () => {
    return {
        statusCode: 200,
        statusMessage: 'Our Solutions',
        result: ourSolutions
    }
}