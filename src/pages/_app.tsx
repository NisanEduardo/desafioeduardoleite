import { Header } from '../components/Header'
import { SubscriptionContextProvider } from '../contexts/SubscriptionContext'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

    return (
        <SubscriptionContextProvider>
            <div className="container">
                <Header />
                <Component {...pageProps} />
            </div>
        </SubscriptionContextProvider>
    )
}

export default MyApp