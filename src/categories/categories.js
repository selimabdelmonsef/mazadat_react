import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import styles from './categories.module.css';
import PropTypes from 'prop-types';
import { REDUCERS_CONSTANTS } from '../constants/reducers.constants';

export const MyCategories = ({ items }) => {
    const dispatch = useDispatch();

    const [currentItem, setCurrentItem] = useState("electronics");
    const categoryHandler = (categorySelected) => {
        dispatch({
            type: REDUCERS_CONSTANTS.CATEGORY.GET_CATEGORY,
            data: categorySelected
        });
        setCurrentItem(categorySelected);
    };
    return (
        <div className={styles.myAccessories} >
            <div>
                {items?.map((item) => {
                    return <div className={styles.categoriesItems}>
                        
                        <p className={`${styles.categoriesName} ${item ===currentItem?styles.selectedBtn:""}`} onClick={()=>categoryHandler(item)}>{item}</p>
                        <span className={`${styles.numbOfItems} ${item ===currentItem?styles.selectedBtn:""}`}>31</span>

                    </div>
                })}
            </div>
        </div>
    );
}
MyCategories.propTypes = {
    items: PropTypes.array,

};