import { useEffect, useState } from 'react'

import InputMask from 'react-input-mask'

import styles from '../styles/Division.module.css'

import Buttons from './Buttons'

const Number = (move, uniqueKey) => {

    const [number, setNumber] = useState('')
    const [valid, setValid] = useState(false)

    useEffect(() => setValid(/[0-9]+$/i.test(number)), [number])

    return (
        <div className={styles.item}>
            <form className={styles.form} action="">
                <div className={styles.division}>
                    <label htmlFor="number">phone number</label>
                    <InputMask
                        className={styles.inputField}
                        mask="+7 (999) 999-99-99"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                    />
                </div>
                <Buttons move={move} uniqueKey={uniqueKey} valid={valid} pair={{ number }} />
            </form>
            <p className={styles.string}>The phone number can contain only numbers.</p>
        </div>
    )

}

export default Number