import React from 'react';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center w-[20.44rem] h-[2.38rem] mt-[1.94rem] mx-auto">
            <span className="text-[1.63rem] font-space font-bold">devfinder</span>
            <div className="w-[4.88rem] flex flex-row justify-between items-center">
                <span className="text-[0.81rem] font-space font-bold uppercase text-github-queenBlue">
                    Dark
                </span>
                <Moon className="inline" />
            </div>
        </div>
    );
}
