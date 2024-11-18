import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
