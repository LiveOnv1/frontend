import styled from 'styled-components';
import ReactDOM from 'react-dom';
import CloseIcon from '../../assets/CloseIcon.png';
import {useState, useRef, useEffect } from 'react';
import { getChannel, postChannel } from '../../api/channelApi';
import { useStore } from '../../store/store';

interface ModalProps {
  type: string;
  onClose: (type:string) => void;
}

const Modal = ({ type, onClose }: ModalProps) => {
  const [channelName, setChannelName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const setSelectedChannel = useStore((state) => state.setSelectedChannel);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [type]);
  const handleClose = () => {
    const newValue = '';
    onClose(newValue);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.target.value);
    setErrorMsg('');
  };
  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if(channelName.length <= 0){
      setErrorMsg('채널이름을 입력해주세요');
    }else if (type === 'create') {
      try{
        await postChannel(channelName);
        getChannel();
        setSelectedChannel(channelName);
        onClose('');
      }catch(error){
        alert("채널 생성에 실패했습니다.\n관리자에게 문의해주세요.") 
        onClose('');
      }
    }
  };
  
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={handleClose}/>
        <ModalForm onSubmit={handleConfirm}>
          <ModalTop>
            <ModalTitle>{type == 'create' ? '채널 생성' : '채널을 나가시겠습니까?'}</ModalTitle> 
            {type == 'create' ?
              <ModalClose onClick={handleClose}>
                <Icon src={CloseIcon}></Icon>
              </ModalClose>
            :null}
          </ModalTop>
          {type == 'create' ?
            <ModalInputWrapper>
              <ModalInput placeholder="새로운 채널" onChange={handleInputChange} ref={inputRef} />
            </ModalInputWrapper> 
          :null}   
          <ErrorMsgWrapper>
            <ErrorMsg>
              {errorMsg}
            </ErrorMsg>
          </ErrorMsgWrapper>
          <ModalConfirmWrapper>
            {type == 'create'?
              <ModalButton>확인</ModalButton>
            :null}
          </ModalConfirmWrapper>
        </ModalForm>
      </>
      ,
      document.getElementById('root') as HTMLElement
      
    );
}

const ModalForm = styled.form`
  position: fixed;
  z-index: 1002;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 512px;
  height: 260px;
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
const ModalTitle = styled.div`
  font-size: 24px;
  margin: 30px 0 0 52px;
  width: 106px;
  display: flex;
  justify-content: center;
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
const ErrorMsgWrapper = styled.div`
  width: 512px;
  display: flex;
  justify-content: center;
`;
const ErrorMsg = styled.div`
  width: 388px;
  height: 36px;
  color: red;
  display: flex;
  align-items: center;
`;
const ModalConfirmWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  margin-top: 0;
`;
const ModalButton = styled.button`
  width: 448px;
  height: 48px;
  background-color: #3081F6;
  color: white;
  border-radius: 15px;
  font-size: 22px;
  border: none;
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
