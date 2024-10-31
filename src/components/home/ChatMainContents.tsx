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
interface Channel {
  channelName: string;
  chats: Chat[];
}

interface Category {
  category: string;
  channels: Channel[];
}

const ChatMainContents = () => {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const selectedChannel = useStore((state) => state.selectedChannel);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const idx = selectedCategory == '백엔드' ? 0 : ('프론트엔드' ? 1 : -1)
      const data: Category = await getChats(idx); // getChats의 반환값 타입 지정
      const filteredChats = data.channels
        .find((ch) => ch.channelName === selectedChannel)?.chats || [];
      setChats(filteredChats);
    };
    fetchChats();
  }, [selectedCategory, selectedChannel]);

  return (
    <Container>
        <Content>
          {chats.map((chat, index) => (
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
                      hour12: true,})}
                  </ChatTime>
                </ChatCTWraper>
              </ChatContentWrapper>
            </ChatWrapper>
          ))}
        </Content>
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



export default ChatMainContents;
