import { useState, useEffect } from 'react'

import styles from '../styles/Board.module.css'

import Item from './Item'

import Name from './Name'
import Number from './Number'
import Information from './Information'

import data from '../data/data.json'

const Board = () => {

    const [array, setArray] = useState(data)

    const items = { 'Name': Name, 'Number': Number, 'Information': Information }

    const move = (event, value, uniqueKey, valid) => {
        event.preventDefault()
        const copy = [...array]
        for (let i = 0; i < array.length; i++) {
            if (copy[i].key === uniqueKey) {
                if (value === 'next' && i < array.length - 1 && valid) {
                    copy[i].status = false
                    copy[i + 1].status = true
                } else if (value === 'previous' && i > 0) {
                    copy[i].status = false
                    copy[i - 1].status = true
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
        </div>
    )

}

export default Board
