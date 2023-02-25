import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardContent from './components/dashboard/Dashboard';
import { EditClaim } from './components/Edit/Edit';
import AddPage from './components/Add/Add';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<DashboardContent />} />
            <Route path="/edit" element={<EditClaim/>} />
            <Route path="/add" element={<AddPage/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
