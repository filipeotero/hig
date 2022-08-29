import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { Panel } from "@hig/flyout";
import ProgressRing from "@hig/progress-ring";
import ThemeContext from "@hig/theme-context";
import Typography from "@hig/typography";
import {
  UNMOUNTED,
  EXITED,
  ENTERING,
  ENTERED,
  EXITING,
} from "react-transition-group/Transition";
import Button from "@hig/button"

import stylesheet from "./stylesheet";

export default function PanelPresenter({
  children,
  heading,
  innerRef,
  listMaxHeight,
  loadingTransitionState,
  onScroll,
  refListWrapper,
  stylesheet: customStylesheet,
  markAllAsReadTitle,
  onClickMarkAllAsRead
}) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const styles = stylesheet(
          {
            transitionState: null,
            loadingTransitionState,
            stylesheet: customStylesheet,
          },
          resolvedRoles
        );
        return (
          <Panel innerRef={innerRef}>
            <Typography elementType="header" style={styles.panelTitle}>
              {heading}
            </Typography>
            <section
              className={css(styles.panelContainer)}
              ref={refListWrapper}
              style={{ maxHeight: listMaxHeight }}
            >
              <div role="list" onScroll={onScroll}>
                {children}
              </div>
            </section>
            <footer className={css(styles.notificationsFooter)}>
              <Button
                size="standard"
                title={markAllAsReadTitle}
                onClick={onClickMarkAllAsRead}
                type="secondary"
                target="_blank"
              />
            </footer>
          </Panel>
        );
      }}
    </ThemeContext.Consumer>
  );
}

PanelPresenter.defaultProps = {
  heading: "Notifications",
  markAllAsReadTitle: "Mark all as read"
};

PanelPresenter.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.node,
  innerRef: PropTypes.func.isRequired,
  listMaxHeight: PropTypes.string,
  markAllAsReadTitle: PropTypes.string,
  onClickMarkAllAsRead: PropTypes.func,
  stylesheet: PropTypes.func,
  loadingTransitionState: PropTypes.oneOf([
    UNMOUNTED,
    EXITED,
    ENTERING,
    ENTERED,
    EXITING,
  ]),
  onScroll: PropTypes.func,
  refListWrapper: PropTypes.func,
  stylesheet: PropTypes.func,
};
