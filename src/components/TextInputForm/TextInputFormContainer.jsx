import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submitted", value);
        if (value) {
            navigate(`/play`, { state: { wordSelected: value }} )
        }
    }

    function handleTextInputChange(event) {
        console.log("Text input changes");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/hide button clicked");
        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
        console.log("InputType:", inputType);
    };

    return (
    <TextInputForm
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        />
    )
};

export default TextInputFormContainer;