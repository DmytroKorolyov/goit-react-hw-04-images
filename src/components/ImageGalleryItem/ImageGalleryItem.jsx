import React from 'react';
import s from '../styles/styles.module.css'

const ImageGalleryItem = ({ image, onItemClick }) => {
  return (
    <li className={s.image_gallery_item}>
      <img className={s.image_gallery_item_image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onItemClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;





// import React from 'react';
// import s from '../styles/styles.module.css'

// const ImageGalleryItem = ({ image, onItemClick }) => {
//   return (
//     <li className={s.image_gallery_item}>
//       <img className={s.image_gallery_item_image}
//         src={image.webformatURL}
//         alt={image.tags}
//         onClick={() => onItemClick(image.largeImageURL)}
//       />
//     </li>
//   );
// };

// export default ImageGalleryItem;

















// import React from 'react';

// class ImageGalleryItem extends React.Component {
//   handleClick = () => {
//     const { image, handleOpenModal } = this.props;
//     handleOpenModal(image);
//   };

//   render() {
//     const { image } = this.props;
//     return (
//       <li className="gallery-item" onClick={this.handleClick}>
//         <img src={image.webformatURL} alt={image.tags} />
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;











// import React from 'react';

// const ImageGalleryItem = ({ image, handleOpenModal }) => {
//   const handleClick = () => {
//     handleOpenModal(image); // Викликаємо функцію для відкриття модального вікна
//   };

//   return (
//     <li className="gallery-item" onClick={handleClick}>
//       <img src={image.webformatURL} alt={image.tags} />
//     </li>
//   );
// };

// export default ImageGalleryItem;






















// import React from "react";

// export const ImageGalleryItem = ({webformatURL, tags}) => {
//     return <li> <img src={webformatURL} alt={tags} />
        
        
//         </li>
// }