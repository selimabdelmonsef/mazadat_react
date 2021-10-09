import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { ButtonToolbar, Nav, Dropdown } from 'rsuite';
import PropTypes from 'prop-types';

export const MyNavBar = ({ titles }) => {
    useEffect(() => {
    }, []);
    return (
        <div className={styles.myNavBar} >

                <ButtonToolbar>
                    {titles.map((title, index) => {
                        return <Dropdown className={styles.dropDownTitle} title={title?.label} trigger="hover">
                            <div>
                                <Dropdown.Item className={styles.dropDownTitle}>{title?.values}</Dropdown.Item>
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