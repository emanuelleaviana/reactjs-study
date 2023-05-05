import React from 'react';
import { useState } from 'react';

export default function ListRender() {
    const [list] = useState(["Emanuelle", "Vitor", "Rifane"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Celso", age: 22},
        {id: 3, name: "Mary", age: 15},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUser) => {
            return prevUser.filter((user) => randomNumber !== user.id)
        })
    }
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((users) => (
                    <li key={users.id}>{users.name} - {users.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random Person</button>
        </div>
    )

}
