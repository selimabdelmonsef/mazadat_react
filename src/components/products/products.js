import React, { useEffect } from 'react';
import styles from './products.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../constants/api.constants';
import useFetch from '../../fetch/useFetch';
import PlaceholderLoading from 'react-placeholder-loading';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';

const Products = () => {
    const category = useSelector(state => state.category);
    const productState = useSelector(state => state.products);

    const dispatch = useDispatch();

    const { data: products, isPending, error } = useFetch(api.category_products_api.replace("{{categoryName}}", category?.data || 'electronics'));

    const setData = () => {
        dispatch({
            type: REDUCERS_CONSTANTS.PRODUCTS.GET_PRODUCTS,
            data: products

        });
        dispatch({
            type: REDUCERS_CONSTANTS.PRODUCTS.UPDATE_PRODUCTS,
            data: products
        });
    }
    useEffect(() => {
        setData();
    }, [products]);

    return (
        <div className={styles.productsContainer}>
            {error && <div>{error}</div>}
            {isPending && <PlaceholderLoading
                shape="rect"
                width={300}
                height={20} />}

            {productState?.updatedProducts?.length === 0 ?
                <div className={styles.noProducts}>No Products</div>
                :
                <div>
                    {productState?.updatedProducts && <div className={styles.productsBase}>
                        {productState?.updatedProducts?.map((element, index) => {
                            return <div className={styles.productsElements}>
                                <div className={styles.img_title}>
                                    <div className={styles.productContent}>
                                        <img className={styles.imageStyle} src={element?.image} alt="" />
                                        <div className={styles.title_price_description_Container}>
                                            <div className={styles.productName}>{element?.title}</div>

                                            <div className={styles.productPrice}>${element?.price}</div>
                                            <div className={styles.productDescription}>{element?.description}</div>
                                        </div>
                                    </div>
                                    <button className={styles.addToCartBtn}>Add To Cart</button>
                                    <hr />
                                </div>
                            </div>
                        })}
                    </div>}
                </div>
            }


        </div>

    );
}
export default Products;