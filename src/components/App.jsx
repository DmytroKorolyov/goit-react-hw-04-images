import React, { useEffect, useState } from 'react';
import s from './styles/styles.module.css';
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
    if (searchQuery && isDefaultPage) {
      setIsDefaultPage(false);
    }
    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery, isDefaultPage]);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const newImages = await fetchImagesWithQuery(searchQuery, page);
      if (page === 1) {
        setImages(newImages);
      } else {
        setImages(prevImages => [...prevImages, ...newImages]);
      }
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetQuery = query => {
    setImages([]);
    setPage(1);
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
      {!isDefaultPage && (
        <ImageGallery images={images} onItemClick={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMoreImages} />
      )}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
















// тест











// --------------- Працює---------------------------

// import React, { useEffect, useState, useCallback } from 'react';
// import s from './styles/styles.module.css';
// import { fetchImagesWithQuery } from '../api';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Searchbar from './Searchbar/Searchbar';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';
// import { Loader } from './Loader/Loader';

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [largeImageURL, setLargeImageURL] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDefaultPage, setIsDefaultPage] = useState(true);

//   useEffect(() => {
//     if (searchQuery && isDefaultPage) {
//       setIsDefaultPage(false);
//     }
//     if (searchQuery) {
//       fetchImages();
//     }
//   }, [searchQuery, isDefaultPage]);

//   const fetchImages = async () => {
//     setIsLoading(true);
//     try {
//       const newImages = await fetchImagesWithQuery(searchQuery, page);
//       setImages(prevImages => [...prevImages, ...newImages]);
//       setPage(prevPage => prevPage + 1);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSetQuery = query => {
//     setSearchQuery(query);
//   };

//   const handleLoadMoreImages = () => {
//     fetchImages();
//   };

//   const handleOpenModal = imageURL => {
//     setShowModal(true);
//     setLargeImageURL(imageURL);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setLargeImageURL('');
//   };

//   return (
//     <div className={s.app}>
//       <Searchbar handleSetQuery={handleSetQuery} />
//       {!isDefaultPage && (
//         <ImageGallery images={images} onItemClick={handleOpenModal} />
//       )}
//       {isLoading && <Loader />}
//       {images.length > 0 && !isLoading && (
//         <Button onClick={handleLoadMoreImages} />
//       )}
//       {showModal && (
//         <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
//       )}
//     </div>
//   );
// };

// export default App;














// тест

// ?sdfdssd











































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
//     showLoadMoreButton: false, 
//     showModal: false, 
//     selectedImage: null 
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
//         showLoadMoreButton: hits.length > 0 && prev.searchPerformed 
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

//   handleOpenModal = image => {
//     this.setState({ showModal: true, selectedImage: image });
//   }

//   handleCloseModal = () => {
//     this.setState({ showModal: false, selectedImage: null });
//   }

//   render() {
//     const { images, loading, searchPerformed, showLoadMoreButton, showModal, selectedImage } = this.state;
//     return (
//       <div>
//         <Searchbar handleSetQuery={this.handleSetQuery} />
//         {searchPerformed && <ImageGallery hits={images} handleOpenModal={this.handleOpenModal} />} {}
//         {loading && <Loader />}
//         {showLoadMoreButton && images.length > 0 && <Button handleLoadMore={this.handleLoadMore} />}
//         {showModal && selectedImage && ( 
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
