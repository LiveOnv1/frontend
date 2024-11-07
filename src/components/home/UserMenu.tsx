import styled, {keyframes} from 'styled-components';
import ProfileIcon from '../../assets/ProfileIcon.png';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const UserMenu = () => {
  return(
    <Container>
      <ProfileImg src={ProfileIcon}/>
      <UserName>홍길동</UserName>
      <LogoutButton>
        <LogoutText to="/logout">로그아웃</LogoutText>
      </LogoutButton>
    </Container>
  );
}

const Container = styled.div`
  width: 270px;
  height: 280px;  
  position: fixed;
  z-index: 1000;
  bottom: 0;
  margin: 0 0 110px 24px;
  background-color: #545474;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  animation: ${fadeIn} 0.2s ease-out;
`;
const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-top: 24px;
  margin-left: 32px;
  &:hover{
      cursor: pointer;
      opacity: 85%;
  }
`;
const UserName = styled.div`
  width: auto;
  height: 40px;
  font-size: 36px;
  color: white;
  margin-top 6px;
  margin-left: 32px;
`;
const LogoutButton = styled.div`
  width: 206px;
  height: 46px;
  background-color: #6E6E92;
  margin-left: 32px;
  margin-top: 46px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoutText = styled(Link)`
  width: 186px;
  height: 36px;
  border-radius: 5px;
  color: #DBDBDB;
  padding-left: 10px;
  display:flex;
  align-items: center;
  text-decoration: none;
  &:hover{
    cursor: pointer;
    background-color: #8080A0;
    color: #EDEDED;
  }
`;

export default UserMenu;