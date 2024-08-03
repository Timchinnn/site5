import { useEffect } from "react";
import "./App.css";
// window.Telegram.Webapp.
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      work <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
