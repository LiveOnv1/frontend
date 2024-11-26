import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from '../../store/store';

const Logout: React.FC = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const URL = 'https://capserver.link';

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(`${URL}/api/logout`);
        localStorage.removeItem('personId');
        setIsLoggedIn(false);
      } catch (error) {
        console.error("Logout failed", error);
      }
    };
    logout();
  }, [setIsLoggedIn]);

  return !isLoggedIn ? <Navigate to="/" /> : null;
};

export default Logout;
