import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };
  return (
    <div>
      <StyledNav>
        <StyledLogo onClick={clearSearched}>
          <img src={logo} alt='logo' />
          <h1>Ignite</h1>
        </StyledLogo>
        <form className='search'>
          <input value={textInput} onChange={inputHandler} type='text' />
          <button type='submit' onClick={submitSearch}>
            Search
          </button>
        </form>
      </StyledNav>
    </div>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: 0;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
  }
`;

export default Nav;
