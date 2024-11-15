// Original word = the word which is given as input and expected to guess
// Guessed Letters = Set of letters which are guessed by the user already
export function getMaskedString(originalWord, guessedLetters) {
    console.log("guessedletters:", guessedLetters);
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());
    const guessedLetterSet = new Set(guessedLetters);

    const result = originalWord.toUpperCase().split("").map(char => {
        if (guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_";
        }
    });
    return result;
}