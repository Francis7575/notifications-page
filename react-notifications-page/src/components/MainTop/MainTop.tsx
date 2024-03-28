import styles from './MainTop.module.css';
import { MainTopProps, notifications } from './MainTopProps';
import MainBottom from '../MainBottom/MainBottom';

type Props = {
    onContainerClicked: (index: number) => void;
    hideBackgroundsBtn: boolean;
    hideSVGsBtn: boolean;
    clickedContainers: boolean[];
}

const MainTop = ({ onContainerClicked, hideBackgroundsBtn, hideSVGsBtn, clickedContainers }: Props) => {
    return (
        <main>
            <section className={styles.section}>
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        className={`${styles.containerBackground}
                            ${index === notifications.length - 1 ? styles.lastContainer : ''} 
                            ${index < 3 && (hideBackgroundsBtn || clickedContainers[index]) ? styles.hidden : ''}`}
                        onClick={() => onContainerClicked(index)}>
                        <MainTopProps
                            notification={notification}
                            iconVisibility={index < 3 && (!hideSVGsBtn && !clickedContainers[index])}
                        />
                    </div>
                ))}
            </section>
            <MainBottom />
        </main>
    );
}

export default MainTop;
