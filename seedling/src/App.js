import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { EditClaim } from './components/Edit/Edit';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/" element={<EditClaim/>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
