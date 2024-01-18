import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img className=' w-screen h-screen object-cover' src={BG_URL} alt="Background" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch  