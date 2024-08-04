import { useEffect } from "react";
import "./App.css";
import Header from "./components/Headers/Header";
import { useTelegram } from "./hooks/useTelegram";
// window.Telegram.Webapp.

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
      <Header></Header>
    </div>
  );
}

export default App;
