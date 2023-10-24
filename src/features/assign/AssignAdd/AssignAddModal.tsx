import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import AssignAddForm from './AssignAddForm';

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  outline: none;
  width: 400px;
  height: 500px;
`;

interface GroupAddModalProps {
  open: boolean;
  onClose: () => void;
}

function AssignAddModal({ open, onClose }: GroupAddModalProps) {
  const handleFormSubmit = (formData: any) => {
    // 폼 데이터를 처리하는 로직 (예: 서버에 전송)
    console.log('Form data submitted:', formData);
    onClose(); // 모달 닫기
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModal>
        <h2 id="modal-modal-title">과제 생성</h2>
        <div id="modal-modal-description">
          <AssignAddForm onSubmit={handleFormSubmit} />
        </div>
      </StyledModal>
    </Modal>
  );
}

export default AssignAddModal;
