import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { useEffect } from 'react'

import { ProductItem } from '../components/ProductList'
import { useSubscription } from '../contexts/SubscriptionContext'
import { api } from '../services/api'

import styles from '../styles/Home.module.scss'

import { FaRegQuestionCircle } from 'react-icons/fa'

type Product = {
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

interface ProductProps {
    products: Product[]
}

export default function Home({ products }: ProductProps) {

    const { offerId } = useSubscription()


    useEffect(() => {

        console.log( 'offerId', offerId )

        const inputs = document.querySelectorAll('input')

        inputs.forEach(input => {

            if ( Number( input.value ) != offerId) {

                input.checked = false

            }

        })

    }, [offerId])

    return (
        <>
            <Head>
                <title>Desafio Eduardo Leite</title>
            </Head>
            <section className={styles.mainContent}>
                <header>
                    <h2>Confira o seu plano:</h2>
                    <p>
                        <span>
                            fulano@meuemail.com.br
                        </span>
                    </p>
                </header>

                {
                    products.map(product => <ProductItem key={product.id} product={product} />)
                }



                <footer className={styles.productListFooter}>
                    <p>
                        <a>Sobre a cobrança <FaRegQuestionCircle fontSize="20px" />
                            <span className={styles.toolTip}>
                                Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Viva Forevis aptent taciti sociosqu ad litora torquent.
                            </span>
                        </a>
                    </p>

                    {
                        offerId !== 0 ? (
                            <p>
                                <Link href="/checkout">
                                    <a className="blueButton">
                                        Ir para pagamento
                                    </a>
                                </Link>
                            </p>
                        ) : ''
                    }

                </footer>
            </section>
        </>

    )
}

export const getStaticProps: GetStaticProps = async () => {

    try {
        const response = await api.get('/offer')

        const products = response.data.map(product => {
            return {
                id: product.id,
                title: product.title,
                description: product.description,
                listPrice: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(product.fullPrice),
                bestPrice: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(product.fullPrice - product.discountAmmount),
                save: product.discountPercentage * 100,
                installments: product.installments,
                installmentsValue: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format((product.fullPrice - product.discountAmmount) / product.installments),
                name: product.storeId
            }
        })

        return {
            props: {
                products
            },
            revalidate: 60 * 60 * 24 // one day
        }

    } catch (err) {
        console.error('Error', err)
    }

}