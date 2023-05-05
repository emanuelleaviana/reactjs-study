import {React, useState} from 'react';

export default function ManageData() {

    const [number, setNumber] = useState(15);

    return (
        <div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar variável</button>
            </div>
        </div>
    )
}