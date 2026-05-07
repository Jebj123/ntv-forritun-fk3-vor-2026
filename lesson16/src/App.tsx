import './App.css';
import { Layout } from '@/components/Layout';
import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MembersPage from './pages/MembersPage';
import { ProtectedRoute } from './auth/protectedRoute';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="members" element={
          <ProtectedRoute>
            <MembersPage />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;
