import styles from '../styles/Division.module.css'

import Buttons from './Buttons'

const Information = (move, uniqueKey) => {
    return (
        <div>
            <form className={styles.form} action="">
                <div className={styles.division}>
                    <label htmlFor="information">addition information</label>
                    <textarea
                        className={styles.inputField}
                        id="lastName"
                        type="text"
                    />
                </div>
                <Buttons move={move} uniqueKey={uniqueKey} valid={true} />
            </form>
        </div>
    )
}

export default Information