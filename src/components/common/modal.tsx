import styled from 'styled-components';
import ReactDOM from 'react-dom';
import CloseIcon from '../../assets/CloseIcon.png';

interface ModalProps {
  onClose: () => void;
  title: string;
  button: string;
}

const Modal = ({ onClose, title, button }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose}/>
      <ModalContainer>
        <ModalTop>
          <ModalTitle>{title}</ModalTitle>
          <ModalClose onClick={onClose}>
            <Icon src={CloseIcon}></Icon>
          </ModalClose>
        </ModalTop>
        <ModalInputWrapper>
          <ModalInput placeholder="새로운 채널" />
        </ModalInputWrapper>
        <ModalConfirmWrapper>
          <ModalConfirm>{button}</ModalConfirm>
        </ModalConfirmWrapper>
      </ModalContainer>
    </>,
    document.getElementById('root') as HTMLElement
  );
}

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 512px;
  height: 240px;
  background-color: white;
  border-radius: 20px;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalTitle = styled.div`
  font-size: 24px;
  margin: 30px 0 0 52px;
  width: 106px;
`;
const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalClose = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 34px;  
  margin-right: 38px;
  &:hover {
    cursor: pointer;
  }
`;
const ModalInputWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-top: 24px;  
`;
const ModalInput = styled.input`
  width: 388px;
  height: 60px;  
  border: 1px solid #D1D4D6;
  border-radius: 15px;
  padding: 0 30px 0 30px;
  font-size: 16px;
  &:focus {
    outline-color: #3081f6;
  }
`;
const ModalConfirmWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  margin-top: 24px;  
`;
const ModalConfirm = styled.div`
  width: 448px;
  height: 48px;
  background-color: #3081F6;
  color: white;
  border-radius: 15px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content : center;
  &:hover {
    cursor: pointer;
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export default Modal;
