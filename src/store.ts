import { legacy_createStore as createStore } from "redux";
import reducer from "./slice";

export const { getState, dispatch, subscribe } = createStore(reducer);
