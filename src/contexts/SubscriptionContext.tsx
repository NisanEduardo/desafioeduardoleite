import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";

interface SubscriptionContextData {
    offerId: number
    chooseSubscription: (productId: number ) => void 
}

interface SubscriptionProviderProps {
    children: ReactNode
}

export const SubscriptionContext = createContext({} as SubscriptionContextData )

export function SubscriptionContextProvider({ children }: SubscriptionProviderProps ) {
    const [ offerId, setOfferId ] = useState( 0 )

    function chooseSubscription ( productId: number ) {
        setOfferId( productId )
    }

    return (
        <SubscriptionContext.Provider
            value={{
                chooseSubscription,
                offerId
            }}
        >
            { children }
        </SubscriptionContext.Provider>
    )

}

export const useSubscription = () => {

    return useContext( SubscriptionContext )

}