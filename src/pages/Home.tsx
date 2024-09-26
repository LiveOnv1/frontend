import styled from 'styled-components';
import LeftSidebar from '../components/home/LeftSidebar';
import Topbar from '../components/home/Topbar';
import ChatMainContents from '../components/home/ChatMainContents';
import ChatInputComponent from '../components/home/ChatInputComponent';

const Home = () => {
  return (
    <MainContainer>  
        <LeftSidebar />
        <MainContent>
          <Topbar></Topbar>
          <ChatMainContents></ChatMainContents>
          <ChatInputComponent></ChatInputComponent>
        </MainContent>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
`;
const MainContent = styled.div`
  width: calc(100% - 240px);
  height: 100vh;
  position: fixed;
  right: 0;
`;

export default Home;
