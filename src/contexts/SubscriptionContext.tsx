import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";

import { api } from '../services/api'

import { useRouter } from 'next/router'

interface SubscriptionContextData {
    offerId: number
    title: string
    description: string
    bestPrice: string
    installments: string
    installmentsValue: string
    btnIsVisible: boolean
    formValues: {
        creditCardCPF: string
    }
    chooseSubscription: (productId: number, title: string, description: string, bestPrice: string, installments: string, installmentsValue: string ) => void 
    confirmPayment: ( values: object ) => void
    handleBtnGoPaymentStatus: () => void
}

interface SubscriptionProviderProps {
    children: ReactNode
}

export const SubscriptionContext = createContext({} as SubscriptionContextData )

export function SubscriptionContextProvider({ children }: SubscriptionProviderProps ) {
    const [ offerId, setOfferId ] = useState( 0 )
    const [ title, setTitle ] = useState( "" )
    const [ description, setDescription ] = useState( "" )
    const [ bestPrice, setBestPrice ] = useState( "" )
    const [ installments, setInstallments ] = useState( "" )
    const [ installmentsValue, setInstallmentsValue ] = useState( "" )
    const [ btnIsVisible, setBtnIsVisible ] = useState(false)

    const [ formValues, setFormValues ] = useState({
        offerId,
        userId: 1,
        id: 1,
        gateway: 'iugu',
        creditCardCPF: ''
    })

    const router = useRouter()

    // get values about signature choosed 
    function chooseSubscription (
        productId: number,
        title: string,
        description: string,
        bestPrice: string,
        installments: string,
        installmentsValue: string
    ) {

        setOfferId( productId )
        setTitle( title )
        setDescription( description )
        setBestPrice( bestPrice )
        setInstallments( installments)
        setInstallmentsValue( installmentsValue )
    }

    // show "go to payment button"
    function handleBtnGoPaymentStatus() {
        setBtnIsVisible( true )
    }

    // set form values and post on database
    async function confirmPayment(values) {

        setFormValues({
            ...formValues,
            ...values
        })

        try {
            const response = await api.post( '/subscription', formValues )

            if( response.status == 200 ) {
                router.push('subscriptionSuccess')
            }

        } catch ( err ) {
            alert( 'N??o foi poss??vel confirmar seu pagamento. Tente novamente mais tarde.' )
            console.error( 'Ocorreu um erro', err )

        }
    }

    return (
        <SubscriptionContext.Provider
            value={{
                chooseSubscription,
                handleBtnGoPaymentStatus,
                offerId,
                title,
                description,
                bestPrice,
                installments,
                installmentsValue,
                btnIsVisible,
                confirmPayment,
                formValues
            }}
        >
            { children }
        </SubscriptionContext.Provider>
    )

}

export const useSubscription = () => {

    return useContext( SubscriptionContext )

}