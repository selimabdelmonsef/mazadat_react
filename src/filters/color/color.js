import styles from './color.module.css'
export const Circle = ({
    colors
}) => {
    return (
        <div>
                <p className={styles.colorTextStyle}>COLOR</p>
        <div className={styles.colorFilters}>
            
            {colors?.map((color) => {
                return <div className={styles.colorStyles}
                    style={{
                        padding: 15,
                        backgroundColor: color,
                        borderRadius: 50,
                    }}/>
            })}
        </div>
        </div>
    )
};