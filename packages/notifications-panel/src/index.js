import Image from "./presenters/ImagePresenter";
import NotificationsPanel from "./NotificationsPanel";
import Notification from "./Notification";

NotificationsPanel.Image = Image;
NotificationsPanel.Notification = Notification;

export { NotificationsPanel as default, Image, Notification };
export { types, AVAILABLE_TYPES } from "./types";
