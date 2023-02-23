import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Welcome from "./containers/Welcome/Welcome";
import GameList from "./containers/GameList/GameList";
import GameDetail from "./containers/GameDetail/GameDetail";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
