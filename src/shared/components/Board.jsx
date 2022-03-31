import { useState, useEffect } from 'react'

import styles from '../styles/Board.module.css'

import Item from './Item'

import Name from './Name'
import Number from './Number'
import Information from './Information'

import data from '../data/data.json'

const Board = () => {

    const [array, setArray] = useState(data)
    const [result, setResult] = useState([])
    const [status, setStatus] = useState(false)

    const items = { 'Name': Name, 'Number': Number, 'Information': Information }

    const move = (event, value, uniqueKey, valid, pair) => {
        event.preventDefault()
        const copy = [...array]
        for (let i = 0; i < array.length; i++) {
            if (copy[i].key === uniqueKey) {
                if (value === 'next') {
                    if (i < array.length - 1 && valid) {
                        copy[i].status = false
                        copy[i + 1].status = true
                    }
                    if (result.length < 4) {
                        if (Array.isArray(pair)) {
                            setResult([...result, ...pair])
                        } else {
                            setResult([...result, pair])
                        }
                    }
                    if (i === array.length - 1) {
                        setStatus(true)
                    }
                } else if (value === 'previous') {
                    if (i > 0) {
                        copy[i].status = false
                        copy[i - 1].status = true
                    }
                    const some = [...result]
                    some.splice(-2, 2)
                    setResult(some)
                }
            }
        }
        setArray(copy)
    }

    return (
        <div className={styles.board}>
            <h1 className={styles.title}>order registration</h1>
            <div className={styles.items}>
                {
                    array.map((item, index) => {
                        return (
                            <Item index={index} key={item.key} heading={item.heading} status={item.status}>
                                {
                                    Object.entries(items).map((pair) => {
                                        if (pair[0] === item.component) {
                                            return pair[1](move, item.key)
                                        }
                                    })
                                }
                            </Item>
                        )
                    })
                }
            </div>
            <div className={status ? styles.overlay : styles.hidden} onClick={() => setStatus(!status)}>
                <ul className={styles.result}>
                    {
                        result.map((object) => {
                            return (
                                <li className={styles.item}>
                                    <span>{Object.entries(object)[0][0]}</span>
                                    <span>{Object.entries(object)[0][1]}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )

}

export default Board
