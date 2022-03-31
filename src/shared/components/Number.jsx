import styles from '../styles/Division.module.css'
import Buttons from "./Buttons";
import {useEffect, useState} from "react";

const Number = (move, uniqueKey) => {

    const [number, setNumber] = useState('')
    const [valid, setValid] = useState(false)

    useEffect(() => {
        setValid(/[0-9]+$/i.test(number))
        console.log(valid)
    }, [number])

    useEffect(() => {
        if (number[0] !== '+' && number.length === 11) {
            setNumber([
                '+',
                number[0],
                ' ',
                '(',
                number[1],
                number[2],
                number[3],
                ')',
                ' ',
                number[4],
                number[5],
                number[6],
                '-',
                number[7],
                number[8],
                '-',
                number[9],
                number[10]
            ].join(''))
        }
    }, [number])

    return (
        <div className={styles.item}>
            <form className={styles.form} action="">
                <div className={styles.division}>
                    <label htmlFor="number">phone number</label>
                    <input
                        className={styles.inputField}
                        id="number"
                        type="text"
                        maxLength={18}
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                    />
                </div>
                <Buttons move={move} uniqueKey={uniqueKey} valid={valid} />
            </form>
            <p className={styles.string}>The phone number can contain only numbers.</p>
        </div>
    )

}

export default Number