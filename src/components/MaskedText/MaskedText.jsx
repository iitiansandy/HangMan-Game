import { getMaskedString } from "./MaskingUtility";

function MaskedText({ text, gussedLetters }) {
    const maskedString = getMaskedString(text, gussedLetters);

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