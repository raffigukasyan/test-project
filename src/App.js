import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Modal from './Components/Modal';

function App() {

  const [items, setItems] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    axios.get("https://63eb2da0fb6b6b7cf7d92144.mockapi.io/images").then((res) => setItems(res.data));
  }, [])


  const OpenModal = (element) => {
    setActiveItems(element);
    setModalActive(true);
  }

  return (
    <div className='App'>
      <Header />
      <div className="menu">
        
        {items.map((item) => {
          return <div className="menu__block">
            <img src={item.imageUrl} onClick={() => OpenModal(item)}/>
            <p>{item.id}</p>
          </div>
        })}
      </div>
      <Modal active={modalActive} setActive={setModalActive} activeElement={activeItems}/>
    </div>
  );
}

export default App;
