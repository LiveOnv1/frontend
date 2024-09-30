// src/pages/Login.tsx
import styled from 'styled-components';
import AuthForm from '../components/common/AuthForm';
import AuthLayout from '../components/common/AuthLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const URL = 'http://3.39.74.178:8080';

  const handleSignup = async (id: string, password: string) => {
    try {
      const response = await axios.post(URL + '/api/register', {
        personId: id,
        personPassword: password,
      });

      console.log("Regi successful:", response.data);
      localStorage.setItem('token', response.data.token);
      window.location.href = "/";
      
    } catch (error) {
      console.error("Regi failed", error);
      alert('Regi failed. Please try again.');
    }
  };

  return (
    <AuthLayout title="회원가입">
      <AuthForm mode="signup" onAuthSubmit={handleSignup}>
        <GotoLogin to="/login">
          로그인 하러가기
        </GotoLogin>
      </AuthForm>
    </AuthLayout>
  );
}

const GotoLogin = styled(Link)`
  color: #3081F6;
  margin-top: 34px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export default Signup;
