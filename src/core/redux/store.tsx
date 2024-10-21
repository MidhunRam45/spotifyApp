// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { getPreloadedState, saveToLocalStorage } from "./localStorage";

// const combinedReducer = combineReducers({
//   // sidebar: sidebarSlice,
// });

// // const rootReducer = (state, action) => {
// //   /**
// //    * to reset whole app state to initial state
// //    */
// //   if (action.type === "login/logout") {
// //     state = undefined;
// //   }

// //   return combinedReducer(state, action);
// // };

// const store = configureStore({
//   reducer: rootReducer,
//   preloadedState: getPreloadedState(),
// });

// function onStateChange() {
//   saveToLocalStorage(store.getState());
// }

// store.subscribe(onStateChange);

// export default store;
// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: accessTokenReducer,
  },
});

export default store;
