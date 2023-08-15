import { useState } from "react";

function Hooks() {
    const [a, setA] = useState(1);

    const [text, setText] = useState('');

    return (<div>
        Hooks
        {/* <button onClick={() => {
            setA(a + 1);
        }}></button> */}
        {text}
        <input type="text" value={text} onChange={() => {
            console.log(event.target.value);
            setText(event.target.value);
        }}/>
    </div>)
}

export default Hooks;