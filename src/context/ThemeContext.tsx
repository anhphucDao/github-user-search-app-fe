import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';

const ThemeContext = createContext<{
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    themeConfig: ThemeConfigMap;
}>({
    theme: 'light',
    setTheme: () => {},
    themeConfig: {
        light: {
            bgPrimary: 'bg-github-ghostWhite',
            bgSecondary: 'bg-github-white',
            text: 'text-github-slateGray',
            svgFill: 'fill-[#4B6A9B]',
            themeIconFill: 'fill-[#222731]',
        },
        dark: {
            bgPrimary: 'bg-github-darkGunMetal',
            bgSecondary: 'bg-github-yankeesBlue',
            text: 'text-white',
            svgFill: 'fill-[#FFFFFF]',
            themeIconFill: 'fill-[#90A4D4]',
        },
    },
});

export interface DataProviderProps {
    children: React.ReactNode;
    value?: ThemeContextValue;
}

interface ThemeContextValue {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    themeConfig: ThemeConfigMap;
}

export interface ThemeConfig {
    bgPrimary: string;
    bgSecondary: string;
    text: string;
    svgFill: string;
    themeIconFill: string;
}

export interface ThemeConfigMap {
    light: ThemeConfig;
    dark: ThemeConfig;
}

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: DataProviderProps) {
    const themeConfig: ThemeConfigMap = {
        light: {
            bgPrimary: 'bg-github-ghostWhite',
            bgSecondary: 'bg-github-white',
            text: 'text-github-slateGray',
            svgFill: 'fill-[#4B6A9B]',
            themeIconFill: 'fill-[#222731]',
        },

        dark: {
            bgPrimary: 'bg-github-darkGunMetal',
            bgSecondary: 'bg-github-yankeesBlue',
            text: 'text-github-white',
            svgFill: 'fill-[#FFFFFF]',
            themeIconFill: 'fill-[#90A4D4]',
        },
    };

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeConfig }}>
            {children}
        </ThemeContext.Provider>
    );
}
