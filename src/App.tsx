import React from 'react';
import './index.css';
import Header from '../src/components/Header';
import SearchBar from '../src/components/SearchBar';

function App() {
    return (
        <div className="flex flex-col mx-auto mt-[1.94rem] sm:mt-[8.75rem] md:mt-[9rem] items-center font-space">
            <Header />
            <SearchBar />
        </div>
    );
}

export default App;
