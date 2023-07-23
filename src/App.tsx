import React from 'react';
import './index.css';
import Header from '../src/components/Header';
import SearchBar from '../src/components/SearchBar';
import InfoBox from '../src/components/InfoBox';

function App() {
    return (
        <div className="flex flex-col mx-auto mt-[1.94rem] sm:mt-[8.75rem] md:mt-[9rem] items-center font-space h-[41.6875rem]">
            <Header />
            <SearchBar />
            <InfoBox />
        </div>
    );
}

export default App;
