import { useEffect } from "react";
import "./App.css";
import Header from "./components/Headers/Header";
// window.Telegram.Webapp.
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
