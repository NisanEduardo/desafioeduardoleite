import { screen, render } from "@testing-library/react"
import { ProductItem } from '../../components/ProductList'

const product = {
    id: 22,
    title: "fake title",
    description: "fake description",
    listPrice: "R$ 6450,00",
    bestPrice: "R$ 3000,00",
    save: "15",
    installments: "12",
    installmentsValue: "R$ 45,00",
    name: "Fake name",
}


describe('Product List', () => {

    it('should render list of products', () => {

        render(<ProductItem product={product} />)

        expect(screen.queryByText(product.title)).toBeInTheDocument()
        expect(screen.queryByText(product.description)).toBeInTheDocument()
        expect(screen.queryByText(`De ${product.listPrice}`)).toBeInTheDocument()
        expect(screen.queryByText(`Por ${product.bestPrice}`)).toBeInTheDocument()
        expect(screen.queryByText(`-${product.save}%`)).toBeInTheDocument()
    })

})