import styles from './banner.module.css';
import mazadat_logo from '../../images/mazadat_logo.png';
import { FiPhone, AiOutlineShoppingCart } from 'react-icons/all';
import React, { useState } from 'react';
import { MyNavBar } from '../../navbar/navbar';


function BannerComponent() {
    const [dropwDownItems] = useState([
        {
            "label": "Super Deals",
            "values": ["super one", "super two", "super Three"]
        },
        {
            "label": "Fetured Brands",
            "values": ["Fetured one", "Fetured two", "Fetured Three"]
        },
        {
            "label": "Collections",
            "values": ["Collections one", "Collections two", "Collections Three"]
        },
        {
            "label": "BestSelling",
            "values": ["BestSelling one", "BestSelling two", "BestSelling Three"]
        },
    ]);
    return (
        <div className={styles.navbar}>
            <img src={mazadat_logo} alt="" className={styles.logoStyle} />
            <div className={styles.banner}>
                <h6><FiPhone /> 010017724161</h6>
                <h6>Shipping</h6>
                <h6>Blog</h6>
                <h6>Company</h6>
                <h6>My Account</h6>
            </div>
            <div className={styles.searchAddToCartContainer}>
                <div className={styles.searchStyle}>
                    <input></input>
                </div>
                <div className={styles.cartContainer}>
                    <AiOutlineShoppingCart /> MY CART
                </div>
                <div className={styles.numberOfOrders}>0</div>
            </div>
            <div>
                <MyNavBar titles={dropwDownItems}/>
            </div>
        </div>
    );
}

export default BannerComponent;