import { useEffect } from 'react';
import './App.css';
import ShopComponent from './components/ShopComponent';

function App() {
  useEffect (() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
    });
  },[])
  return (
    <div className="App">
     <ShopComponent/>
    </div>
  );
}

export default App;
