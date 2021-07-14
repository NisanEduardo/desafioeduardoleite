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
                                maxLength="16"
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
                                maxLength="11"
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
                                {
                                    offerId == 32 ?
                                    (
                                        <option value="1" label="1" />
                                    ) :
                                    (
                                        <option value="10" label="10" />
                                    )
                                }
                                
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



<div className="formGroup twoCols">
                    <div>
                        <label htmlFor="creditCardExpirationDate">Validade</label>
                        <input
                            type="text"
                            name="creditCardExpirationDate"
                            id="creditCardExpirationDate"
                            placeholder="MM/AA"
                        />
                    </div>

                    <div>
                        <label htmlFor="creditCardCVV">CVV</label>
                        <input
                            type="text"
                            name="creditCardCVV"
                            id="creditCardCVV"
                            placeholder="000"
                        />
                    </div>
                </div>


                <div className="formGroup">
                    <label htmlFor="creditCardHolder">Nome impresso no cartão</label>
                    <input
                        type="text"
                        name="creditCardHolder"
                        id="creditCardHolder"
                        placeholder="Seu nome"
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="creditCardCPF">CPF</label>
                    <input
                        type="text"
                        name="creditCardCPF"
                        id="creditCardCPF"
                        placeholder="000.000.000-00"
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="couponCode">Cupom</label>
                    <input
                        type="text"
                        name="couponCode"
                        id="couponCode"
                        placeholder="Insira aqui"
                    />
                </div>


                <div className="formGroup">
                    <label htmlFor="installments">Número de parcelas</label>
                    <select
                        name="installments"
                        id="installments"
                        placeholder="Selecionar"
                    // onChange={handleChange}
                    >
                        {
                            offerId == 33 ?
                                (
                                    <option value="1" label="1" />
                                ) :
                                (
                                    <option value="12" label="12" />
                                )
                        }

                    </select>
                </div>