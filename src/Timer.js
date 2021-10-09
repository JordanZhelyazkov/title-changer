import { useState, useEffect } from "react";

function Timer() {

    let [seconds, setCount] = useState(1);
    
    useEffect(() => {
       document.title = `Count (${seconds})`
    }, [seconds]);


    return (
        <button onClick={() => setCount(seconds + 1)} > Count ({seconds})</button>
    )

    }
    export default Timer