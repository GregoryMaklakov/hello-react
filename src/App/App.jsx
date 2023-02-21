import { Notification } from "../components/Notifications";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.container}>
      <Notification type='succes'>Succes</Notification>
      <Notification type='warning'>Warning</Notification>
      <Notification type='error'>Error</Notification>
    </div>
  );
};
