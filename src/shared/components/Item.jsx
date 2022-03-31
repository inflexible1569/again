import styles from '../styles/Item.module.css'

const Item = ({ index, heading, status, children }) => {
    return (
        <div className={styles.item}>
            <div className={styles.mark}>
                <div className={styles.circle}>{index + 1}</div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.heading}>{heading}</h2>
                <div className={!(status) ? styles.hidden : null}>{children}</div>
            </div>
        </div>
    )
}

export default Item