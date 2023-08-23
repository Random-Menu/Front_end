import './App.css';
import Main from './page/main';
import Game from './page/game';
import Up from './page/up';
import { BrowserRouter ,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path ='/' element= {<Main/>}></Route>
        <Route path ='/game' element= {<Game/>}></Route>
        <Route path ='/up' element= {<Up/>}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
