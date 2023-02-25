import logo from './logo.svg';
import './App.css';
import { EditClaim } from './components/Edit/Edit';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
 } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/edit" element={<EditClaim/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
