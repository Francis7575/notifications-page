import image1 from '../../assets/avatar-mark-webber.webp'
import image2 from '../../assets/avatar-angela-gray.webp'
import image3 from '../../assets/avatar-jacob-thompson.webp'
import image4 from '../../assets/avatar-rizky-hasanuddin.webp'
import styles from './MainTop.module.css'
import style from '../MainBottom/MainBottom.module.css'
import svg from '../../assets/notification-icon.svg'

type Props = {
    image: string,
    name: string,
    notification: string,
    timeAgo: string,
    strongText?: string,
    privateMessage?: string,
}

const notifications: Props[] = [
    {
        image: image1,
        name: 'Mark Webber',
        notification: ' reacted to your recent post ',
        strongText: 'My first tournament today!',
        timeAgo: '1m ago',
    },
    {
        image: image2,
        name: 'Angela Gray',
        notification: ' followed you',
        timeAgo: '5m ago',
    },
    {
        image: image3,
        name: 'Jacob Thompson',
        notification: ' has joined your group',
        strongText: ' Chess Club',
        timeAgo: '1 day ago',
    },
    {
        image: image4,
        name: 'Rizky Hasanuddin',
        notification: ' sent you a private message',
        timeAgo: '5 days ago',
        privateMessage: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    }
]

const MainTopProps: React.FC<{ notification: Props; showIcon: boolean }> = ({ notification, showIcon }) => {
    return (
        <div className={styles.container}>
            <a href="#">
                <img className={styles.image} src={notification.image} alt="" />
            </a>
            <div className={styles.textContainer}>
                <p className={styles.notificationParagraph}>
                    <a href="#" className={styles.name}>
                        {notification.name}
                    </a>
                    <span className={styles.notificationInfo}>{notification.notification}</span>
                    <a href="#"
                        className={`${styles.strongText}
                        ${notification.strongText === ' Chess Club' ?
                                style.chessClubText : ''}`}>
                        {notification.strongText}
                    </a>
                    <span>{showIcon && <img src={svg}
                        alt="Notification icon"
                        className={styles.notificationIcon} />}
                    </span>
                </p>

                <p className={styles.timeAgo}>{notification.timeAgo}</p>
                {notification.privateMessage && (
                    <a href="#" className={styles.privateMessageBackground}>
                        <p className={styles.privateMessage}>{notification.privateMessage}</p>
                    </a>
                )}
            </div>
        </div>
    )
}

export { MainTopProps, notifications }