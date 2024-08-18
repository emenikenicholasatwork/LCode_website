"use client"
import { createContext, ReactNode, useContext, useState } from "react";


interface GlobalContextProps {
    closeTopHeader: boolean,
    toggleCloseTopHeader: () => void;
    openAuthComponent: () => void;
    closeAuthComponent: () => void;
    isShowAuthComponent: boolean;
}


const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [closeTopHeader, setCloseTopHeader] = useState(false);
    const [isShowAuthComponent, setIsShowAuthComponent] = useState(false);

    function openAuthComponent() {
        setIsShowAuthComponent(true);
    }
    function closeAuthComponent() {
        setIsShowAuthComponent(false)
    }
    function toggleCloseTopHeader() {
        setCloseTopHeader(true);
    }
    return (
        <GlobalContext.Provider
            value={{
                closeTopHeader,
                toggleCloseTopHeader,
                openAuthComponent,
                closeAuthComponent,
                isShowAuthComponent,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export function useGlobal(): GlobalContextProps {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error("useGlobal must be used with a global provider")
    }
    return context;
}
