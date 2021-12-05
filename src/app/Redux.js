// libs
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// redux
import { combineReducers } from "@redux";

const store = createStore(combineReducers, applyMiddleware(thunk));

export const Redux = (props) => <Provider store={store} {...props}/>;