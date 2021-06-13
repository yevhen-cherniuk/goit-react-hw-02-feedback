import React from "react";

import style from "./Notification.module.css";

const Notification = ({ message }) => (
  <p className={style.description}>{message}</p>
);

export default Notification;