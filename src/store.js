import { createStore } from "redux";
import * as reducers from "./reducers";
import * as enhancers from "./enhancers";
import * as constants from "./constants";

export default createStore(
  reducers.combined,
  constants.INIT_STATE,
  enhancers.combined
);
