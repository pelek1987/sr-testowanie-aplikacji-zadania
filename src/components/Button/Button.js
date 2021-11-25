import {useState} from "react";

function Button({ label = 'OK' }) {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <button onClick={handleClick}>
            { label } <span>{counter}</span>
        </button>
    );
}

export default Button;
