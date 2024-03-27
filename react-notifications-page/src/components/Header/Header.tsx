import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.notificationInfo}>
                        <h1>Notifications</h1>
                        <div className={styles.notificationsBackground}>
                            <span className={styles.notificationsCounter}>3</span>
                        </div>
                    </div>
                    <button id={styles.button}>Mark all as read</button>
                </div>
            </header>
        </>
    )
}

export default Header