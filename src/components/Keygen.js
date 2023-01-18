import styles from './Keygen.module.css'
import React, { useState } from 'react';

function randomizer(size, uppercase, lowercase, special, numbers) {
    let characters = '';
    if (uppercase == true) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
    }
    if (lowercase == true) {
        characters += 'abcdefghijklmnopqrstuvxwyz';
    }
    if (numbers == true) {
        characters += '0123456789';
    }
    if (special == true) {
        characters += '!@#$%&*()_;.,?:{^}[~]';
    }


    // const characters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@#$%&*()_;.,?:{^}[~]";
    let result = "";
    for (var i = 0; i < size; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function Keygen() {
    const [result, setResult] = useState();
    const [size, setSize] = useState(12);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [special, setSpecial] = useState(true);
    const [numbers, setNumbers] = useState(true);

    return (
        <>

            <div>
                <input className={styles.result} type="text" value={result} />
                <button className={styles.generateButton} onClick={() => setResult(randomizer(size, uppercase, lowercase, special, numbers))}>Generate new pass</button>
            </div>
            <div>
                <h3>Options</h3>
                <div>
                    <label>Password length</label>
                    <input type="range" min="8" max="26" defaultValue='12' onChange={(e) => setSize(e.target.value)} /> <span>{size}</span>
                </div>

                <div>
                    <label>Uppercase</label>
                    <input type="checkbox" defaultChecked onChange={(e) => setUppercase(e.target.checked)} />
                </div>
                <div>
                    <label>Lowercase</label>
                    <input type="checkbox" defaultChecked onChange={(e) => setLowercase(e.target.checked)} />
                </div>
                <div>
                    <label>Numbers</label>
                    <input type="checkbox" defaultChecked onChange={(e) => setNumbers(e.target.checked)} />
                </div>
                <div>
                    <label>Special characters</label>
                    <input type="checkbox" defaultChecked onChange={(e) => setSpecial(e.target.checked)} />
                </div>
            </div>
        </>
    )
}

export default Keygen