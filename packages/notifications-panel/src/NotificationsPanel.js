import React from "react";
import Panel from "./Panel";
import Notification from "./Notification";
import EmptyStatePresenter from "./presenters/EmptyStatePresenter";
import PropTypes from "prop-types";
import NotificationFlyoutBehavior from "./behaviors/NotificationFlyoutBehavior";
import { combineEventHandlers } from "@hig/utils";

/** @typedef {import("./behaviors/parseNotifications").ParsedNotification} ParsedNotification */

/**
 * @param {Object} payload
 * @returns {function(ParsedNotification): JSX}
 */
function CreateNotificationRenderer({ dismissNotification }) {
  /* eslint-disable-next-line react/prop-types */
  return function renderNotification(notification) {
    const {
      content,
      dismissButtonTitle,
      featured,
      id,
      image,
      key,
      onDismiss,
      onNotificationClick,
      showDismissButton,
      stylesheet,
      timestamp,
      type,
      unread,
      ...otherProps
    } = notification;
    const { className } = otherProps;

    const handleDismiss = combineEventHandlers(onDismiss, () =>
      dismissNotification(id)
    );

    return (
      <Notification
        className={className}
        dismissButtonTitle={dismissButtonTitle}
        featured={featured}
        image={image}
        key={key}
        onDismiss={handleDismiss}
        onNotificationClick={onNotificationClick}
        showDismissButton={showDismissButton}
        stylesheet={stylesheet}
        timestamp={timestamp}
        type={type}
        unread={unread}
      >
        {content}
      </Notification>
    );
  };
}

export default function NotificationsPanel(props) {

  const {
    alterCoordinates,
    anchorPoint,
    children,
    emptyMessage,
    heading,
    indicatorTitle,
    loading,
    onClick,
    onClickOutside,
    onScroll,
    open,
    markAllAsReadTitle,
    onClickMarkAllAsRead,
    notifications: notificationsInput = children,
    unreadCount: controlledUnreadCount,
    stylesheet,
    ...otherProps
  } = props;
  const { className } = otherProps;

  return (
    <NotificationFlyoutBehavior
      unreadCount={controlledUnreadCount}
      notifications={notificationsInput}
    >
      {({
        dismissNotification,
        handleClose,
        notifications,
        showUnreadCount,
        unreadCount
      }) => (
        <Panel
          innerRef={() => { }}
          markAllAsReadTitle={markAllAsReadTitle}
          onClickMarkAllAsRead={onClickMarkAllAsRead}
          heading={heading}>
          {notifications.length == 0 ? (
            <EmptyStatePresenter message={emptyMessage} stylesheet={stylesheet} />
          ) : (
            notifications.map(
              CreateNotificationRenderer({ dismissNotification })
            )
          )}
        </Panel>
      )}
    </NotificationFlyoutBehavior>
  )
}

NotificationsPanel.propTypes = {
  /** Manipulate flyout coordinates before each render */
  alterCoordinates: PropTypes.func,
  /** Rendered notifications. It can contain one or more <Notification /> components. */
  children: PropTypes.node,
  /** The message displayed when there are no notifications */
  emptyMessage: PropTypes.string,
  /** Flyout panel heading */
  heading: PropTypes.string,
  /** Indicator button title */
  indicatorTitle: PropTypes.string,
  /** Determines whether the loading animation is shown */
  loading: PropTypes.bool,
  /**
   * Rendered notifications.
   * It takes precedent over `children`, and accepts an array
   * containing any combination of <Notification /> components
   * and Notification models
   */
  notifications: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.object])
  ),
  /** Function called when the flyout is opened */
  onClick: PropTypes.func,
  /** Function called when the flyout is open, and a click event occurs outside the flyout */
  onClickOutside: PropTypes.func,
  /** Function called when the flyout panel is scrolled */
  onScroll: PropTypes.func,
  /** When provided, it overrides the flyout's open state */
  open: PropTypes.bool,
  /** Function to modify the component's styles */
  stylesheet: PropTypes.func,
  /** When provided, it overrides the derived unread notification count */
  unreadCount: PropTypes.number,
  /** The title related to the 'Mark all as read' button */
  markAllAsReadTitle: PropTypes.string,
  /** Function called when the 'Mark all as read' button */
  onClickMarkAllAsRead: PropTypes.func
};