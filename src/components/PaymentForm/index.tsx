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


    function onSubmit( data ) {

        const formValues = { ...data, offerId }
        
        confirmPayment( formValues )

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={ styles.paymentForm } role="form">
            <div className="formGroup">
                <label htmlFor="creditCardNumber">Número do cartão</label>
                <Controller
                    as={InputMask}
                    control={control}
                    name="creditCardNumber"
                    id="creditCardNumber"
                    type="tel"
                    rules={{
                        required: true,
                        pattern: /[0-9]{16}/
                    }}
                    render={({ field }) => {
                        return <InputMask
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
                        as={InputMask}
                        control={control}
                        name="creditCardExpirationDate"
                        id="creditCardExpirationDate"
                        type="text"
                        rules={{
                            required: true,
                            pattern: /^(0[1-9]|1[0-2])\/\d{2}$/
                        }}
                        render={({ field }) => {
                            return <InputMask
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
                        as={InputMask}
                        control={control}
                        name="creditCardCVV"
                        id="creditCardCVV"
                        type="tel"
                        rules={{
                            required: true,
                            pattern: /[0-9]{3}/
                        }}
                        render={({ field }) => {
                            return <InputMask
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
                    as={InputMask}
                    control={control}
                    name="creditCardHolder"
                    id="creditCardHolder"
                    type="text"
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => {
                        return <InputMask
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
                    as={InputMask}
                    control={control}
                    name="creditCardCPF"
                    id="creditCardCPF"
                    type="tel"
                    rules={{
                        required: true,
                        pattern: /[0-9]{11}/
                    }}
                    render={({ field }) => {
                        return <InputMask
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
                    as={InputMask}
                    control={control}
                    name="couponCode"
                    id="couponCode"
                    type="text"
                    rules={{
                        required: false
                    }}
                    render={({ field }) => {
                        return <InputMask
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
