import { useState } from 'react';
import { useEffect } from 'react';


import s from './styles/styles.module.css'
import { fetchImagesWithQuery } from '../api';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { Loader } from './Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDefaultPage, setIsDefaultPage] = useState(true);
  
  
useEffect(() => {
    // Перевіряємо, чи введено запит, та чи не є сторінка порожньою за замовчуванням
    if (searchQuery && isDefaultPage) {
      setIsDefaultPage(false); // Якщо так, встановлюємо значення isDefaultPage на false
    }
    
    // Перевіряємо, чи searchQuery не порожній, тоді виконуємо функцію fetchImages
    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery]); // Спрацьовує при зміні searchQuery
  
  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const newImages = await fetchImagesWithQuery(searchQuery, page);
      setImages(prevImages => [...prevImages, ...newImages]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetQuery = query => {
    setSearchQuery(query);
  };

  const handleLoadMoreImages = () => {
    fetchImages();
  };

  const handleOpenModal = imageURL => {
    setShowModal(true);
    setLargeImageURL(imageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };
  
  return (
    <div className={s.app}>
      <Searchbar handleSetQuery={handleSetQuery} />
      {!isDefaultPage && ( // Відображаємо ImageGallery, якщо сторінка не є порожньою за замовчуванням
        <ImageGallery images={images} onItemClick={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMoreImages} />
      )}
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};




export default App




























































// import React from "react";
// import './styles/styles.css'
// import ImageGallery from './ImageGallery/ImageGallery'
// import Searchbar from './Searchbar/Searchbar'
// import Button from './Button/Button'
// // import {fetchImagesByQuery} from '../api'
// import { fetchPosts } from '../api'
// import { Loader } from './Loader/Loader'
// import Modal from './Button/Button'



// export class App extends React.Component {
//   state = {
//     images: [],
//     totalImages: 0,
//     loading: false,
//     error: null,
//     page: 1,
//     query: '',
//     searchPerformed: false,
//     showLoadMoreButton: false, // Додали новий стан
//     showModal: false, // Стан для показу модального вікна
//     selectedImage: null // Стан для зберігання обраного зображення
//   }

//   async componentDidMount() {
//     this.fetchImages();
//   }

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
//       this.fetchImages();
//     }
//   }

//   async fetchImages() {
//     try {
//       const { query, page } = this.state;
//       this.setState({ loading: true });
//       const { hits, total } = await fetchPosts(query, { page });
//       this.setState(prev => ({
//         images: [...prev.images, ...hits],
//         totalImages: total,
//         loading: false,
//         showLoadMoreButton: hits.length > 0 && prev.searchPerformed // Показуємо кнопку, якщо отримано нові зображення
//       }));
//     } catch (error) {
//       this.setState({ error, loading: false });
//     }
//   }

//   handleSetQuery = query => {
//     this.setState({ query, images: [], page: 1, searchPerformed: true });
//   }

//   handleLoadMore = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   }

//   // Метод для відкриття модального вікна
//   handleOpenModal = image => {
//     this.setState({ showModal: true, selectedImage: image });
//   }

//   // Метод для закриття модального вікна
//   handleCloseModal = () => {
//     this.setState({ showModal: false, selectedImage: null });
//   }

//   render() {
//     const { images, loading, searchPerformed, showLoadMoreButton, showModal, selectedImage } = this.state;
//     return (
//       <div>
//         <Searchbar handleSetQuery={this.handleSetQuery} />
//         {searchPerformed && <ImageGallery hits={images} handleOpenModal={this.handleOpenModal} />} {/* Передаємо метод handleOpenModal у властивість */}
//         {loading && <Loader />}
//         {showLoadMoreButton && images.length > 0 && <Button handleLoadMore={this.handleLoadMore} />}
//         {showModal && selectedImage && ( /* Відображаємо модальне вікно тільки якщо воно відкрите і є обране зображення */
//           <Modal selectedImage={selectedImage} handleCloseModal={this.handleCloseModal} />
//         )}
//       </div>
//     )
//   }
// }

























// export class App extends React.Component {

//   state = {
//     images: [],
//     totalImages: 0,
//     loading: false,
//     error: null,
//     page: 1,
//     query:'',
    
// }


//   async componentDidMount() {
//     try {
//       this.setState({loading: true})
//       const { hits, total } = await fetchPosts()
//       this.setState({ images: hits, totalImages: total})
//     } catch (error) {
//       this.setState({error})
//     }
//     finally {
//       this.setState({ loading: false})
//     }
//   }
  
//   async componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
//       try {
//         const { hits, total } = await fetchPosts({ page: this.state.page })
//         this.setState(prev => ({ images: [...prev.images, ...hits], totalImages: total}))
//     } catch(error){}
//   }
//   }
  

//   handleSetQuery = query => {
// 		this.setState({ query, images: [], page: 1 })
// 	}


  
//   handleLoadMore = () => {
//     this.setState(prev => ({page: prev.page +1}))
//   }
  
  

//   render() {
//       const {images, loading} = this.state
//         return (
//         <div>
//             <Searchbar handleSetQuery={this.handleSetQuery } />
//             <ImageGallery hits={images} />
//             {loading && <Loader />} 
            
//             {images.length ? <Button handleLoadMore={this.handleLoadMore} /> : null}
            
//         </div>
//         )
//     }
// }
