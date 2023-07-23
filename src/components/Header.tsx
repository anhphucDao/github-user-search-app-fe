import React from 'react';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../assets/icon-sun.svg';
import { useThemeContext } from '../context/ThemeContext';

import { useEffect } from 'react';

export default function Header() {
    const { theme, setTheme, themeConfig } = useThemeContext();

    const themeSwitchHandler = () => {
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        console.log("Header's theme: ", theme);
    }, [theme]);

    return (
        <div className="flex flex-row justify-between items-center w-[20.44rem] h-[2.38rem] sm:w-[35.81rem] md:w-[45.63rem] ">
            <span
                className={`text-[1.63rem] font-space font-bold ${
                    theme === 'light' ? 'text-black' : 'text-github-white'
                }`}
            >
                devfinder
            </span>
            {theme === 'light' ? (
                <div className="w-[4.88rem] flex flex-row justify-between items-center">
                    <span
                        className={`text-[0.81rem] font-space font-bold uppercase hover:text-[#222731] ${
                            themeConfig[theme as keyof typeof themeConfig].text
                        }`}
                    >
                        Dark
                    </span>
                    <Moon
                        className={`inline hover:cursor-pointer fill-github-slateGray hover:fill-[#222731]`}
                        onClick={themeSwitchHandler}
                    />
                </div>
            ) : (
                <div className="w-[4.88rem] flex flex-row justify-between items-center">
                    <span
                        className={`text-[0.81rem] font-space font-bold uppercase hover:text-[#90A4D4] ${
                            themeConfig[theme as keyof typeof themeConfig].text
                        }`}
                    >
                        Light
                    </span>
                    <Sun
                        className={`inline hover:cursor-pointer fill-github-white hover:fill-[#90A4D4]`}
                        onClick={themeSwitchHandler}
                    />
                </div>
            )}
        </div>
    );
}
