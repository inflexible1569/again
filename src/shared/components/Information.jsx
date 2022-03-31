import { useState } from 'react'

import styles from '../styles/Division.module.css'

import Buttons from './Buttons'

const Information = (move, uniqueKey) => {

    const [information, setInformation] = useState('')

    return (
        <div>
            <form className={styles.form} action="">
                <div className={styles.division}>
                    <label htmlFor="information">addition information</label>
                    <textarea
                        className={styles.inputField}
                        id="information"
                        type="text"
                        value={information}
                        onChange={(event) => setInformation(event.target.value)}
                    />
                </div>
                <Buttons move={move} uniqueKey={uniqueKey} valid={true} pair={{ information }} />
            </form>
        </div>
    )

}

export default Information