import { Link } from "react-router-dom";

function Playgame() {
    return (
        <>
            <h1>Play Game</h1>
            <Link to='/start' className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default Playgame;