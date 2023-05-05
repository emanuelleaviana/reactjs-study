import React, { useState } from 'react';

export default function ConditionalRender() {
    const [x] = useState(false);
    
    const [name, setName] = useState("Manu");

    return (
        <div>
            <h1>Isso será exibido</h1>
            {x && <p>Se x for true, sim!</p>}
            <h1>If Ternário</h1>
            {name === "João" ? (
                <div><p>O nome é João</p></div>
            ) : (
                <div><p>Nome não encontrado</p></div>
            )}
            <button onClick={() => setName("João")}>Clica</button>
        </div>
    )
}