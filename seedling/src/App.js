import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthFilter from './components/AuthFilter';
import DashboardContent from './components/dashboard/Dashboard';
import { EditClaim } from './components/Edit/Edit';
import './App.css';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<AuthFilter />}>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/edit" element={<EditClaim/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
