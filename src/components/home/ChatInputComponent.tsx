import styled from 'styled-components';
import attachIcon from '../../assets/ChatFileAttachButton.png';
import sendIcon from '../../assets/ChatSendButton.png';

const ChatInputComponent = () => {
  return (
    <Container>
      <ChatAttachButtonWrapper>
        <Icon src={attachIcon} alt="attach icon" />
      </ChatAttachButtonWrapper>
      <ChatInputWrapper>
        <ChatInput type="text" placeholder="메세지 입력" />
        <ChatSendButton>
          <Icon src={sendIcon} alt="chat send icon" />
        </ChatSendButton>
      </ChatInputWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 98px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
`;
const ChatAttachButtonWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 74px;
`;
const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
const ChatInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #C1C5C8;
  border-radius: 15px;
  width: calc(100% - 74px - 74px - 40.38px - 240px);
  height: 48px;
  margin-right: 74px;
`;
const ChatInput = styled.input`
  width: 100%;
  margin: 0 24px 0 24px;
  border: none;
  font-size: 20px;
  line-height: 24.67px;
  &:focus {
    outline: none;
  }
`;
const ChatSendButton = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export default ChatInputComponent;
