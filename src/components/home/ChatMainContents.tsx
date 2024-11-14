import { useStore } from '../../store/store';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getChats } from '../../api/chatApi';
import ProfileIcon from '../../assets/ProfileIcon.png';

interface Chat {
  content: string;
  sender: string;
  timestamp: string;
}

const ChatMainContents = () => {
  const selectedChannel = useStore((state) => state.selectedChannel);
  const selectedChannelId = useStore((state) => state.selectedChannelId);
  const [chats, setChats] = useState<Chat[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      try{
        const response = await getChats(selectedChannelId);
        setChats(response.data);
        setError(false);
      }catch{
        setError(true);
      }
    };
    fetchChats();
  }, [selectedChannel]);
  return (
    <Container>
        {selectedChannel ? 
          (
            <Content>
              {error ? (
                <ErrorMessage>채팅을 불러오지 못했습니다. 관리자에게 문의해주세요.</ErrorMessage>
              ) : chats.length==0 ? (
                <ErrorMessage>아직 입력된 채팅이 없어요</ErrorMessage>
              ) : (
                  chats.map((chat, index) => (
                    <ChatWrapper key={index}>
                      <ChatProfileImg src={ProfileIcon}/>
                      <ChatContentWrapper>
                        <ChatSender>{chat.sender}</ChatSender>
                        <ChatCTWraper>
                          <ChatContent>{chat.content}</ChatContent>
                          <ChatTime>
                            {new Date(chat.timestamp).toLocaleTimeString("ko-KR", { 
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            })}
                          </ChatTime>
                        </ChatCTWraper>
                      </ChatContentWrapper>
                    </ChatWrapper>
                  ))
              )}
            </Content>
          ) 
        : 
          (null)
        }
        
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 76px - 98px);
  overflow: auto;
  margin-top: 76px;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 90%;
`;
const ChatWrapper = styled.div`
  margin-top: 24px;
  display: flex;
`;
const ChatProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
const ChatContentWrapper = styled.div`
  margin-left: 12px;
`;
const ChatSender = styled.div`
  height: 24px;  
  font-size: 18px;
  margin-bottom: 6px;
`;
const ChatContent = styled.div`
  background-color: #D9D9D9;
  padding: 16px;
  border-radius: 20px;
  max-width: 660px;
  font-size: 16px;
`;
const ChatTime = styled.div`
  color: #777777;
  font-size: 14px;
  margin-left: 2px;
  display: flex;
  align-items: end;
`;
const ChatCTWraper = styled.div`
  display: flex;
`;
const ErrorMessage = styled.div`
  display:flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;



export default ChatMainContents;
