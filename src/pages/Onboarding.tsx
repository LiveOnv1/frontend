import styled from 'styled-components';
import AuthForm from '../components/common/AuthForm';
import AuthLayout from '../components/common/AuthLayout';
import Button from '../components/common/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <AuthLayout title="">
      <AuthForm mode="onboarding">
        <GotoSignup to="/signup">
          <Button
            type="submit"
            width="352px"
            height="48px"
            backgroundColor="#3081F6"
            color="white"
            fontSize="16px"
            borderRadius="10px"
            marginTop="14px"
          >
            시작하기
          </Button>      
        </GotoSignup>
        <GotoLogin to="/login">
          계정이 이미 있습니다.
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
const GotoSignup = styled(Link)`
  color: #3081F6;
  margin-top: 34px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export default Onboarding;
