import axios from 'axios';

const baseURL = 'https://pixabay.com/api/';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        key: '42004606-5d03e591d800e1e125ea1f7b1',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 12,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};


























// import axios from 'axios';

// const baseURL = 'https://pixabay.com/api/';

// const apiKey = '42004606-5d03e591d800e1e125ea1f7b1';

// export const fetchImagesWithQuery = async (searchQuery, page) => {
//   try {
//     const response = await axios.get(baseURL, {
//       params: {
//         key: apiKey,
//         q: searchQuery,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page,
//         per_page: 12, // Set per_page to 12 for 12 images per page
//       },
//     });
//     return response.data.hits;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error; // Re-throw the error to handle it in the component
//   }
// };







// import axios from 'axios';

// const baseURL = 'https://pixabay.com/api/';

// export const fetchImagesWithQuery = async (searchQuery, page) => {
//   try {
//     const response = await axios.get(baseURL, {
//       params: {
//         key: '42004606-5d03e591d800e1e125ea1f7b1',
//         q: searchQuery,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: page,
//         per_page: 12,
//       },
//     });
//     return response.data.hits;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     return [];
//   }
// };
















// import axios from 'axios';


// export const fetchImagesWithQuery = async (searchQuery, page) => {
//   const API_KEY = '42004606-5d03e591d800e1e125ea1f7b1';
//   const URL = `https://pixabay.com/api/`;
//   const response = await axios.get(URL, {
//     params: {
//       key: API_KEY,
//       q: searchQuery,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page: page,
//       per_page: 12,
//     },
//   });
//   return response.data.hits;
// };



















// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const fetchPosts = async (query, configParams) => {
//     try {
//         const { data } = await axios.get('/', {
//             params: {
//                 key: '42004606-5d03e591d800e1e125ea1f7b1',
//                 per_page: 12,
//                 page: 1,
//                 q: query,
//                 ...configParams,
//             }
//         });
//         return data;
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         return null;
//     }
// };











// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/'

// export const fetchPosts = async configParams => {
//     const { data } = await axios.get({
//         params: {
            
//             api_key: '42004606-5d03e591d800e1e125ea1f7b1',
//             per_page: 12,
//             page: 1,
//             ...configParams,
            
        
//     }
        
//     })
//     console.log(data)
// 	return data
// }









// export const fetchImagesByQuery = async (searchQuery, page) => {
//   const API_KEY = '42004606-5d03e591d800e1e125ea1f7b1';
//   const URL = `https://pixabay.com/api/`;
//   const response = await axios.get(URL, {
//     params: {
//       key: API_KEY,
//       q: searchQuery,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page: page,
//       per_page: 12,
//     },
//   });
//   return response.data.hits;
// };