import styled from 'styled-components';
import ButtonWithText from './ButtonWithText';
import expandIcon from '../../assets/CategoryExpandButton.png';

const LeftSidebar = () => {
  return (
    <Container>
      <CategoryCategory>카테고리</CategoryCategory>
      <CategoryList>
        <CategoryItem>
          <CategoryItemTitle>
            프론트엔드
            <CategoryExpandButton>
              <Icon src={expandIcon} alt="expand icon" />
            </CategoryExpandButton>
          </CategoryItemTitle> 
          <ChannelList>
            <ChannelItem>
              #공지
            </ChannelItem>
            <ChannelItem>
              #잡담
            </ChannelItem>
            <ChannelItem>
              + 채널 추가
            </ChannelItem>
          </ChannelList>
        </CategoryItem>
        <CategoryItem>
          <CategoryItemTitle>
            백엔드
            <CategoryExpandButton>
              <Icon src={expandIcon} alt="expand icon" />
            </CategoryExpandButton>
          </CategoryItemTitle>
        </CategoryItem>
      </CategoryList>
      <CategoryBottom>
        {/* 로그인 or 프로필 */}
        <ButtonWithText
          width="192px"
          height="50px"
          backgroundColor="#3081F6"
          color="white"
          fontSize="20px"
          borderRadius="10px"
        >
          로그인
        </ButtonWithText>
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
const CategoryList = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;
const CategoryItem = styled.div`
  margin-bottom: 8px;
`;
const CategoryItemTitle = styled.div`
  width: 188px;
  height: 24px;
  margin-bottom: 2px;
  padding: 8px 4px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #707070;
`;
const CategoryExpandButton = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const ChannelList = styled.div`
  width: 204px;
`;
const ChannelItem = styled.div`
  margin: 0 0 2px 22px;
  height: 40px;
  display: flex;
  align-items: center;
  color: #707070;
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

export default LeftSidebar;
