import React, { useState } from 'react';

import s from '../styles/styles.module.css'


const Searchbar = ({ handleSetQuery }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchInput = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSearchFormSubmit = e => {
    e.preventDefault();
    if (searchValue) {
      handleSetQuery(searchValue);
      setSearchValue('');
    }
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSearchFormSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={handleChangeSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};


export default Searchbar





















// import React from "react";

// export default class Searchbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchValue: '',
//     };
//   }

//   handleChangeValue = e => {
//     this.setState({ searchValue: e.target.value });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.handleSetQuery(this.state.searchValue);
//     this.setState({ searchValue: '' });
//   }

//   componentDidMount() {
//     console.log('Searchbar mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Searchbar updated');
//   }

//   componentWillUnmount() {
//     console.log('Searchbar unmounted');
//   }

//   render() {
//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>
//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchValue}
//             onChange={this.handleChangeValue}
//           />
//         </form>
//       </header>
//     )
//   }
// }


















// import React from "react";

// export default class Searchbar extends React.Component {

//     state = {
//     searchValue: '',
//     }
    
//     handleChangeValue = e => {
// 		this.setState({ searchValue: e.target.value })
//     }
    
//     handleSubmit = e => {
// 		e.preventDefault()
// 		console.log(this.state)
// 		this.props.handleSetQuery(this.state.searchValue)
// 		this.setState({ searchValue: '' })
// 	}



//     render() {
//         return (
//             <header className="searchbar">
//   <form className="form" onSubmit={this.handleSubmit}>
//     <button type="submit" className="button">
//       <span className="button-label">Search</span>
//     </button>

//     <input
//       className="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//     placeholder="Search images and photos"
//                         value={this.state.searchValue}
//                         onChange={this.handleChangeValue}
//     />
//   </form>
//             </header>
//         )
//     }
// }