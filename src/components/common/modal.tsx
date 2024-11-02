import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Modal = ({ onClose }: { onClose: () => void }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={onClose}/>
      <ModalContainer>
        <ModalTop>
          <ModalTitle />
          <ModalClose onClick={onClose}/>
        </ModalTop>
        <ModalInput />
        <ModalConfirm />
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
  
`;
const ModalTop = styled.div``;
const ModalClose = styled.div``;
const ModalInput = styled.input``;
const ModalConfirm = styled.div``;

export default Modal;
