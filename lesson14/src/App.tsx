import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from '@/auth/ProtectedRoute';
import { Layout } from '@/components/Layout';
import { IndexPage } from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage';
import { MemberWelcomePage } from './pages/MemberWelcomePage';
import InboxScreen from './InboxScreens/InboxScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="velkominn"
          element={
            <ProtectedRoute>
              <MemberWelcomePage />
            </ProtectedRoute>
          }
        />
        <Route path="inbox" element={<InboxScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
