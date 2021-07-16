import Link from 'next/link'
import { useSubscription } from '../../contexts/SubscriptionContext'

import { BsCheck } from 'react-icons/bs'
import { TiStarOutline } from 'react-icons/ti'

import subscriptionSuccess from './subscriptionSuccess.module.scss'
import { useEffect } from 'react'

export default function SubscriptionSuccess() {

    const {
        title,
        description,
        bestPrice,
        installments,
        installmentsValue,
        formValues
    } = useSubscription()

    useEffect( () => {
        console.log({
            title,
            description,
            bestPrice,
            installments,
            installmentsValue,
            formValues
        })
    }, [])

    const cpfFormat = ( value ) => {
        value = value.replace(/[^\d]/g, '')

        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    }

    return (
        <div className={subscriptionSuccess.mainContent}>
            <header>
                <div className={subscriptionSuccess.successIcon}>
                    <BsCheck style={{
                        fontSize: "4rem"
                    }} />
                </div>
                <h2>Parabéns!</h2>
                <p>Sua assinatura foi realizada com sucesso.</p>
            </header>

            <section className={subscriptionSuccess.subscribeInfos}>
                <div className={subscriptionSuccess.offerInfos} >
                    <div className={subscriptionSuccess.offerInfosLeft}>
                        <div className={subscriptionSuccess.starIcon}>
                            <TiStarOutline style={{ fontSize: "2.5rem", opacity: ".9" }} />
                        </div>
                    </div>

                    <div className={subscriptionSuccess.offerInfosRight}>
                        <p><span>{title}</span> <span>{description}</span></p>
                        <p><span>{bestPrice}</span> <span>{installments}x {installmentsValue}</span></p>
                    </div>
                </div>

                <div className={subscriptionSuccess.customerInfos} >
                    <p>
                        <span>E-mail:</span>
                        <span>fulano@meuemail.com.br</span>
                    </p>

                    <p>
                        <span>CPF</span>
                        <span>{ cpfFormat( formValues.creditCardCPF )}</span>
                    </p>
                </div>
            </section>

            <footer className={subscriptionSuccess.footer}>
                <p>
                    <Link href="/">
                        <a>
                            Gerenciar assinatura
                        </a>
                    </Link>
                </p>
                <p>
                    <Link href="/">
                        <a className="blueButton">
                            IR PARA A HOME
                        </a>
                    </Link>
                </p>
            </footer>
        </div>
    )

}