import React, { useState } from 'react';

function randomizer(pattern, size) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@#$%&*()_;.,?:{^}[~]";
    let result = "";
    for (var i = 0; i < size; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    return result;
}

function Keygen() {
    const [result, setResult] = useState();
    const [size, setSize] = useState(12);
    let pattern = "XXXXXXXX";

    return (
        <>

        <input type="text" value={result} />
            <button onClick={() => setResult(randomizer(pattern, size))}>Generate new pass</button>

            <div>
    <h3>Options</h3>
    <input type="range" min="8" max="26" defaultValue='12' onChange={(e) => setSize(e.target.value)} /> <span>{size}</span>
    <br/>
    <input type="checkbox" id='' />
</div>
        </>
    )
}

export default Keygen