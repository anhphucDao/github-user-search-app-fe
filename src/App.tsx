import React from 'react';
import './index.css';
import Header from '../src/components/Header';
import SearchBar from '../src/components/SearchBar';
import InfoBox from '../src/components/InfoBox';

import DataProvider from '../src/context/DataContext';

function App() {
    return (
        <div className="flex flex-col mx-auto mt-[1.94rem] sm:mt-[8.75rem] md:mt-[9rem] items-center font-space h-[41.6875rem]">
            <DataProvider>
                <Header />
                <SearchBar />
                <InfoBox />
            </DataProvider>
        </div>
    );
}

export default App;
