
const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
function LetterButton({ text, guessedLetters, onLetterClick }) {

    const originalLetter = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function (letter) {
        if (guessedLettersSet.has(letter)) {
            return `${originalLetter.has(letter) ? 'bg-green-500': 'bg-red-500'}`
        } else {
            return 'bg-blue-500';
        }
    };
    

    function handleLetterClick(event) {
        const charOfTheLetter = event.target.value;
        onLetterClick?.(charOfTheLetter)
    }

    const buttons = ALPHABETS.map(letter => {
        return (
            <button 
                key={`button-${letter}`}
                value={letter}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
                >
                {letter}
            </button>
        )
    })

    return (
        <>
            {buttons}
        </>
    )
};

export default LetterButton;