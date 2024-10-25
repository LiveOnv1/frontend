import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import ProfileIcon from '../../assets/ProfileIcon.png';

const LeftSidebar = () => {
  return (
    <Container>
      <CategoryCategory>카테고리</CategoryCategory>
      <CategoryContainer>
        <CategoryList CategoryTitle={"프론트엔드"} />
        <CategoryList CategoryTitle={"백엔드"} />
      </CategoryContainer>
      <CategoryBottom>
        <ProfileImg src={ProfileIcon}/>
        <Name>홍길동</Name>
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
  height: calc(100vh - 56px - 98px - 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  overflow: auto;
`;
const CategoryBottom = styled.div`
  width: 240px;
  height: 98px;
  border-top: 1px solid #E4E8EB;
  box-sizing: border-box;
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-left: 24px;
  margin-right: 18px;
`;
const Name = styled.div`
  font-size: 20px;
`;

export default LeftSidebar;
