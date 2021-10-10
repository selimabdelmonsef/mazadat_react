import React from 'react';
import styles from './navbar.module.css';
import { ButtonToolbar, Dropdown } from 'rsuite';
import PropTypes from 'prop-types';

export const MyNavBar = ({ titles }) => {
    return (
        <div className={styles.myNavBar} >
            <ButtonToolbar>
                {titles.map((title, index) => {
                    return <Dropdown
                        className={styles.dropDownTitle} title={title?.label} trigger="hover">
                        <div className={styles.drowpDowns}>
                            <Dropdown.Item eventKey={index} className={styles.dropDownTitle}>{title?.values}</Dropdown.Item>
                        </div>
                    </Dropdown>
                })}
            </ButtonToolbar>
        </div>
    );
}
MyNavBar.propTypes = {
    titles: PropTypes.array,
};