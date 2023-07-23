import { createContext, useEffect, useState } from 'react';
import React from 'react';
import { useContext } from 'react';

export interface UserData {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    userData: any;
    setUserData: React.Dispatch<React.SetStateAction<any>>;
}

export const UserDataContext = createContext<UserData>({
    userName: '',
    setUserName: () => {},
    userData: {},
    setUserData: () => {},
});

export interface DataProviderProps {
    children: React.ReactNode;
    value?: UserData;
}

export const useUserDataContext = () => useContext(UserDataContext);

export default function DataProvider({ children }: DataProviderProps) {
    const [userName, setUserName] = useState('octocat');

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}`);
                const data = await response.json();
                setUserData(data);

                console.log(data);
            } catch (err) {
                console.log('Failed to fetch data', err);
            }
        };

        fetchUser();
    }, [userName]);

    return (
        <UserDataContext.Provider value={{ userName, setUserName, userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}
