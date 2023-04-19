import './App.css';
import City from './assets/city.jpg';


function App() {
  return (
    <div className='Conteiner'>
      <div>
       { /* Imagem em public */}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
      { /* Imagem em assets */}
        <img src={City} alt="Cidade" />
      </div>
    </div>
  );
}

export default App;
