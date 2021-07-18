import { render, screen, fireEvent, waitFor, getByText, findByRole, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mocked } from 'ts-jest/utils'

import Home, { getStaticProps } from '../../pages/index'

import axios from 'axios'
import { api } from '../../services/api'

jest.mock('../../services/api')

const products = [
    {
        id: 23,
        title: "fake title",
        description: "fake description",
        listPrice: 6000,
        bestPrice: 5400,
        save: 15,
        installments: "fake installments",
        installmentsValue: 450,
        name: "fake name"
    }
]


describe('Home Page', () => {

    it('Should be render list of products', async () => {

        render(<Home products={products} />)

        expect(screen.getByText('fake description')).toBeInTheDocument()

    })

    it('should not display go to payment button', () => {

        render(<Home products={products} />)

        expect(screen.queryByText('Ir para pagamento')).not.toBeInTheDocument()
    })

    it('should be retrieve initial data', async () => {

        api.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: [
                    {
                        "id":32,
                        "storeId":"anual_parcelado_iugu",
                        "title":"Premium Anual",
                        "description":"Parcelado",
                        "installments":12,
                    }
                ]
            })
        )

        const response = await getStaticProps({})

        expect(response).toMatchObject({
            props: {
                products: [{
                    "id":32,
                    "name":"anual_parcelado_iugu",
                    "title":"Premium Anual",
                    "description":"Parcelado",
                    "installments":12,
                }]
            },
            "revalidate": 86400
        })
    })

})