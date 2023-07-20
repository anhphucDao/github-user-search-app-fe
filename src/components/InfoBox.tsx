import React from 'react';
import { ReactComponent as LocationIcon } from '../assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from '../assets/icon-twitter.svg';
import { ReactComponent as WebsiteIcon } from '../assets/icon-website.svg';
import { ReactComponent as CompanyIcon } from '../assets/icon-company.svg';

import { ReactComponent as DefaultAvatar } from '../assets/Oval.svg';

export default function InfoBox() {
    return (
        <div className="flex flex-col w-[20.44rem] h-[32.31rem] sm:w-[35.81rem] sm:h-[30.06rem] md:w-[45.63rem] md:h-[27.75rem] rounded-[0.94rem] drop-shadow-lg bg-github-white mt-[1rem] sm:mt-[1.5rem] mb-[5rem] sm:mb-[14.75rem] md:mb-[9rem]">
            <div className="flex flex-row mt-[2rem] order-1 items-center md:mt-[3rem] ">
                {/* <img
                    alt="user-avatar"
                    className="w-[4.38rem] h-[4.38rem] rounded-[0.94rem]"
                    src="../assets/Oval.jpg"
                ></img> */}
                <DefaultAvatar className="w-[4.38rem] h-[4.38rem] ml-[1.5rem] sm:w-[7.25rem] sm:h-[7.25rem]" />
                <div className="flex flex-col grow ml-[1.25rem] justify-center md:grid md:grid-cols-2 md:self-start ">
                    <div className="text-[1.63rem] font-bold md:order-1">The Octocat</div>
                    <div className="text-[1rem] text-github-azure md:order-3">@octocat</div>
                    <div className="text-[1rem] text-github-slateGray md:order-2 md:justify-self-start md:self-center">
                        Joined 25 Jan 2011
                    </div>
                </div>
            </div>
            <div className="order-2 mx-auto text-left text-[0.75rem] text-github-slateGray mt-[2rem] w-[17.44rem] sm:w-[30.81rem] md:w-[30rem] h-[4.69rem] sm:h-[3.13rem] md:ml-[10rem] md:mt-[-2.5rem] md:py-0">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                volutpat mattis eros.
            </div>
            <div className="flex flex-row w-[17.44rem] h-[5.31rem] items-center order-3 bg-github-ghostWhite mx-auto rounded-[0.63rem] justify-evenly text-[1rem] mt-[1.44rem] sm:w-[30.81rem] sm:h-[5.31rem]  md:ml-[10rem]">
                <div className="flex flex-col place-items-center">
                    <div className="text-github-queenBlue text-[0.75rem] sm:text-[1rem]">Repos</div>
                    <div className="font-bold text-github-gunMetal">8</div>
                </div>
                <div className="flex flex-col place-items-center">
                    <div className="text-github-queenBlue text-[0.75rem] sm:text-[1rem]">
                        Followers
                    </div>
                    <div className="font-bold text-github-gunMetal">3938</div>
                </div>
                <div className="flex flex-col place-items-center">
                    <div className="text-github-queenBlue text-[0.75rem] sm:text-[1rem]">
                        Following
                    </div>
                    <div className="font-bold text-github-gunMetal">9</div>
                </div>
            </div>
            <div className="flex flex-col order-4 mt-[1.5rem] w-[17.44rem] h-[7.94rem] ml-[1.5rem] text-[0.875rem] sm:text-[1rem] justify-between text-github-queenBlue mb-[3rem] sm:grid sm:grid-cols-2 sm:ml-[2.5rem] sm:w-[26.81rem] sm:h-[3.94rem] sm:gap-x-[4.06rem] sm:gap-y-[1rem] md:ml-[10rem]">
                <div className="flex flex-row h-full items-center sm:order-1">
                    <LocationIcon />
                    <span className="ml-[1.2rem]">San Francisco</span>
                </div>
                <div className="flex flex-row h-full w-full items-center sm:order-3 sm:min-w-min">
                    <WebsiteIcon />
                    <span className="ml-[0.813125rem]">https://github.blog</span>
                </div>
                <div className="flex flex-row h-full items-center opacity-50 sm:order-2">
                    <TwitterIcon />
                    <span className="ml-[0.81rem]">Not Available</span>
                </div>
                <div className="flex flex-row h-full items-center sm:order-4">
                    <CompanyIcon />
                    <span className="ml-[0.81rem]">@github</span>
                </div>
            </div>
        </div>
    );
}
