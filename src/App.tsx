import React from 'react';
import './index.css';
import DataProvider from '../src/context/DataContext';
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
