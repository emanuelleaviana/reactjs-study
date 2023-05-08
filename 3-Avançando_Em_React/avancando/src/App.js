import './App.css';
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Roxo", newCar: false, km: 110 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 5432 },
  ];

  const users = [
    { id: 1, name: "Manu", age: 18, job: "Programmer" },
    { id: 2, name: "Vitor", age: 17, job: "Social Midia" },
    { id: 3, name: "Rifane", age: 18, job: "Philosopher" },
  ];

  function showMessage() {
    console.log("Evento do componente pai!")
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name="Manu" />
      {/* Destructuring */}
      <CarDetails brand="Fiat" km={1000} color="Vermelho" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="VW" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="CH" km={500} color="Vermelho" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment propFragment="teste" />

      {/* Children */}
      <Container>
        <p>Este é o conteúdo.</p>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* Challenge */}
      {users.map((user) => (
        <UserDetails
        key={user.id}
        name={user.name}
        age={user.age}
        job={user.job}
        />
      ))}
    </div>
  );
}

export default App;
