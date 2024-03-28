import styles from './MainBottom.module.css'
import { MainBottomProps, notifications } from './MainBottomProps'

const MainBottom = () => {
    return (
        <section className={styles.section}>
            {notifications.map((notification, index) => (
                <MainBottomProps key={index} notification={notification} />
            ))}
        </section>
        
    )
}

export default MainBottom