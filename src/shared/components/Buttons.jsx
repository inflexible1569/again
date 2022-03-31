import { useState, useEffect } from 'react'

import styles from '../styles/Buttons.module.css'

const Buttons = ({ move, uniqueKey, valid }) => {

    const next = (event) => move(event, 'next', uniqueKey, valid)
    const previous = (event) => move(event, 'previous', uniqueKey, valid)

    return (
        <div className={styles.buttons}>
            <button className={styles.button} onClick={previous}>previous</button>
            <button className={styles.button} onClick={next}>next</button>
        </div>
    )

}

export default Buttons