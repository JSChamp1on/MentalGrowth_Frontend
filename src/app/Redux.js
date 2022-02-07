// libs
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// redux
import { combineReducers } from "@redux";
import { rootSaga } from "@redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(combineReducers, applyMiddleware(saga));
saga.run(rootSaga);

export const Redux = (props) => <Provider store={store} {...props}/>;