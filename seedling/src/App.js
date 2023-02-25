import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/edit" element={<EditClaim/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
