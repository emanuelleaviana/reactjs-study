export default function TemplateExpressions() {
    
    const name = "Emanuelle"

    const data = {
        age: 18,
        job: "Programadora"
    }

    return (
        <div>
            <h1>O meu nome é {name}, eu trabalho como {data.job}! </h1>
        </div>
    )
}