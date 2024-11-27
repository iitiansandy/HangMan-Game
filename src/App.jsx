import { Route, Routes } from "react-router-dom";
import TextInputForm from "./components/TextInputForm/TextInputForm"
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import StartGame from "./pages/StartGame";
import Playgame from "./pages/PlayGame";
import Home from "./pages/Home";
import { WordContext } from './context/wordContext.js';
import { useState } from "react";

function App() {

  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');

  return (
    <WordContext.Provider value={{ wordList, setWordList, word, setWord }}>
      <Routes>
        <Route path="/start" element={<StartGame />}/>
        <Route path="/play" element={<Playgame />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </WordContext.Provider>
  )
}


export default App;
