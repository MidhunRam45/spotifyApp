import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./core/redux/store";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/pages";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";
import "./assets/icons/feather/css/iconfont.css";
import "./assets/icons/fontawesome/css/fontawesome.min.css";
import "./assets/icons/fontawesome/css/all.min.css";
import ApiServiceProvider from '../src/services/api/api.service'
import AxiosProvider from "./services/interceptor/interceptor";
import { LoaderProvider } from "./services/loader/loaderContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <LoaderProvider>
      <AxiosProvider>
      <BrowserRouter>
      <ApiServiceProvider>
      <Pages />
      </ApiServiceProvider>
        
      </BrowserRouter>
      </AxiosProvider>
      </LoaderProvider>
    </Provider>
  </>
);
