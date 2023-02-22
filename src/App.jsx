import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Welcome from "./containers/Welcome/Welcome";
import GameList from "./containers/GameList/GameList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/games" element={<GameList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
