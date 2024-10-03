import { useState } from 'react';
import styled from 'styled-components';
import expandIcon from '../../assets/CategoryExpandButton.png';
import foldIcon from '../../assets/CategoryFoldButton.png';

// Props의 타입 정의
interface CategoryListProps {
  ChannelTitle: string; // ChannelTitle은 문자열 타입입니다.
}

const CategoryList: React.FC<CategoryListProps> = ({ ChannelTitle }) => {
  // 채널이 확장되었는지 여부를 관리하는 상태
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // 확장 상태를 토글하는 함수
  const toggleChannels = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <CategoryItem>
      <CategoryItemTitle>
        {ChannelTitle} {/* ChannelTitle prop 사용 */}
        <CategoryExpandButton onClick={toggleChannels}>
          <Icon src={isExpanded ? foldIcon : expandIcon} alt="expand/collapse icon" />
        </CategoryExpandButton>
      </CategoryItemTitle>
      {/* isExpanded 상태에 따라 ChannelList를 조건부로 렌더링 */}
      {isExpanded && (
        <ChannelList>
          <ChannelItem>#공지</ChannelItem>
          <ChannelItem>#잡담</ChannelItem>
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

export default CategoryList;
