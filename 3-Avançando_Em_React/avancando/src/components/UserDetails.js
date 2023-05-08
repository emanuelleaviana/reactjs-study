import React from "react";

export default function UserDetails({ name, age, job }) {
    return (
        <div>
            <h2>Listagem de trabalhadores!</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {job}</li>
            </ul>
            {age >= 18 ? (
                <p>Pode tirar habilitação</p>
            ) : (
                <p>É menor de idade</p>)}

        </div>
    )
}