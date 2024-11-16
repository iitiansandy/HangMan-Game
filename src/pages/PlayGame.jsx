import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButton from "../components/LetterButtons/LetterButton";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";

function Playgame() {

    // const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams();

    const { state } = useLocation();
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if (state.wordSelected.toUpperCase().includes(letter)) {
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
            <MaskedText text={state.wordSelected} gussedLetters={guessedLetters} />
            <div>
                <LetterButton text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
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