import React from 'react';
import './index.css';
// import Header from '../src/components/Header';
// import SearchBar from '../src/components/SearchBar';
// import InfoBox from '../src/components/InfoBox';

import DataProvider from '../src/context/DataContext';

// import ContextProvider from './context/ContextProvider';
import ThemeProvider from '../src/context/ThemeContext';

import { useThemeContext } from '../src/context/ThemeContext';

import { useEffect } from 'react';

import Main from './components/Main';

function App() {
    const { theme, themeConfig, setTheme } = useThemeContext();

    console.log('theme:', theme);
    console.log(
        ' themeConfig[theme as keyof typeof themeConfig].bgPrimary:',
        themeConfig[theme as keyof typeof themeConfig].bgPrimary,
    );

    useEffect(() => {
        console.log('theme:', theme);
        console.log(
            ' themeConfig[theme as keyof typeof themeConfig].bgPrimary:',
            themeConfig[theme as keyof typeof themeConfig].bgPrimary,
        );
    }, [theme, themeConfig]);

    return (
        <ThemeProvider value={{ theme, themeConfig, setTheme }}>
            <DataProvider>
                <Main />
            </DataProvider>
        </ThemeProvider>
    );
}

export default App;
