import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function Playgame() {

    // const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const { text } = useParams();

    const { state } = useLocation();

    return (
        <>
            <h1>Play Game {state.wordSelected} </h1>
            <MaskedText inputText={state.wordSelected} gussedLetters={['H', 'M', 'E']} />
            <Link to='/start' className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default Playgame;