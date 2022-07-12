import HomePage from "./views/Homepage";
import InfoUser from "./views/InfoUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<InfoUser />} />
      </Routes>
    </div>
  );
}

export default App;
