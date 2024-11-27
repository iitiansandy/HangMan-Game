import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/wordContext";

function Home() {
    const { setWordList, setWord } = useContext(WordContext);

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        setWordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);
    };

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <>
            < Link to='/play'>
                <Button text="Single Player Game" />
            </Link>
            <br />
            <div className="mt-4">
                < Link to='/start'>
                    <Button text="Multi Player Game" styleType="secondary"/>
                </Link>
            </div>

        </>
    )
}

export default Home;