import styles from '../styles/App.module.css'

import Board from './Board'

const App = () => {
    return (
        <div className={styles.app}>
            <Board />
        </div>
    )
}

export default App
