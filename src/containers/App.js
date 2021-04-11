import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Category from '../components/Category';
import fetchCategories from '../api/fetchCategories';
import store from '../reducers/store';
import { incrementOffset, filterByName } from '../actions/action';
import Pagination from '../components/Pagination';

const SearchBarContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 1rem;
margin-bottom: 3rem;
@media screen and (max-width: 800px) {
  flex-direction: column;
  }`;

const SearchBar = styled.input`
padding: 0.5rem 1rem 0 1rem;
width: 50%;
font-family: 'Roboto Condensed', sans-serif;
font-size: 1.5rem;
border: none;
border-bottom: 3px solid black;
::placeholder,
::-webkit-input-placeholder {
  color: lightgray;
}
:-ms-input-placeholder {
   color: lightgray;
}
@media screen and (max-width: 800px) {
  width: 100%;
  }
`;

const SearchResults = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
flex-direction: column;
border-bottom: 3px solid black;
`;

function App() {
  const { category, offset, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setActive] = useState(false);
  const { filteredChars } = filter;
  const [charsPerPage] = useState(5);
  const increaseOffset = () => {
    if (offset.offset < 1500) dispatch(incrementOffset(100));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (store.getState().category.categories.length === 0) {
      dispatch(fetchCategories());
      increaseOffset();
    }
  }, [offset]);

  const charInfo = category.categories;
  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;
  const sortedCharInfo = charInfo.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
  const currentChars = sortedCharInfo.slice(indexOfFirstChar, indexOfLastChar);

  const filterByInput = e => {
    const input = e.target.value;
    dispatch(filterByName(input, charInfo));
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setActive(!isActive);
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBar onChange={e => { filterByInput(e); }} type="text" placeholder="SEARCH BY NAME" />
      </SearchBarContainer>
      {
          filteredChars && filteredChars.length > 0 && (
            <SearchResults>
                {filteredChars.map(category => (
                  <Category
                    key={category.idCategory}
                    id={category.idCategory}
                    name={category.strCategory}
                    description={category.strCategoryDescription}
                    path={`/meals/${category.strCategory}`}
                  />
                ))}
            </SearchResults>
          )
        }
      {currentChars.map(category => (
        <Category
          key={category.idCategory}
          id={category.idCategory}
          name={category.strCategory}
          description={category.strCategoryDescription}
          path={`/meals/${category.strCategory}`}
        />
      ))}
      <Pagination
        charsPerPage={charsPerPage}
        totalChars={charInfo.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
export default App;
