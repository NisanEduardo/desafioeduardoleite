import styles from './styles.module.scss'

import { useSubscription } from '../../contexts/SubscriptionContext'

interface ProductItemProps {
    product: {
        id: number
        title: string
        description: string
        listPrice: string
        bestPrice: string
        save: string
        installments: string
        installmentsValue: string
        name: string
    }
}

export function ProductItem( props: ProductItemProps ) {
    const {
        chooseSubscription
    } = useSubscription()

    return (
        <article key={props.product.id} className={styles.productListItem}>
            <h3>{props.product.title}  |  {props.product.description}</h3>
            <div className={styles.pricesDescription} >
                <p>
                    <span className={styles.listPrice}>De {props.product.listPrice} </span>
                    <span className={styles.bestPrice}>Por {props.product.bestPrice}</span>
                    <span className={styles.savePrice}> -{props.product.save}%</span>
                    <input
                        type="checkbox"
                        value={props.product.id}
                        id={props.product.name}
                        onChange={ () => { chooseSubscription( props.product.id ) } }
                    />
                </p>
            </div>

            {
                props.product.name === 'anual_parcelado_iugu' && (

                    <div className={styles.pricesInstallments} >
                        <p>
                            <span>{props.product.installments}x de {props.product.installmentsValue}/mês</span>
                        </p>
                    </div>
                )
            }
        </article>
    )

}