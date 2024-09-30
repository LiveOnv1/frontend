import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  type?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  marginTop?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  borderRadius,
  children,
  marginTop
}) => {
  return (
    <StyledLink>
      <Container
        type={type}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        color={color}
        fontSize={fontSize}
        borderRadius={borderRadius}
        marginTop={marginTop}
      >
        {children}
      </Container>
    </StyledLink>
  );
};

const Container = styled.button<{ 
  type?: string;
  width?: string;
  height?: string; 
  backgroundColor?: string; 
  color?: string; 
  fontSize?: string; 
  borderRadius?: string;
  marginTop?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
  border: none;

  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  border-radius: ${(props) => props.borderRadius || '0'};
  margin-top: ${(props) => props.marginTop || '0'};
`;

const StyledLink = styled.div`
  text-decoration: none;
`;

export default Button;
