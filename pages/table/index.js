import DynamicTable from '@/Components/Modal/DynamicTable/DynamicTable';
import Modal from '@/Components/Modal/Modal';
import useModal from '@/hook/useModal';
import React, { useState } from 'react';

const Table = () => {
    const [getAge,setAge]=useState("");
    const [getName,setName]=useState("");
    const { isModalOpen,
        handleOpenModal,
        handleCloseModal}=useModal();
      // Example data array of objects
  const users = [
    { name: 'John Doe', age: 28, email: 'john.doe@example.com',phon:"01"},
    { name: 'Jane Smith', age: 34, email: 'jane.smith@example.com',phon:"02" },
    { name: 'Alice Johnson', age: 22, email: 'alice.johnson@example.com',phon:"03" },
  ];

  // Define custom column names
  const userColumns = ['Full Name', 'Age', 'Email Address','Phone','Action'];
    return (
        <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Users Table</h1>
        <div className='overflow-auto'>
         <DynamicTable  data={users} columns={userColumns} setAge={setAge} handleOpenModal={handleOpenModal} setName={setName}/>   
        </div>
        
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={getName}>
      <p>Yor Age is: {getAge}</p>
      <input></input>
      <input></input>
      
      </Modal>
      </div>
    );
};

export default Table;