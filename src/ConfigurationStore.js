import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Reducer";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return { store };
};
