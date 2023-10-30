
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'
import api from './services/api';

const zipCodeMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{5})(\d)/, '$1-$2')
  return value
}


function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');
  //input chama o valor do item
  //setInput "seta" um valor novo

  const handleZipCode = (event) => {
    const { value } = event.target;
    const formattedValue = zipCodeMask(value);
    setInput(formattedValue)
  }

  async function handleSearch() {
    //01001000/json/

    if (input === '') {
      alert('envie algum CEP')
      return
    }

    try {
      const response = await api.get(`${input}/json/`)
      console.log(response.data)
      setCep(response.data)
      setInput('')
    }
    catch {
      alert('erro ao buscar')
      setInput('');
    }

  }

  return (
    <div className="container">
      <h2 className="title">Buscador CEP</h2>
      <div className='containerInput'>
        <input
          type="text"
          placeholder="Digite seu CEP..."
          id="cepText"
          value={input}
          onChange={handleZipCode} // Use apenas o evento onChange que chama handleZipCode
          maxLength={9}
        />



        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#000' />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (<main className='main'>
        <h3 id='cepv'>CEP: {cep.cep}</h3>
        <span>Rua {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade} - {cep.uf}</span>
      </main>)}




    </div>



  );
}

export default App;
