# Notifications Panel

The notifications panel provides information and warnings that products may recover from without user involvement. It is meant to be displayed in a flyout as a list of notifications. 

## Getting started

```bash
yarn add @hig/notifications-panel @hig/theme-context @hig/theme-data
```

## Import the component

```js
import NotificationsPanel, { Notification } from "@hig/notifications-panel";
```

## Basic usage

```jsx
<NotificationsPanel>
  <Notification>
    <p>Your subscription expires May 5</p>
  </Notification>
</NotificationsPanel>
```

## Advanced usage

```jsx
import NotificationsPanel, { anchorPoints } from "@hig/notifications-panel";
import Timestamp from "@hig/timestamp";

<NotificationsPanel
  open
  heading="Alerts"
  indicatorTitle="View application alerts"
  notifications={[
    {
      id: "unique-id",
      featured: true,
      unread: true,
      timestamp: <Timestamp timestamp="2018-08-20T20:24:50.333Z" />,
      content: <p>Something happened</p>
    },
    {
      content: "Hello world"
    }
  ]}
/>
```
