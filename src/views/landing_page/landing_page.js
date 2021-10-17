import 'rsuite/dist/rsuite.min.css';
import BannerComponent from '../../components/banner/banner';
import SearchResultComponent from '../../components/searchResult/searchResult';
import AccesoriesComponent from '../../components/accesoriesComponent/accesoriesComponent';
import styles from './landing_page.module.css'
import bannerAd from '../../images/bannerAd.png'
import SortByComponent from '../../filters/sortBy/sortyByComponent';
import Products from '../../components/products/products';
import FilterComponent from '../../filterComponent/filterComponent';

function LandingPage() {

    return (
        <div>
            <BannerComponent />
            <SearchResultComponent />
            <img className={styles.bannerImg} src={bannerAd} alt="" />
            <AccesoriesComponent />
            <FilterComponent/>
            <SortByComponent/>
            <Products/>
        </div>
    );
}

export default LandingPage;
