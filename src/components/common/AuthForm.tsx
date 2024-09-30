import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onAuthSubmit: (id: string, password: string, name?: string) => void;
  children?: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onAuthSubmit, children }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup') {
      onAuthSubmit(id, password, name);
    } else {
      onAuthSubmit(id, password);
    }
  };

  return (
    <Form mode={mode} onSubmit={handleFormSubmit}>
      <Input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="아이디"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        required
      />
      {mode === 'signup' && (
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          required
        />
      )}
      <Button
        type="submit"
        width="352px"
        height="48px"
        backgroundColor="#3081F6"
        color="white"
        fontSize="20px"
        borderRadius="10px"
        marginTop="14px"
      >
        {mode === 'signup' ? '회원 가입' : '로그인'}
      </Button>
      {children}
    </Form>
  );
};

const Form = styled.form<{ mode: 'login' | 'signup' }>`
  width: 400px;
  height: ${({ mode }) => (mode === 'signup' ? '406px' : '345px')}; /* 회원가입 시 높이 변경 */
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
`;

const Input = styled.input`
  width: 352px;
  height: 48px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 0 18px;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    outline-color: #3081f6;
  }
`;

export default AuthForm;
