import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';

import { useState, useEffect } from 'react';
import { useUserDataContext } from '../context/DataContext';

export default function SearchBar() {
    const { userName, setUserName } = useUserDataContext();

    const [searchFieldValue, setSearchFieldValue] = useState('');

    function onClickHandler(e: React.SyntheticEvent<HTMLButtonElement>) {
        e.preventDefault();
        setUserName(searchFieldValue);
    }

    useEffect(() => {
        console.log('searchFieldValue: ', searchFieldValue);
        console.log('userName: ', userName);
    }, [searchFieldValue, userName]);

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchFieldValue(e.target.value);
    }

    return (
        <div className="flex flex-row w-[20.44rem] h-[3.75rem] bg-github-white mt-[2.25rem] rounded-[0.94rem] items-center sm:w-[35.81rem] md:w-[45.63rem] md:h-[4.31rem] drop-shadow-lg min-h-[3.75rem]">
            <SearchIcon className="ml-[1rem] sm:ml-[2rem]" />
            <input
                placeholder="Search GitHub username…"
                className="text-[0.81rem] text-github-queenBlue placeholder-github-queenBlue outline-none sm:text-[1.13rem] flex-grow ml-[0.5625rem] sm:ml-[1.5rem]"
                type="text"
                onChange={onChangeHandler}
            ></input>
            <button
                className="w-[5.25rem] h-[2.88rem] bg-github-azure text-github-white rounded-[0.94rem] text-[0.88rem] sm:text-[1rem] leading-[1.56rem] font-bold mr-[0.5rem] sm:mr-[0.625rem] md:w-[6.63rem] md:h-[3.13rem] justify-self-center"
                onClick={onClickHandler}
            >
                Search
            </button>
        </div>
    );
}
