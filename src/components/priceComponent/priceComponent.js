import React from 'react';
import RangeSlider from '../../filters/range_slider/range_slider';
import { useDispatch } from 'react-redux';
import { REDUCERS_CONSTANTS } from '../../constants/reducers.constants';
import styles from './priceComponent.module.css'


const PriceComponent = () => {


  const dispatch = useDispatch();

  const setMinMaxPriceRange = (min, max) => {
    dispatch({
      type: REDUCERS_CONSTANTS.RANGE.MIN_RANGE,
      data: min
    });
    dispatch({
      type: REDUCERS_CONSTANTS.RANGE.MAX_RANGE,
      data: max
    });
  };

  return (
    <div className={styles.rangeSliderComponent}>
      <h6 className={styles.priceRangeStyle}>PRICES</h6>
      <RangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => setMinMaxPriceRange(min, max)}

      />
    </div>


  );
}
export default PriceComponent;