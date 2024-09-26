import styled from 'styled-components';

// Button 컴포넌트
const Button = ({
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  borderRadius,
  children
}: {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  borderRadius?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      {children}
    </Container>
  );
};

// Container 스타일 컴포넌트 정의
const Container = styled.div<{ 
  width?: string; 
  height?: string; 
  backgroundColor?: string; 
  color?: string; 
  fontSize?: string; 
  borderRadius?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }

  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  border-radius: ${(props) => props.borderRadius || '0'};
`;


export default Button;
