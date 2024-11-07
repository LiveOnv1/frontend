import styled from 'styled-components';
import AuthForm from '../components/common/AuthForm';
import AuthLayout from '../components/common/AuthLayout';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/store';

const Login = () => {
  const URL = 'http://3.39.74.178:8080';
  const navigate = useNavigate();
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  const handleLogin = async (id: string, password: string) => {
    
    try {
      const response = await axios.post(URL + '/api/login', {
        personId: id,
        personPassword: password,
      });

      console.log("Login successful:", response.data);
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      navigate('/home');

    } catch (error) {
      console.error("Login failed", error);
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <AuthLayout title="로그인">
      <AuthForm mode="login" onAuthSubmit={handleLogin}>
        <GotoSignup to="/signup">
          아직 라이브온 회원이 아니신가요?
        </GotoSignup>
      </AuthForm>
    </AuthLayout>
  );
}

const GotoSignup = styled(Link)`
  color: #3081F6;
  margin-top: 34px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export default Login;
