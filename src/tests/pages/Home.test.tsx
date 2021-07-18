import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'

import Home, { getStaticProps } from '../../pages/index'

import { api } from '../../services/api'

const products = [
    {
        id: 23,
        title: "fake title",
        description: "fake description",
        listPrice: "fake listPrice",
        bestPrice: "fake bestPrice",
        save: "fake save",
        installments: "fake installments",
        installmentsValue: "fake installmentsValue",
        name: "fake name"
    }
]

jest.mock( '../../services/api.ts' )


describe('Home Page', () => {

    it( 'Should be render list of products', async () => {

        render(<Home products={products} />)
        
        expect( screen.getByText( 'fake description' ) ).toBeInTheDocument()

    })

})