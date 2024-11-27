import { Link, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButtons/LetterButton";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/wordContext";

function Playgame() {

    // const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams();

    // const { state } = useLocation();

    const { wordList, word } = useContext(WordContext);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (word?.toUpperCase().includes(letter)) {
            console.log("Correct");
        } else {
            console.log("Wrong");
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, letter])
    }

    return (
        <>
            <h1>Play Game </h1>
            {wordList.map(wordObj => <li key={wordObj.id}>{wordObj.wordValue}</li> )}
            <MaskedText text={word} gussedLetters={guessedLetters} />
            <div>
                <LetterButton text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
            </div>

            <div>
                <HangMan step={step} />
            </div>
            <Link to='/' >Home</Link>
            <Link to='/start' className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default Playgame;