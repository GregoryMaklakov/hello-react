import { Notification } from '../components/Notifications'
import styles from './App.module.css';
import { IconError, IconWarning, IconSuccess  } from '../components/icons';

export const App = () => {
  return (
    <div className={styles.container}>
      <Notification color="var(--warning-color)" Icon={IconWarning} label="Notification" className={styles.notifBtn} />
      <Notification color="var(--success-color)" Icon={IconSuccess} label="Notification" className={styles.notifBtn} />
      <Notification color="var(--error-color)" Icon={IconError} label="Notification" className={styles.notifBtn} />
    </div>
  )
}

