import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';

import { useState, useEffect } from 'react';
import { useUserDataContext } from '../context/DataContext';

import { useThemeContext } from '../context/ThemeContext';

export default function SearchBar() {
    const { userName, setUserName, userData } = useUserDataContext();

    const { theme, themeConfig } = useThemeContext();

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
    const [innerDivWidth, setInnerDivWidth] = useState(0);
    const [inputWidth, setInputWidth] = useState(0);
    const [spanWidth, setSpanWidth] = useState(0);

    const innerDivRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const spanRef = React.useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const rootFontSizeString = window.getComputedStyle(document.documentElement).fontSize;

        const rootFontSize = Number(rootFontSizeString.substring(0, rootFontSizeString.length - 2));

        const inputComputedStyle = window.getComputedStyle(inputRef.current!);

        const inputPaddingLeft = Number(
            inputComputedStyle.paddingLeft.substring(0, inputComputedStyle.paddingLeft.length - 2),
        );

        setInnerDivWidth(innerDivRef.current?.offsetWidth || 0);

        const spanClientWidth = spanRef.current?.getBoundingClientRect().width;

        setSpanWidth(spanClientWidth || 0);

        setInputWidth((innerDivWidth - spanWidth - inputPaddingLeft - 24) / rootFontSize);

        console.log('inputWidth:', inputWidth);
        console.log('inputPaddingLeft:', inputPaddingLeft);
        console.log('spanWidth:', spanWidth);
        console.log('innerDivWidth:', innerDivWidth);
        console.log('rootFontSize:', rootFontSize);
        console.log(typeof rootFontSize);

        console.log('userData.message:', userData.noInfo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData, spanWidth, inputWidth, userName]);

    return (
        <div
            className={`flex flex-row w-[20.44rem] h-[3.75rem] ${
                themeConfig[theme as keyof typeof themeConfig].bgSecondary
            } mt-[2.25rem] rounded-[0.94rem] items-center sm:w-[35.81rem] md:w-[45.63rem] md:h-[4.31rem] drop-shadow-lg min-h-[3.75rem]`}
        >
            <SearchIcon
                className="ml-[1rem] sm:ml-[2rem] min-w-[1.25rem] min-h-[1.25rem] shrink-0"
                // ref={iconRef}
            />
            <div className="grow whitespace-nowrap relative z-[-1]" ref={innerDivRef}>
                <input
                    placeholder="Search GitHub username…"
                    className={`text-[0.81rem] ${
                        themeConfig[theme as keyof typeof themeConfig].text
                    } ${
                        theme === 'light'
                            ? 'placeholder-github-queenBlue'
                            : 'placeholder-github-white'
                    } pl-[0.56rem] sm:pl-[1.5rem] box-border truncate ${
                        themeConfig[theme as keyof typeof themeConfig].bgSecondary
                    } ${userData.noInfo ? `w-[${inputWidth}rem]` : 'w-full'} ${`${
                        !searchFieldValue.trim() && 'w-full'
                    }`} outline-none`}
                    type="text"
                    onChange={onChangeHandler}
                    ref={inputRef}
                ></input>
                {userData.noInfo && (
                    <span
                        className="text-[0.81rem]   absolute right-[0.25rem] sm:right-[1.5rem] sm:text-[1rem] inline-block top-1/2 transform -translate-y-1/2  h-auto text-[#F74646] font-bold"
                        ref={spanRef}
                    >
                        No result
                    </span>
                )}
            </div>
            <button
                className={`min-w-[5.25rem] h-[2.88rem] bg-github-azure text-github-white rounded-[0.94rem] text-[0.88rem] sm:text-[1rem] leading-[1.56rem] font-bold mr-[0.5rem] sm:mr-[0.625rem] md:max-w-[6.63rem] md:max-h-[3.13rem] justify-self-center hover:bg-[#60ABFF]`}
                onClick={onClickHandler}
                // ref={buttonRef}
            >
                Search
            </button>
        </div>
    );
}
