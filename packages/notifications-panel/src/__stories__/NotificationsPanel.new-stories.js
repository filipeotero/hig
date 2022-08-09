import React from "react";
import NotificationsPanel from "../NotificationsPanel";

export default {
  title: "NotificationsPanel",
  component: NotificationsPanel
}

const clickButton = () => { console.log("button clicked") }

export const NotsPanel = () => <NotificationsPanel onClickMarkAllAsRead={clickButton}  notifications={[
  {
    id: 1,
    featured: true,
    unread: true,
    image: <img width={40} height={40} src="https://ps.w.org/kama-thumbnail/assets/icon-256x256.png"></img>,
    content: <p>Something happened</p>
  },
  {
    id: 2,
    featured: true,
    content: "Hello world"
  }
]}/>