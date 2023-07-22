import React from 'react';
import './index.css';
import Header from '../src/components/Header';
import SearchBar from '../src/components/SearchBar';
import InfoBox from '../src/components/InfoBox';

import DataProvider from '../src/context/DataContext';
import ThemeProvider from '../src/context/ThemeContext';

import { useThemeContext } from '../src/context/ThemeContext';

function App() {
    const { theme, setTheme, themeConfig } = useThemeContext();
    return (
        <DataProvider>
            <ThemeProvider value={{ theme, setTheme, themeConfig }}>
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
            </ThemeProvider>
        </DataProvider>
    );
}

export default App;
