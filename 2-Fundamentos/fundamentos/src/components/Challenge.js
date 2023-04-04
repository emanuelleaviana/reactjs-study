export default function Challenge() {

    let n1 = 2
    let n2 = 3

    const handleSoma = () => {
        let soma = n1 + n2
        console.log(soma);
        
    }

    return (
        <>
            <h1>Os valores são {n1} e {n2}</h1>
            <button onClick={handleSoma}>Some no console!</button>
        </>
    )
}