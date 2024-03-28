import styles from './Header.module.css'

type HeaderProps = {
    onMarkAllAsRead: () => void;
    numberOfNotifications: number
}

const Header = ({ onMarkAllAsRead, numberOfNotifications }: HeaderProps) => {

    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.notificationInfo}>
                        <h1>Notifications</h1>
                        <div className={styles.notificationsBackground}>
                            <span className={styles.notificationsCounter}>{numberOfNotifications}</span>
                        </div>
                    </div>
                    <button id={styles.button} onClick={onMarkAllAsRead}>Mark all as read</button>
                </div>
            </header>
        </>
    )
}

export default Header