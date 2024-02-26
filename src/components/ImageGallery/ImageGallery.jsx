import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from '../styles/styles.module.css'

const ImageGallery = ({ images, onItemClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id} image={image} onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};


export default ImageGallery;


















// import React from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import s from '../styles/styles.module.css'

// const ImageGallery = ({ images, onItemClick }) => {
//   return (
//     <ul className={s.gallery}>
//       {images.map(image => (
//         <ImageGalleryItem
//           key={image.id} // Використовуйте унікальний ключ (наприклад, image.id)
//           image={image}
//           onItemClick={onItemClick}
//         />
//       ))}
//     </ul>
//   );
// };



// export default ImageGallery;





















// import React from "react";
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

// class ImageGallery extends React.Component {
//   render() {
//     const { images, handleOpenModal } = this.props;
//     return (
//       <ul className="gallery">
//         {images.map(image => (
//           <ImageGalleryItem
//             key={image.id}
//             image={image}
//             handleOpenModal={handleOpenModal}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// export default ImageGallery;



















// import React from "react";
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

// export const ImageGallery = ({ hits }) => {
//     return (
//         <ul className="gallery">
//             {hits.map(hit => <ImageGalleryItem key={hit.id} {...hit} />)}

//         </ul>
//         )

//     }
