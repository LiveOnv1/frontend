import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import OnboardingPage from './pages/Onboarding';
import Logout from './components/common/Logout';
import { useStore } from './store/store';

const App: React.FC = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <OnboardingPage />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <SignupPage />} />
        <Route path="/logout" element={isLoggedIn ? <Logout /> : <Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
