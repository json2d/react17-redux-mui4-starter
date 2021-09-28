import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";

export const middleware = applyMiddleware(thunk);

const composeEnhancers =
  process.env.NODE_ENV !== "production" && typeof window === "object"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const combined = composeEnhancers(middleware);
