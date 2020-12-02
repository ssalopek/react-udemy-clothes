import React from "react";
/*withRouter will pass updated match, location, 
and history props to the wrapped component whenever it renders*/
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

/*HISTORY -> library lets you easily manage session history anywhere JavaScript runs 
  MATCH -> object contains information about how a <Route path> matched the URL*/
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        /*{{ --> using CSS object when second { is used(nested), than u have access to CSS property */
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
