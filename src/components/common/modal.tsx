import styled from 'styled-components';
import ReactDOM from 'react-dom';
import CloseIcon from '../../assets/CloseIcon.png';
import {useState} from 'react';

interface ModalProps {
  type: string;
  onClose: (type:string) => void;
  onConfirm: (channelName: string) => void;
}

const Modal = ({ type, onClose, onConfirm}: ModalProps) => {
  const [channelName, setChannelName] = useState('');

  const handleClose = () => {
    const newValue = '';
    onClose(newValue);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.target.value);
  };
  const handleConfirm = () => {
    if (type === 'create') {
      onConfirm(channelName);
    } else if(type === 'delete'){
      onConfirm('');
    }
  };
  
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={handleClose}/>
        <ModalContainer modalType={type}>
          <ModalTop modalType={type}>
            <ModalTitle modalType={type}>{type == 'create' ? '채널 생성' : '채널을 나가시겠습니까?'}</ModalTitle> 
            {type == 'create' ?
              <ModalClose onClick={handleClose}>
                <Icon src={CloseIcon}></Icon>
              </ModalClose>
            :null}
          </ModalTop>
          {type == 'create' ?
            <ModalInputWrapper>
              <ModalInput placeholder="새로운 채널" onChange={handleInputChange} />
            </ModalInputWrapper> 
          :null}   
          <ModalConfirmWrapper modalType={type}>
            {type == 'create'?
              <ModalConfirm modalType={type} onClick={handleConfirm}>확인</ModalConfirm>
            :
              <>
                <ModalCancel onClick={handleClose}>취소</ModalCancel>
                <ModalConfirm modalType={type} onClick={handleConfirm}>나가기</ModalConfirm>
              </>
            }
            
          </ModalConfirmWrapper>
        </ModalContainer>
      </>
      ,
      document.getElementById('root') as HTMLElement
      
    );
}

interface ModalTypeProps {
  modalType: string;
}
const ModalContainer = styled.div<ModalTypeProps>`
  position: fixed;
  z-index: 1002;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 512px;
  height: ${({ modalType }) => (modalType === 'create' ? '240px' : '172px')};
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
  z-index: 1001;
`;
const ModalTitle = styled.div<ModalTypeProps>`
  font-size: 24px;
  margin: ${({ modalType }) => (modalType === 'create' ? '30px 0 0 52px' : '38px 0 0 0')};
  width: ${({ modalType }) => (modalType === 'create' ? '106px' : '512px')};
  display: flex;
  justify-content: center;
`;
const ModalTop = styled.div<ModalTypeProps>`
  display: flex;
  justify-content: ${({ modalType }) => (modalType === 'create' ? 'space-between' : 'center')};
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
const ModalConfirmWrapper = styled.div<ModalTypeProps>`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: ${({ modalType }) => (modalType === 'create' ? 'center' : 'space-evenly')};
  margin-top: 24px;
`;
const ModalConfirm = styled.div<ModalTypeProps>`
  width: ${({ modalType }) => (modalType === 'create' ? '448px' : '212px')};
  height: 48px;
  background-color: ${({ modalType }) => (modalType === 'create' ? '#3081F6' : '#FC4F4F')};
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
const ModalCancel = styled.div`
  width: 212px;
  height: 48px;
  background-color: #ECECEC;
  color: #7A7878;
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
