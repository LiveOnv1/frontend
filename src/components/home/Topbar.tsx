import { useStore } from '../../store/store';
import styled from 'styled-components';
import searchIcon from '../../assets/ChatSearchButton.png';

const Topbar = () => {
  const selectedChannel = useStore((state) => state.selectedChannel); 

  return (
    <Container>
      <ChannelName>{selectedChannel ? `#${selectedChannel}` : ''}</ChannelName>
      <ChatSearch>
        <ChatSearchInput type="text" placeholder="검색" />
        <ChatSearchBtnWrapper>
          <Icon src={searchIcon} alt="search icon" />
        </ChatSearchBtnWrapper>
      </ChatSearch>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 76px;
  border-bottom: 1px solid #E4E8EB;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  align-items: center;
`;
const ChannelName = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-left: 74px;
`;
const ChatSearch = styled.div`
  width: 226px;
  height: 36px;
  margin-right: 74px;
  right: 0;
  position: fixed;
  border: 1px solid #707070;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChatSearchInput = styled.input`
  width: 160px;
  margin-left: 16px;
  border: none;
  font-size: 18px;
  line-height: 22.67px;
  &:focus {
    outline: none;
  }
`;
const ChatSearchBtnWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export default Topbar;
