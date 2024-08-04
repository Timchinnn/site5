import { useEffect } from "react";
import "./App.css";
// window.Telegram.Webapp.
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App">work</div>;
}

export default App;
