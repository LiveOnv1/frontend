import { useEffect, useState } from 'react';
import styled from 'styled-components';
import expandIcon from '../../assets/ChannelExpandButton.png';
import foldIcon from '../../assets/ChannelFoldButton.png';
import TrashIcon from '../../assets/TrashIcon.png';
import { useStore } from '../../store/store';
import Modal from '../common/modal';
import { getChannel, postChannel } from '../../api/channelApi';

interface Channel {
  id: number;
  chatRoomName: string;
}

const ChannelList = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [modalType, setModalType] = useState<string>("");

  const selectedChannel = useStore((state) => state.selectedChannel);
  const setSelectedChannel = useStore((state) => state.setSelectedChannel);

  const handleChannelClick = (channel:string) => {
    setSelectedChannel(channel);
  };

  const toggleChannels = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleAddChannelClick = () => {
    setModalType("create");
  };

  const handleDeleteChannelClick = () => {
    setModalType("delete");
  };

  const handleCreateConfirm = async (channelName: string) => {
    try{
      await postChannel(channelName);
      getChannel();
      setSelectedChannel(channelName);
      setModalType('');
    }catch(error){
      console.log("Failed to create channels.")
      alert("채널 생성에 실패했습니다.\n관리자에게 문의해주세요.")  
    }
  };
  const handleLeaveConfirm = () => {
    setModalType("");
    setSelectedChannel("");
  };

  useEffect(() => {
    const getChannels = async () => {
      try{
        const channelData = await getChannel();
        setChannels(channelData);
      }catch(error){
        console.log("Failed to load channels.")
      }
    }
    getChannels();
  }, []);


  return (
    <ChannelListContainer>
      <ChannelTitle onClick={toggleChannels}>
        채널
        <ChannelExpandButton >
          <Icon src={isExpanded ? foldIcon : expandIcon} alt="expand/collapse icon" />
        </ChannelExpandButton>
      </ChannelTitle>
      {isExpanded && (
        <ChannelItemContainer>
          {channels.map((channel, idx) => (
            <ChannelItem 
            key={idx}
            onClick={() => handleChannelClick(channel.chatRoomName)}
            isSelected={selectedChannel == channel.chatRoomName}
            >
              <>
              # {channel.chatRoomName}
              </>
              <Icon src={TrashIcon} className="trash-icon" isTrashIcon onClick={handleDeleteChannelClick} />
            </ChannelItem>
          ))}
          <ChannelItem onClick={handleAddChannelClick}>+ 채널 추가</ChannelItem>
        </ChannelItemContainer>
      )}
      {modalType && (
        <Modal type={modalType} onClose={setModalType} onConfirm={modalType == 'create' ? handleCreateConfirm : handleLeaveConfirm } />
      )}
    </ChannelListContainer>
  );
};

const CategoryContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const ChannelListContainer = styled.div`
  margin-bottom: 8px;
`;

const ChannelTitle = styled.div`
  width: 188px;
  height: 24px;
  margin-bottom: 2px;
  padding: 8px 4px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #707070;
  &:hover {
    cursor: pointer;
  }
`;

const ChannelExpandButton = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
`;

interface IconProps {
  isTrashIcon?: boolean;
}

const Icon = styled.img<IconProps>`
  width: ${({ isTrashIcon }) => (isTrashIcon ? '15px' : '24px')};
  height: ${({ isTrashIcon }) => (isTrashIcon ? '15px' : '24px')};
  padding: ${({ isTrashIcon }) => (isTrashIcon ? '5px;' : '0')};
  border-radius: ${({ isTrashIcon }) => (isTrashIcon ? '5px;' : '0')};
  &:hover {
    background-color: ${({ isTrashIcon }) => (isTrashIcon ? '#70A5F2' : 'none')};
  }
`;

const ChannelItemContainer = styled.div`
  width: 204px;
`;

interface ChannelItemProps {
  isSelected?: boolean;
}

const ChannelItem = styled.div<ChannelItemProps>`
  margin-bottom: 2px;
  padding: 0 17px 0 22px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ isSelected }) => (isSelected ? 'white' : '#707070')};
  border-radius: 10px;
  background-color: ${({ isSelected }) => (isSelected ? '#315993' : '')};
  &:hover {
    cursor: pointer;
    background-color: ${({ isSelected }) => (isSelected ? '#315993' : '#D3E5FF')};
  }
  &:hover .trash-icon {
    display: inline;
  }
  .trash-icon {
    display: none;
    width: 15px;
    height: 15px;
  }
`;

export default ChannelList;
