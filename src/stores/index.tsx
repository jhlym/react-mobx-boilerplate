import React from "react";
import CounterStore from "./samples/CounterStore";
import ThemeStore from "./samples/ThemeStore";

const storesContext = React.createContext({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore()
});

export default storesContext;
