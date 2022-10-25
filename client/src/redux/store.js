import { createStore } from "@reduxjs/toolkit";
import reducer from "../utils/reducers";

//create our store using configureStore (createStore deprecated)
const store = createStore(reducer);
//export or store
export default store;
