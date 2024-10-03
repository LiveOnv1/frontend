import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const LeftSidebar = () => {
  return (
    <Container>
      <CategoryCategory>카테고리</CategoryCategory>
      <CategoryContainer>
        <CategoryList ChannelTitle={"프론트엔드"} />
        <CategoryList ChannelTitle={"백엔드"} />
      </CategoryContainer>
      <CategoryBottom>
        {/* 로그인 or 프로필 */}
        <LoginButton to="/login">
          로그인
        </LoginButton>
      </CategoryBottom>
    </Container>
  );
}

const Container = styled.div`
  width: 240px;
  height: 100vh;
  border-right: 1px solid #E4E8EB;
  box-sizing: border-box;
  position: fixed;
`;
const CategoryCategory = styled.div`
  font-size: 24px;
  margin: 24px 0 0 24px;
  color: #707070;
`;
const CategoryContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;
const CategoryBottom = styled.div`
  width: 240px;
  height: 98px;
  border-top: 1px solid #E4E8EB;
  box-sizing: border-box;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginButton = styled(Link)`
  width: 192px;
  height: 50px;
  background-color: #3081F6;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
  border: none;
`;

export default LeftSidebar;
