import Modal from "react-modal";
import css from "./ImageModal.module.css";
export default function ImageModal({ isOpen, isClose, image }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  console.log(image);
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={isClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
}
