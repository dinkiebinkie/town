import React, { Fragment } from "react";

import Youtube from "./Youtube";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";

// Map over body chunks we get from state
// from here we render a body piece
// in the body piece we render the type of body it is

const Body = () => (
  <Fragment>
    <Youtube />
    <Instagram />
    {/* <LinkedIn /> */}
  </Fragment>
);

export default Body;
