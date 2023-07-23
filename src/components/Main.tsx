import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

import Header from './Header';
import SearchBar from './SearchBar';
import InfoBox from './InfoBox';

export default function Main() {
    const { theme, themeConfig } = useThemeContext();

    return (
        <div
            className={`min-h-screen min-w-full ${
                themeConfig[theme as keyof typeof themeConfig].bgPrimary
            } flex-1 flex`}
        >
            <div className="flex flex-col mx-auto my-auto mt-[1.94rem] sm:mt-[8.75rem] md:mt-[9rem] items-center font-space h-[41.6875rem] max-h-[41.6875rem] mb-[5rem]">
                <Header />
                <SearchBar />
                <InfoBox />
            </div>
        </div>
    );
}
