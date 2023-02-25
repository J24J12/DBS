import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthFilter from './components/AuthFilter';
import DashboardContent from './components/dashboard/Dashboard';
import { EditClaim } from './components/Edit/Edit';
import AddPage from './components/Add/Add';
import './App.css';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<AuthFilter />}>
              <Route path="/add" element={<AddPage/>} />
              <Route path="/" element={<DashboardContent />} />
              <Route path="/edit/:id" element={<EditClaim/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
