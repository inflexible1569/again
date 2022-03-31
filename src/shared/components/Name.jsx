import { useState, useEffect } from 'react'

import styles from '../styles/Division.module.css'

import Buttons from './Buttons'

const Name = (move, uniqueKey) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [valid, setValid] = useState(false)
    const [pair, setPair] = useState([false, false])

    useEffect(() => setPair([/^[a-zA-Z]+$/i.test(name), pair[1]]), [name])
    useEffect(() => setPair([pair[0], /^[a-zA-Z]+$/i.test(lastName)]), [lastName])

    useEffect(() => pair[0] && pair[1] ? setValid(true) : setValid(false), [pair])

    return (
        <div className={styles.item}>
            <form className={styles.form} action="">
                <div className={styles.division}>
                    <label htmlFor="name">name</label>
                    <input
                        className={styles.inputField}
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value.slice(0, 1).toUpperCase() +
                                event.target.value.slice(1).toLowerCase())}
                        }
                    />
                </div>
                <div className={styles.division}>
                    <label htmlFor="lastName">last name</label>
                    <input
                        className={styles.inputField}
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(event) => {
                            setLastName(event.target.value.slice(0, 1).toUpperCase() +
                                event.target.value.slice(1).toLowerCase())
                        }}
                    />
                </div>
                <Buttons move={move} uniqueKey={uniqueKey} valid={valid} pair={[{ name }, { 'last name': lastName }]} />
            </form>
            <p className={styles.string}>The first and last name can contain only letters.</p>
        </div>
    )

}

export default Name