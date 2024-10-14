import { useState } from 'react';
import styled from 'styled-components';
import expandIcon from '../../assets/CategoryExpandButton.png';
import foldIcon from '../../assets/CategoryFoldButton.png';
import { store } from '../../store/store';
import { useStore } from 'zustand';

interface CategoryListProps {
  CategoryTitle: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ CategoryTitle }) => {
  const { selectedCategory, selectedChannel, setSelectedCategoryChannel } = useStore(store);

  const handleChannelClick = (category: string, channel: string) => {
    setSelectedCategoryChannel(category, channel);
  };

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleChannels = () => {
    setIsExpanded((prev) => !prev);
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
          </ChannelItem>
          <ChannelItem 
            isSelected={selectedCategory === CategoryTitle && selectedChannel === '잡담'}
            onClick={() => handleChannelClick(CategoryTitle, '잡담')}
          >
            #잡담
          </ChannelItem>
          <ChannelItem>+ 채널 추가</ChannelItem>
        </ChannelList>
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

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ChannelList = styled.div`
  width: 204px;
`;

interface ChannelItemProps {
  isSelected?: boolean;
}

const ChannelItem = styled.div<ChannelItemProps>`
  margin: 0 0 2px 22px;
  height: 40px;
  display: flex;
  align-items: center;
  color: #707070;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  &:hover {
    cursor: pointer;
  }
`;

export default CategoryList;
