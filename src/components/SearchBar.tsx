import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';

export default function SearchBar() {
    return (
        <div className="flex flex-row w-[20.44rem] h-[3.75rem] bg-github-white mt-[2.25rem] rounded-[0.94rem] items-center sm:w-[35.81rem] md:w-[45.63rem]">
            <SearchIcon className="ml-[1rem] sm:ml-[2rem]" />
            <input
                placeholder="Search GitHub username…"
                className="text-[0.81rem] text-github-queenBlue placeholder-github-queenBlue outline-none sm:text-[1.13rem] flex-grow ml-[0.5625rem] sm:ml-[1.5rem]"
                type="text"
            ></input>
            <button className="w-[5.25rem] h-[2.88rem] bg-github-azure text-github-white rounded-[0.94rem] text-[0.88rem] sm:text-[1rem] leading-[1.56rem] font-bold mr-[0.5rem] sm:mr-[0.625rem]">
                Search
            </button>
        </div>
    );
}
