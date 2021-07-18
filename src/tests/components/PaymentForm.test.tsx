import { render, fireEvent, screen, act } from '@testing-library/react'

import { PaymentForm } from '../../components/PaymentForm'
import { useRouter } from 'next/router'
import { mocked } from 'ts-jest/utils'

jest.mock('next/router')

describe('Payment Form', () => {

    it('should render payment form', () => {

        render(<PaymentForm />)

        expect(screen.getByRole('form')).toBeInTheDocument()
    })

})