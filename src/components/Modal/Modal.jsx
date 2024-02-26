import React, { useEffect } from 'react';
import s from '../styles/styles.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const checkForCloseModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={checkForCloseModal}>
      <div className={s.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;













// import React from 'react';

// class Modal extends React.Component {
//   handleKeyUp = e => {
//     const { handleCloseModal } = this.props;
//     if (e.keyCode === 27) {
//       handleCloseModal();
//     }
//   };

//   componentDidMount() {
//     window.addEventListener('keyup', this.handleKeyUp);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keyup', this.handleKeyUp);
//   }

//   handleOverlayClick = () => {
//     const { handleCloseModal } = this.props;
//     handleCloseModal();
//   };

//   render() {
//     const { selectedImage } = this.props;
//     return (
//       <div className="modal-overlay" onClick={this.handleOverlayClick}>
//         <div className="modal">
//           <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;



















// import React, { Component } from 'react';



// export default class Modal extends React.Component {
//   // Метод для закриття модального вікна при натисканні клавіші ESC
//   handleKeyUp = e => {
//     if (e.keyCode === 27) {
//       this.props.handleCloseModal();
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('keyup', this.handleKeyUp);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keyup', this.handleKeyUp);
//   }

//   render() {
//     const { selectedImage, handleCloseModal } = this.props;
//     return (
//       <div className="modal-overlay" onClick={handleCloseModal}> {/* Додаємо можливість закриття модального вікна при кліку на оверлей */}
//         <div className="modal">
//           <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
//         </div>
//       </div>
//     )
//   }
// }

