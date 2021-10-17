import React from 'react';
import PriceComponent from '../components/priceComponent/priceComponent';
import { Circle } from '../filters/color/color';
import styles from './filterComponent.module.css';
import SubmitSearch from '../components/submitSearch/submitSearch';



const FilterComponent = () => {
    return (
<div className={styles.filterStyles}>
        <div className={styles.rangerSlider_colors}>
            <PriceComponent />
            <div className={styles.colorComponentStyle}>
                <Circle colors={["blue", "red", "black", "yellow", "pink", "grey"]} />
            </div>
            </div>
            <SubmitSearch/>
        </div>
    );
}
export default FilterComponent;