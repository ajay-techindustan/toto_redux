
import './App.css';
import {Provider } from 'react-redux'
import store from './redux/store'
import Todo3 from './Components/Todo3';

function App() {
  return (
    <>
    <Provider store = {store} >
    <Todo3/>
    </Provider>
    </>
  );
}

export default App;
