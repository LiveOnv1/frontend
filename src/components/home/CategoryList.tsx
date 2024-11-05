import { useState } from 'react';
import styled from 'styled-components';
import expandIcon from '../../assets/CategoryExpandButton.png';
import foldIcon from '../../assets/CategoryFoldButton.png';
import TrashIcon from '../../assets/TrashIcon.png';
import { useStore } from '../../store/store';
import Modal from '../common/modal';

interface CategoryListProps {
  CategoryTitle: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ CategoryTitle }) => {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const selectedChannel = useStore((state) => state.selectedChannel);
  const setSelectedCategoryChannel = useStore((state) => state.setSelectedCategoryChannel);

  const handleChannelClick = (category: string, channel: string) => {
    setSelectedCategoryChannel(category, channel);
  };

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"create" | "delete" | null>(null);

  const toggleChannels = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleAddChannelClick = () => {
    setModalType("create");
  };

  const handleDeleteChannelClick = () => {
    setModalType("delete");
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <CategoryItem>
      <CategoryItemTitle isSelected={selectedCategory === CategoryTitle}>
        {CategoryTitle}
        <CategoryExpandButton onClick={toggleChannels}>
          <Icon src={isExpanded ? foldIcon : expandIcon} alt="expand/collapse icon" />
        </CategoryExpandButton>
      </CategoryItemTitle>
      {isExpanded && (
        <ChannelList>
          <ChannelItem 
            isSelected={selectedCategory === CategoryTitle && selectedChannel === '공지'}
            onClick={() => handleChannelClick(CategoryTitle, '공지')}
          >
            #공지
            <Icon src={TrashIcon} className="trash-icon" isTrashIcon onClick={handleDeleteChannelClick} />
          </ChannelItem>
          <ChannelItem 
            isSelected={selectedCategory === CategoryTitle && selectedChannel === '잡담'}
            onClick={() => handleChannelClick(CategoryTitle, '잡담')}
          >
            #잡담
            <Icon src={TrashIcon} className="trash-icon" isTrashIcon onClick={handleDeleteChannelClick} />
          </ChannelItem>
          <ChannelItem onClick={handleAddChannelClick}>+ 채널 추가</ChannelItem>
        </ChannelList>
      )}
      {modalType && (
        <Modal type={modalType} onClose={closeModal} />
      )}
    </CategoryItem>
  );
};

const CategoryContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const CategoryItem = styled.div`
  margin-bottom: 8px;
`;

interface CategoryItemTitleProps {
  isSelected: boolean;
}

const CategoryItemTitle = styled.div<CategoryItemTitleProps>`
  width: 188px;
  height: 24px;
  margin-bottom: 2px;
  padding: 8px 4px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #707070;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`;

const CategoryExpandButton = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
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
    background-color: ${({ isTrashIcon }) => (isTrashIcon ? '#C8C7C7' : 'none')};
  }
`;

const ChannelList = styled.div`
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
  color: #707070;
  border-radius: 10px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  &:hover {
    cursor: pointer;
    background-color: #E8E8E8;
  }
  &:hover .trash-icon {
    display: inline;
  }
  .trash-icon {
    display: none; /* Hide by default */
    width: 15px;
    height: 15px;
  }
`;

export default CategoryList;
