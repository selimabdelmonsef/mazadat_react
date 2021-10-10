import 'rsuite/dist/rsuite.min.css';
import BannerComponent from '../../components/banner/banner';
import SearchResultComponent from '../../components/searchResult/searchResult';
import AccesoriesComponent from '../../components/accesoriesComponent/accesoriesComponent';
import RangeSlider from '../../filters/range_slider/range_slider.js';
import styles from './landing_page.module.css'
import bannerAd from '../../images/bannerAd.png'
import { Circle } from '../../filters/color/color';

function LandingPage() {

    return (
        <div>
            <BannerComponent />
            <SearchResultComponent />
            <img className={styles.bannerImg} src={bannerAd} alt="" />
            <AccesoriesComponent />
            <div className={styles.rangerSlider_colors}>
                <div className={styles.rangeSliderComponent}>
                    <p className={styles.priceTextStyle}>Prices</p>
                    <RangeSlider min={20}
                        max={1000}
                        // onChange={({ min, max }) => setMinMaxPriceRange(min, max)}
                        onChange={({ min, max }) => console.log(min, max)} />
                </div>
                <div className={styles.colorComponentStyle}>
                    <Circle colors={["blue","red","black","yellow","pink","grey"]}/>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default LandingPage;
