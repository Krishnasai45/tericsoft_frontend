import logo from './logo.svg';
import './App.css';
import { Register } from './components/pages/Register';
import { MovieRoute } from './components/routes/MovieRoute';
import { AddMovie } from './components/pages/AddMovie';

function App() {
  return (
    <div className="App">
        <h1>Welcome to movies app</h1>
        <MovieRoute/>
    </div>
  );
}

export default App;
