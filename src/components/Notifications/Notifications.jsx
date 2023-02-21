import clsx from "clsx";
import PropTypes from "prop-types"; // ES6
import IconSuccess from "../../assets/svg/success.svg";
import IconWarning from "../../assets/svg/warning.svg";
import IconError from "../../assets/svg/error.svg";
import styles from "./Notifications.module.css";


const icons = {
  succes: IconSuccess,
  warning: IconWarning,
  error: IconError,
};

export const Notification = ({ className, type, children }) => {
  return (
    <button className={clsx(styles.button, styles[type], className)}>
        <img className={styles.icon} src={icons[type]} alt={type}/>
      <span className={styles.label}>{children}</span>
    </button>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(["succes", "warning", "error"]).isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
