import image1 from '../../assets/avatar-kimberly-smith.webp'
import image2 from '../../assets/avatar-nathan-peterson.webp'
import image3 from '../../assets/avatar-anna-kim.webp'
import picture from '../../assets/image-chess.webp'
import styles from './MainBottom.module.css'
import style from '../MainTop/MainTop.module.css'

type Props = {
    image: string,
    name: string,
    notification: string,
    timeAgo: string,
    commentedPicture?: string,
    strongText?: string,
}

const notifications: Props[] = [
    {
        image: image1,
        name: 'Kimberly Smith',
        notification: ' commented on your picture',
        commentedPicture: picture,
        timeAgo: '1 week ago',
    }, {
        image: image2,
        name: 'Nathan Peterson',
        notification: ' reacted to your recent post',
        strongText: ' 5 end-game strategies to increase your win rate',
        timeAgo: '2 weeks ago',
    }, {
        image: image3,
        name: 'Anna Kim',
        notification: ' left the group',
        strongText: ' Chess Club',
        timeAgo: '2 weeks ago',
    },
]

const MainBottomProps: React.FC<{ notification: Props }> = ({ notification }) => {
    return (
        <>
            <div className={`${styles.container} 
            ${notification.name === 'Kimberly Smith' ? styles.kimberlyContainer : ''}`}>
                <div className={styles.imageWrapper}>
                    <a href="#">
                        <img className={style.image} src={notification.image} alt="" />
                    </a>
                    <div className={styles.column}>
                        <p className={style.notificationParagraph}>
                            <a href="#" className={style.name}>
                                {notification.name}
                            </a>
                            <span className={style.notificationInfo}>{notification.notification}</span>
                            <a href="#" className={`${style.strongText}
                ${notification.strongText === ' Chess Club' ? styles.chessClubText : ''}`}>
                                {notification.strongText}
                            </a>
                        </p>
                        <p className={style.timeAgo}>{notification.timeAgo}</p>
                    </div>
                </div>
                <a href="#">
                    <img className={style.image} src={notification.commentedPicture} alt="" />
                </a>
            </div>
        </>
    )
}

export { MainBottomProps, notifications }