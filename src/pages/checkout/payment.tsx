import { PaymentForm } from '../../components/PaymentForm/PaymentForm'
import { ProductItem } from '../../components/ProductList'

import Image from 'next/image'

import mastercard from '../../../public/images/mastercard_flag.jpg'
import dinners from '../../../public/images/dinners_flag.jpg'
import american from '../../../public/images/american_flag.jpg'
import visa from '../../../public/images/visa_flag.jpg'
import elo from '../../../public/images/elo_flag.jpg'
import yugu from '../../../public/images/yugu.jpg'

import styles from './styles.module.scss'

export default function Checkout() {

    return (
        <div className={ styles.wrapperContainers }>
            <section className={styles.mainContent}>
                <header>
                    <h2>Estamos quase lá!</h2>
                    <p>Insira seus dados de pagamento abaixo:</p>
                </header>

                <div className={styles.paymentsCardsList}>
                    <ul>
                        <li>
                            <Image src={mastercard} alt="Bandeira Mastercard" />
                        </li>
                        <li>
                            <Image src={dinners} alt="Bandeira dinners" />
                        </li>
                        <li>
                            <Image src={american} alt="Bandeira american" />
                        </li>
                        <li>
                            <Image src={visa} alt="Bandeira visa" />
                        </li>
                        <li>
                            <Image src={elo} alt="Bandeira elo" />
                        </li>
                    </ul>
                    <small>Pagamentos por <Image src={yugu} alt="Logo Yugu" /></small>
                </div>

                <div className={styles.paymentForm}>
                    <PaymentForm />
                </div>
            </section>
        </div>
    )

}