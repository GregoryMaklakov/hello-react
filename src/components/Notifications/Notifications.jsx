import clsx from "clsx";
import PropTypes from "prop-types"; // ES6

import {IconSuccess, IconWarning, IconError} from '../icons';

// import IconSuccess from "../../assets/svg/success.svg";
// import IconWarning from "../../assets/svg/warning.svg";
// import IconError from "../../assets/svg/error.svg";
import styles from "./Notifications.module.css";

const icons = {
  succes: IconSuccess,
  warning: IconWarning,
  error: IconError,
};

const Icon = icons[type];  

export const Notification = ({ className, type, children, Icon }) => {
  const onClick = () => {
    alert("Будь який текст =)");
  };

  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[type], className)}
    >
        <Icon className={styles.icon}></Icon>

      {/* <img className={styles.icon} src={icons[type]} alt={type} /> */}
      <span className={styles.label}>{children}</span>
    </button>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(["succes", "warning", "error"]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
