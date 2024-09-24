import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./core/redux/store";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/pages";
import ApiServiceProvider from "../src/services/api/api.service";
import AxiosProvider from "./services/interceptor/interceptor";
import { LoaderProvider } from "./services/loader/loaderContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

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
              <ToastContainer />
            </ApiServiceProvider>
          </BrowserRouter>
        </AxiosProvider>
      </LoaderProvider>
    </Provider>
  </>
);
