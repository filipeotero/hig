import React from "react";
import PropTypes from "prop-types";

import PanelBehavior from "./behaviors/PanelBehavior";
import PanelPresenter from "./presenters/PanelPresenter";

export default function Panel(props) {
  const {
    children,
    heading,
    innerRef,
    loading,
    onScroll,
    transitionStatus,
    stylesheet,
    markAllAsReadTitle,
    onClickMarkAllAsRead
  } = props;

  return (
    <PanelBehavior loading={loading} transitionStatus={transitionStatus}>
      {({ listMaxHeight, loadingTransitionState, refListWrapper }) => (
        <PanelPresenter
          heading={heading}
          innerRef={innerRef}
          listMaxHeight={listMaxHeight}
          loadingTransitionState={loadingTransitionState}
          onScroll={onScroll}
          refListWrapper={refListWrapper}
          stylesheet={stylesheet}
          markAllAsReadTitle={markAllAsReadTitle}
          onClickMarkAllAsRead={onClickMarkAllAsRead}
        >
          {children}
        </PanelPresenter>
      )}
    </PanelBehavior>
  );
}

Panel.propTypes = {
  children: PropTypes.node,
  markAllAsReadTitle: PropTypes.string,
  heading: PropTypes.string,
  innerRef: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  onScroll: PropTypes.func,
  onClickMarkAllAsRead: PropTypes.func,
  stylesheet: PropTypes.func,
  transitionStatus: PropTypes.string,
};
