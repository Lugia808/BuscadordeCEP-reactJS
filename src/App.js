
import { FiSearch } from 'react-icons/fi'
import './styles.css'


function App() {
  return (
    <div className="container">
      <h2 className="title">Buscador CEP</h2>
      <div className='containerInput'>
        <input type="text"
          placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch"><FiSearch size={25} color='#000' /></button>
      </div>
      <main className='main'>
        <h3>CEP: 8232323</h3>
        <span>Rua teste</span>
        <span>Complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>

    </div>



  );
}

export default App;
