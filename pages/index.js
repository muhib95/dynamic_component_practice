import Image from "next/image";
import localFont from "next/font/local";
import Modal from "@/Components/Modal/Modal";
import { useState } from "react";
import useModal from "@/hook/useModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  // const { isModalOpen, handleOpenModal, handleCloseModal }=useModal();
  const firstModal=useModal();
  const secondModal=useModal();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
        <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={firstModal.handleOpenModal}
      >
        Open Modal
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={secondModal.handleOpenModal}
      >
        Open Another Modal
      </button>
      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="My Modal">
      <p>This is a custom modal using Tailwind CSS!</p>
      </Modal> */}
       <Modal isOpen={firstModal.isModalOpen} onClose={firstModal.handleCloseModal} title="My Modal">
      <p>This is a 1st custom modal using Tailwind CSS!</p>
      </Modal>
      <Modal isOpen={secondModal.isModalOpen} onClose={secondModal.handleCloseModal} title="My Modal">
      <p>This is a 2nd custom modal using Tailwind CSS!</p>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy"/>

      </Modal>
    </div>
  );
}
