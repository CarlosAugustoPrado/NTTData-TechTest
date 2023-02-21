import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import "./index.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <SearchForm />
    <Footer />
  </Provider>
);
