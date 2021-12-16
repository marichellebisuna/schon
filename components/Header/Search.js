import React from 'react';

const Search = () => {
  return (
    <div className='mt-search-popup'>
      <div className='mt-holder'>
        <a href='#' className='search-close'>
          <span></span>
          <span></span>
        </a>
        <div className='mt-frame'>
          <form action='#'>
            <fieldset>
              <input type='text' placeholder='Search...' />
              <span className='icon-microphone'></span>
              <button className='icon-magnifier' type='submit'></button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
