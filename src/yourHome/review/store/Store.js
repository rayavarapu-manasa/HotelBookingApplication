import { legacy_createStore } from "redux";
import myReducer from "../reducer/myReducer";

let store = legacy_createStore(myReducer);

export default store;