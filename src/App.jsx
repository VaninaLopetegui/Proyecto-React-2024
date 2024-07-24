import { ItemListContainer } from './components/ItemListConatiner/ItemListContainer';
import { NavBar} from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Itachi" descripcion="alfombra de naruto" imagen="https://i.pinimg.com/564x/77/7b/ce/777bce7e4073ffa9dacc8b88a5ccafc8.jpg"/>
    </div>
  );
}

export default App;
