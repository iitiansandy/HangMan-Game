import { Route, Routes } from "react-router-dom";
import TextInputForm from "./components/TextInputForm/TextInputForm"
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import StartGame from "./pages/StartGame";
import Playgame from "./pages/PlayGame";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
        <Route path="/start" element={<StartGame />}/>
        <Route path="/play" element={<Playgame />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
  )
}


export default App;
