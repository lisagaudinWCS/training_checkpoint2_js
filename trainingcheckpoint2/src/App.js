import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import GameDetail from './components/GameDetail';
import GameList from './components/GameList';
import Header from "./components/Header";

function App() {
  return (
    <Router>
    <div className="App">
      <Header name="ReactGame"/>
      <Routes>
        <Route path="/" element={<GameList/>}/>
        <Route path="games/:id" element={<GameDetail/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
