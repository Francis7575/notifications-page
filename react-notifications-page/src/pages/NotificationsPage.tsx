import Header from '../components/Header/Header';
import MainTop from '../components/MainTop/MainTop';
import { useState } from 'react';
import styles from '../components/Header/Header.module.css'

const NotificationsPage = () => {
    const [clickedContainers, setClickedContainers] = useState<boolean[]>(Array(3).fill(false));
    const [hideBackgroundsBtn, setHideBackgroundsBtn] = useState<boolean>(false);
    const [hideSVGsBtn, setHideSVGsBtn] = useState<boolean>(false);

    const handleMarkAllAsRead = () => {
        setClickedContainers(Array(3).fill(true));
        setHideBackgroundsBtn(true);
        setHideSVGsBtn(true);
    }

    const handleContainerClicked = (index: number) => {
        if (index !== 3 && !clickedContainers[index]) {
            setClickedContainers(prevState => {
                const updatedState = [...prevState];
                updatedState[index] = true;
                return updatedState;
            });
        }
    }
    // filter() is used here to count the number of false values in the clickedContainers array.
    const numberOfNotifications = clickedContainers.filter(clicked => !clicked).length;

    return (
        <div className={styles.wrapper}>
            <Header onMarkAllAsRead={handleMarkAllAsRead} numberOfNotifications={numberOfNotifications} />
            <MainTop
                onContainerClicked={handleContainerClicked}
                hideBackgroundsBtn={hideBackgroundsBtn}
                hideSVGsBtn={hideSVGsBtn}
                clickedContainers={clickedContainers}
            />
        </div>
    )
}

export default NotificationsPage;
