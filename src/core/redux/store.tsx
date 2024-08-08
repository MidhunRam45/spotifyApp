import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getPreloadedState, saveToLocalStorage } from "./localStorage";
import sidebarSlice from "./sidebarSlice";
import planSlice from "./planSlice";
import scrollSlice from "./scrollSlice";

const combinedReducer = combineReducers({
  sidebar: sidebarSlice,
  plan: planSlice,
  scroll: scrollSlice,
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
