import { useState, useEffect } from 'react'

import styles from '../styles/Division.module.css'

import Buttons from './Buttons'

const Name = (move, uniqueKey) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [valid, setValid] = useState(false)
    const [pair, setPair] = useState([false, false])

    useEffect(() => setPair([/^[а-яА-Я]+$/i.test(name), pair[1]]), [name])
    useEffect(() => setPair([pair[0], /^[а-яА-Я]+$/i.test(lastName)]), [lastName])

    useEffect(() => pair[0] && pair[1] ? setValid(true) : setValid(false), [pair])

    return (
        <div className={styles.item}>
            <form className={styles.form} action="">
                <div className={styles.division}>
                    <label htmlFor="name">имя</label>
                    <input
                        className={styles.inputField}
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value.slice(0, 1).toUpperCase() +
                                event.target.value.slice(1).toLowerCase())}
                        }
                        maxLength={25}
                    />
                </div>
                <div className={styles.division}>
                    <label htmlFor="lastName">фамилия</label>
                    <input
                        className={styles.inputField}
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(event) => {
                            setLastName(event.target.value.slice(0, 1).toUpperCase() +
                                event.target.value.slice(1).toLowerCase())
                        }}
                        maxLength={25}
                    />
                </div>
                <Buttons move={move} uniqueKey={uniqueKey} valid={valid} pair={[{ name }, { 'last name': lastName }]} />
            </form>
            <p className={styles.string}>Имя и фамилия могут содержать только буквы.</p>
        </div>
    )

}

export default Name