import Link from 'next/link'
import { useSubscription } from '../../contexts/SubscriptionContext'

import subscriptionSuccess from './subscriptionSuccess.module.scss'

export default function SubscriptionSuccess() {

    const {
        title,
        description,
        bestPrice,
        installments,
        installmentsValue,
        formValues
    } = useSubscription()

    return (
        <div className={subscriptionSuccess.mainContent}>
            <header>
                <div className={subscriptionSuccess.successIcon}>V</div>
                <h3>Parabéns!</h3>
                <p>Sua assinatura foi realizada com sucesso.</p>
            </header>

            <section className={ subscriptionSuccess.subscribeInfos }>
                <div className={ subscriptionSuccess.offerInfos } >
                    <div className={ subscriptionSuccess.offerInfosLeft }>
                        <div className={ subscriptionSuccess.starIcon }>
                            Ico
                        </div>
                    </div>

                    <div className={ subscriptionSuccess.offerInfosRight }>
                        <p>{title}Anual | Parcelado{description}</p>
                        <p>{bestPrice}R$ 479,90 | {installments}10x R$ 47,99{installmentsValue}</p>
                    </div>
                </div>

                <div className={ subscriptionSuccess.customerInfos } >
                    <p>
                        <span>E-mail:</span>
                        <span>fulano@meuemail.com.br</span>
                    </p>

                    <p>
                        <span>CPF</span>
                        <span>{formValues.creditCardCPF}000.000.000-00</span>
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
                            Ir para a home
                        </a>
                    </Link>
                </p>
            </footer>
        </div>
    )

}