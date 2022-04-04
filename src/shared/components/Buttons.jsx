import { useState, useEffect } from 'react'

import styles from '../styles/Buttons.module.css'

const Buttons = ({ move, uniqueKey, valid, pair }) => {

    const next = (event) => move(event, 'next', uniqueKey, valid, pair)
    const previous = (event) => move(event, 'previous', uniqueKey, valid, pair)

    return (
        <div className={styles.buttons}>
            <button className={styles.button} onClick={previous}>назад</button>
            <button className={styles.button} onClick={next}>далее</button>
        </div>
    )

}

export default Buttons