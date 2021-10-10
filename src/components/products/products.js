import React, { useEffect,useState } from 'react';
import styles from './products.module.css';
// import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../constants/api.constants';
// import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';
import useFetch from '../../fetch/useFetch';
import PlaceholderLoading from 'react-placeholder-loading';

const Products = () => {
    const category="";
    // const category = useSelector(state => state.category);
    // const productState = useSelector(state => state.products);
    // const dispatch = useDispatch();
// const [getData, setData]=useState("");
    // const { data: products, isPending, error } = useFetch(api.category_products_api.replace("{{categoryName}}", category?.id || 'jewelery'));
    const { data: products, isPending, error } = useFetch(api.all_products_api);

    useEffect(() => {
        // setData();
    }, [products]);

    // const setData = () => {
        // return products;
        // dispatch({
        //     type: REDUCERS_CONSTANTS.PRODUCTS.GET_PRODUCTS,
        //     data: products

        // })
        // dispatch({
        //     type: REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS,
        //     data: products
        // })
    // }

    return (
        <div className={styles.productsContainer}>
            {error && <div>{error}</div>}
            {isPending && <PlaceholderLoading
                            shape="rect"
                            width={300}
                            height={20} />}

            {products?.length === 0 ?
                <div className={styles.noProducts}>No Products</div>
                :
                <div>
                    {products && <div className={styles.productsBase}>
                        {products?.map((element, index) => {
                            return <div className={styles.productsElements}>
                                <div>
                                <img className={styles.imageStyle} src={element?.image} alt="" />
                                </div>
                                <div className={styles.productName}>{element?.title}</div>
                                <div className={styles.productPrice}>${element?.price}</div>
                                <div className={styles.productDescription}>{element?.description}</div>
                                <button className={styles.addToCartBtn}>Add To Cart</button>
                                <hr/>
                            </div>
                        })}
                    </div>}
                </div>
            }


        </div>

    );
}
export default Products;