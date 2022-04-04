import { useState, useEffect } from 'react'

import styles from '../styles/Division.module.css'

import Buttons from './Buttons'

const Information = (move, uniqueKey) => {

    const [valid, setValid] = useState(false)
    const [information, setInformation] = useState('')

    useEffect(() => {
        information.length > 15 ? setValid(true) : setValid(false)
    }, [information])

    return (
        <div className={styles.item}>
            <form className={styles.form} action="">
                <div className={styles.division}>
                    <label htmlFor="information">дополнительная информация</label>
                    <textarea
                        className={styles.inputField}
                        id="information"
                        type="text"
                        value={information}
                        maxLength={85}
                        onChange={(event) => setInformation(event.target.value)}
                    />
                </div>
                <Buttons move={move} uniqueKey={uniqueKey} valid={valid} pair={{ information }} />
            </form>
            <p className={styles.string}>Здесь вы можете оставить сообщение, длиной не менее 15 символов.</p>
        </div>
    )

}

export default Information