import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getPreloadedState, saveToLocalStorage } from "./localStorage";

const combinedReducer = combineReducers({
  // sidebar: sidebarSlice,
});

const rootReducer = (state, action) => {
  /**
   * to reset whole app state to initial state
   */
  if (action.type === "login/logout") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPreloadedState(),
});

function onStateChange() {
  saveToLocalStorage(store.getState());
}

store.subscribe(onStateChange);

export default store;
