export default function Events() {

    const handleMyEvent = () => {
        console.log('Ativou o evento!');
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Correto!</h1>
        } else {
            return <h1>Errado =(</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicasse?!')}>Oi</button>
            </div>
            {renderSomething(true)}
        </div>
    )
}