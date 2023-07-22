import React, { useState, createContext, useContext, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';

const ThemeContext = createContext<{
    theme: string;
    setTheme: () => void;
    themeConfig: ThemeConfigMap;
}>({
    theme: 'light',
    setTheme: () => {},
    themeConfig: {
        light: {
            bgPrimary: 'bg-white',
            bgSecondary: 'bg-gray-200',
            text: 'text-gray-800',
            svgFill: 'fill-current',
            themeIconFill: 'fill-current',
        },
        dark: {
            bgPrimary: 'bg-black',
            bgSecondary: 'bg-gray-800',
            text: 'text-white',
            svgFill: 'fill-current',
            themeIconFill: 'fill-current',
        },
    },
});

export interface DataProviderProps {
    children: React.ReactNode;
    value: ThemeContextValue;
}

interface ThemeContextValue {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    themeConfig: ThemeConfigMap;
}

interface ThemeConfig {
    bgPrimary: string;
    bgSecondary: string;
    text: string;
    svgFill: string;
    themeIconFill: string;
}

interface ThemeConfigMap {
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
            themeIconFill: 'fill-[#FFFFFF]',
        },
    };

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    setTheme(theme === 'light' ? 'dark' : 'light');

    return <ThemeProvider value={{ theme, setTheme, themeConfig }}>{children}</ThemeProvider>;
}
