import styles from './MainTop.module.css';
import { MainTopProps, notifications } from './MainTopProps';
import MainBottom from '../MainBottom/MainBottom';

const MainTop = () => {
    return (
        <main>
            <section className={styles.section}>
                {notifications.map((notification, index) => (
                    <div key={index} className={`${styles.containerBackground} 
                    ${index === notifications.length - 1 ? styles.lastContainer : ''}`}>
                        <MainTopProps notification={notification} showIcon={index < 3} />
                    </div>
                ))}
            </section>
            <MainBottom />
        </main >
    );
}

export default MainTop;
