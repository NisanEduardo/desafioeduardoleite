import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useEffect } from 'react'
import { useState } from 'react'

import formSchema from './paymentFormSchema'

import styles from './styles.module.scss'

interface FormValues {
    offerId: number
    userId: number
    id: number
    gateway: string
}

export function PaymentForm() {

    const [ formValues, setFormValues ] = useState({
        productoId: 18,
        userId: 1,
        id: 1,
        gateway: 'iugu',
    })


    function onSubmit(values, actions) {

        setFormValues({
            ...formValues,
            ...values
        })

    }

    useEffect( () => {

        console.log( 'form values',  formValues )

    }, [formValues])


    return (
        <div className={styles.paymentForm}>
            <Formik
                // validate={validate}
                validationSchema={formSchema}
                onSubmit={onSubmit}
                initialValues={{
                    creditCardNumber: '',
                    creditCardExpirationDate: '',
                    creditCardCVV: '',
                    creditCardHolder: '',
                    creditCardCPF: '',
                    couponCode: '',
                    installments: 0
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    isValid
                }) => (
                    <Form>
                        <div className="formGroup">
                            <label htmlFor="creditCardNumber">Número do cartão</label>
                            <Field
                                type="text"
                                name="creditCardNumber"
                                id="creditCardNumber"
                                placeholder="0000 0000 0000 0000"
                            />
                            {errors.creditCardNumber && touched.creditCardNumber && (
                                <span className={styles.errorMessage}>
                                    <ErrorMessage name="creditCardNumber" />
                                </span>
                            )}
                        </div>

                        <div className="formGroup twoCols">
                            <div>
                                <label htmlFor="creditCardExpirationDate">Validade</label>
                                <Field
                                    type="text"
                                    name="creditCardExpirationDate"
                                    id="creditCardExpirationDate"
                                    placeholder="MM/AA"
                                    maxLength="5"
                                />
                                {errors.creditCardExpirationDate && touched.creditCardExpirationDate && (
                                    <span className={styles.errorMessage}>
                                        <ErrorMessage name="creditCardExpirationDate" />
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="creditCardCVV">CVV</label>
                                <Field
                                    type="text"
                                    name="creditCardCVV"
                                    id="creditCardCVV"
                                    placeholder="000"
                                    maxLength="3"
                                />
                                {errors.creditCardCVV && touched.creditCardCVV && (
                                    <span className={styles.errorMessage}>
                                        <ErrorMessage name="creditCardCVV" />
                                    </span>
                                )}
                            </div>
                        </div>


                        <div className="formGroup">
                            <label htmlFor="creditCardHolder">Nome impresso no cartão</label>
                            <Field
                                type="text"
                                name="creditCardHolder"
                                id="creditCardHolder"
                                placeholder="Seu nome"
                            />
                            {errors.creditCardHolder && touched.creditCardHolder && (
                                <span className={styles.errorMessage}>
                                    <ErrorMessage name="creditCardHolder" />
                                </span>
                            )}
                        </div>

                        <div className="formGroup">
                            <label htmlFor="creditCardCPF">CPF</label>
                            <Field
                                type="text"
                                name="creditCardCPF"
                                id="creditCardCPF"
                                placeholder="000.000.000-00"
                            />
                            {errors.creditCardCPF && touched.creditCardCPF && (
                                <span className={styles.errorMessage}>
                                    <ErrorMessage name="creditCardCPF" />
                                </span>
                            )}
                        </div>

                        <div className="formGroup">
                            <label htmlFor="couponCode">Cupom</label>
                            <Field
                                type="text"
                                name="couponCode"
                                id="couponCode"
                                placeholder="Insira aqui"
                            />
                        </div>


                        <div className="formGroup">
                            <label htmlFor="installments">Número de parcelas</label>
                            <Field as="select"
                                name="installments"
                                id="installments"
                                value={values.installments}
                                placeholder="Selecionar"
                            // onChange={handleChange}
                            >
                                <option label="Selecionar" />
                                <option value="1" label="1" />
                                <option value="2" label="2" />
                                <option value="3" label="3" />
                                <option value="4" label="4" />
                                <option value="5" label="5" />
                                <option value="6" label="6" />
                                <option value="7" label="7" />
                                <option value="8" label="8" />
                                <option value="9" label="9" />
                                <option value="10" label="10" />
                                <option value="11" label="11" />
                                <option value="12" label="12" />
                            </Field>
                            {errors.installments && (
                                <span className={styles.errorMessage}>
                                    <ErrorMessage name="installments" />
                                </span>
                            )}
                        </div>

                        <button type="submit" className="blueButton" disabled={!isValid}>
                            Finalizar pagamento
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}