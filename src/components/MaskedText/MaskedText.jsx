import { getMaskedString } from "./MaskingUtility";

function MaskedText({ inputText, gussedLetters }) {
    const maskedString = getMaskedString(inputText, gussedLetters);

    return (
        <>
            {maskedString.map( (char, index) => {
                return (
                    <span key={index} className="mx-1">
                        {char}
                    </span>
                )
            })}
        </>
    )
};

export default MaskedText;