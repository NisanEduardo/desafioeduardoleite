import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";

import { useSubscription } from '../../contexts/SubscriptionContext'

import styles from './styles.module.scss'

export function PaymentForm() {

    const {
        confirmPayment,
        offerId,
    } = useSubscription()

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()


    function onSubmit(data) {
        const formValues = { ...data, offerId }
        confirmPayment(formValues)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.paymentForm} role="form">
            <div className="formGroup">
                <label htmlFor="creditCardNumber">Número do cartão</label>
                <Controller
                    control={control}
                    name="creditCardNumber"
                    rules={{
                        required: true,
                        pattern: /[0-9]{16}/
                    }}
                    render={({ field }) => {
                        return <InputMask
                            name="creditCardNumber"
                            type="tel"
                            id="creditCardNumber"
                            placeholder="0000 0000 0000 0000"
                            mask="9999 9999 9999 9999"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value.replace(/ /g, ''))}
                        />
                    }}
                />
                {errors.creditCardNumber && errors.creditCardNumber.type === "required" && <span className={styles.errorMessage}>Campo obrigatório</span>}
                {errors.creditCardNumber && errors.creditCardNumber.type === "pattern" && <span className={styles.errorMessage}>Este campo necessita 16 dígitos</span>}
            </div>


            <div className="formGroup twoCols">
                <div>
                    <label htmlFor="creditCardExpirationDate">Validade</label>
                    <Controller
                        control={control}
                        name="creditCardExpirationDate"
                        rules={{
                            required: true,
                            pattern: /^(0[1-9]|1[0-2])\/\d{2}$/
                        }}
                        render={({ field }) => {
                            return <InputMask
                                type="text"
                                name="creditCardExpirationDate"
                                id="creditCardExpirationDate"
                                mask="99/99"
                                placeholder="MM/AA"
                                {...field}
                            />
                        }}
                    />
                    {errors.creditCardExpirationDate && errors.creditCardExpirationDate.type === "required" && <span className={styles.errorMessage}>Campo obrigatório</span>}
                    {errors.creditCardExpirationDate && errors.creditCardExpirationDate.type === "pattern" && <span className={styles.errorMessage}>Insira uma data no formato MM/AA</span>}
                </div>

                <div>
                    <label htmlFor="creditCardCVV">CVV</label>
                    <Controller
                        name="creditCardCVV"
                        control={control}
                        rules={{
                            required: true,
                            pattern: /[0-9]{3}/
                        }}
                        render={({ field }) => {
                            return <InputMask
                                name="creditCardCVV"
                                id="creditCardCVV"
                                type="tel"
                                placeholder="000"
                                mask="999"
                                {...field}
                            />
                        }}
                    />
                    {errors.creditCardCVV && errors.creditCardCVV.type === "required" && <span className={styles.errorMessage}>Campo obrigatório</span>}
                    {errors.creditCardCVV && errors.creditCardCVV.type === "pattern" && <span className={styles.errorMessage}>Este campo necessita 3 dígitos</span>}
                </div>
            </div>

            <div className="formGroup">
                <label htmlFor="creditCardHolder">Nome impresso no cartão</label>
                <Controller
                    control={control}
                    name="creditCardHolder"
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => {
                        return <InputMask
                            name="creditCardHolder"
                            id="creditCardHolder"
                            type="text"
                            placeholder="Seu nome"
                            {...field}
                        />
                    }}
                />
                {errors.creditCardHolder && errors.creditCardHolder.type === "required" && <span className={styles.errorMessage}>Campo obrigatório</span>}
            </div>


            <div className="formGroup">
                <label htmlFor="creditCardCPF">CPF</label>
                <Controller
                    control={control}
                    name="creditCardCPF"
                    rules={{
                        required: true,
                        pattern: /[0-9]{11}/
                    }}
                    render={({ field }) => {
                        return <InputMask
                            name="creditCardCPF"
                            id="creditCardCPF"
                            type="tel"
                            placeholder="000.000.000-00"
                            mask="999.999.999-99"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value.replace(/\./g, '').replace(/-/g, ''))}
                        />
                    }}
                />
                {errors.creditCardCPF && errors.creditCardCPF.type === "required" && <span className={styles.errorMessage}>Campo obrigatório</span>}
                {errors.creditCardCPF && errors.creditCardCPF.type === "pattern" && <span className={styles.errorMessage}>Este campo necessita 11 dígitos</span>}
            </div>

            <div className="formGroup">
                <label htmlFor="couponCode">Cupom</label>
                <Controller
                    control={control}
                    name="couponCode"
                    rules={{
                        required: false
                    }}
                    render={({ field }) => {
                        return <InputMask
                            name="couponCode"
                            id="couponCode"
                            type="text"
                            placeholder="Insira aqui"
                            {...field}
                        />
                    }}
                />
            </div>

            <div className="formGroup">
                <label htmlFor="installments">Número de parcelas</label>
                <select
                    name="installments"
                    id="installments"
                    placeholder="Selecionar"
                >
                    {
                        offerId == 33 ?
                            (
                                <option value="1" label="1" />
                            ) :
                            (
                                <option value="10" label="12" />
                            )
                    }
                </select>
            </div>

            <button type="submit" className="blueButton">
                Finalizar pagamento
            </button>
        </form>
    );
}
