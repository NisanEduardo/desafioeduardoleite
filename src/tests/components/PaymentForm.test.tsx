import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { PaymentForm } from '../../components/PaymentForm'

describe( 'Payment Form', ()  => {

    it('should render payment form', () => {

        render(<PaymentForm />)

        expect(screen.getByRole( 'form' ) ).toBeInTheDocument()
    })

})