import React from "react";
import { observer } from "mobx-react";
import useStores from "./hooks/useStores";

export const Counter = observer(() => {
  const { counterStore } = useStores();

  return (
    <>
      <div>{counterStore.count}</div>
      <button onClick={() => counterStore.increment()}>++</button>
      <button onClick={() => counterStore.decrement()}>--</button>
    </>
  );
});

export const ThemeToggler = observer(() => {
  const { themeStore } = useStores();

  return (
    <>
      <div>{themeStore.theme}</div>
      <button onClick={() => themeStore.setTheme("light")}>
        set theme: light
      </button>
      <button onClick={() => themeStore.setTheme("dark")}>
        set theme: dark
      </button>
    </>
  );
});

const App = () => (
  <main>
    <Counter />
    <ThemeToggler />
  </main>
);

export default App;
