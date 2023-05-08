import React from "react";

export default function Container({ children }) {
    return (
        <div>
            <h2>Este é o título do Conteiner.</h2>
            {children}
        </div>
    )
}