import 'rsuite/dist/rsuite.min.css';
import BannerComponent from '../../components/banner/banner';
import SearchResultComponent from '../../components/searchResult/searchResult';
import AccesoriesComponent from '../../components/accesoriesComponent/accesoriesComponent';
import RangeSlider from '../../filters/range_slider/range_slider.js';
import styles from './landing_page.module.css'
import bannerAd from '../../images/bannerAd.png'
import { Circle } from '../../filters/color/color';
import SortByComponent from '../../filters/sortBy/sortyByComponent';
import Products from '../../components/products/products';
import PriceComponent from '../../components/priceComponent/priceComponent';
import SubmitSearch from '../../components/submitSearch/submitSearch';

function LandingPage() {

    return (
        <div>
            <BannerComponent />
            <SearchResultComponent />
            <img className={styles.bannerImg} src={bannerAd} alt="" />
            <AccesoriesComponent />
            <div className={styles.rangerSlider_colors}>
                <PriceComponent/>
                <div className={styles.colorComponentStyle}>
                    <Circle colors={["blue","red","black","yellow","pink","grey"]}/>
                </div>
            </div>
            <SubmitSearch/>
            <SortByComponent/>
            <Products/>
        </div>
    );
}

export default LandingPage;
