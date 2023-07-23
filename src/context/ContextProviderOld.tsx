// import ThemeProvider from './ThemeContext';
// import DataProvider from './DataContext';

// import { useThemeContext } from './ThemeContext';
// import { useUserDataContext } from './DataContext';

// import React from 'react';

// export default function ContextProvider({ children }: { children: React.ReactNode }) {
//     const { theme, setTheme, themeConfig } = useThemeContext();
//     const { userName, setUserName, userData, setUserData } = useUserDataContext();

//     return (
//         <>
//             <ThemeProvider value={{ theme, setTheme, themeConfig }}>
//                 <DataProvider value={{ userName, setUserName, userData, setUserData }}>
//                     {children}
//                 </DataProvider>
//             </ThemeProvider>
//         </>
//     );
// }
