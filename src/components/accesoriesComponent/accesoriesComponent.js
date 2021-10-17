import styles from './accesoriesComponent.module.css';
import React from 'react';
import { MyCategories } from '../../categories/categories';
import useFetch from '../../fetch/useFetch';
import { api } from '../../constants/api.constants';
import PlaceholderLoading from 'react-placeholder-loading';


function AccesoriesComponent() {
    const { data: accesories, isPending, error } = useFetch(api.accesories_api);
    return (
        <div className={styles.myAccessories}>
            <div className={styles.accessoriesStyles}>
                <div className={styles.accesoriesTitle}>
                    <p >ACCESSORIES</p>
                    {error &&
                        <div>
                            Error Loading Accesories Please Refresh the page
                        </div>}
                    {isPending &&
                        <PlaceholderLoading
                            shape="circle"
                            width={60}
                            height={60} />}
                </div>
                
                <div className={styles.myCategoriesStyles} >
                    <MyCategories items={accesories} />
                </div>
            </div>
        </div>
    );
}

export default AccesoriesComponent;