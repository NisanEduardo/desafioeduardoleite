import { useSubscription } from '../../contexts/SubscriptionContext'

export default function SubscriptionSuccess () {

    const {
        title,
        description,
        bestPrice,
        installments,
        installmentsValue
    } = useSubscription()

    return (
        <h1>
            Sucesso na requisição
            
                {title}
                {description}
                {bestPrice}
                {installments}
                {installmentsValue}
            
        </h1>
    )

}