import styles from './styles.module.scss'

export function PaymentForm() {

    return (
        <form action="">
            <div className="formGroup">
                <label htmlFor="creditCardNumber">Número do cartão</label>
                <input type="text" name="creditCardNumber" id="creditCardNumber" placeholder="0000 0000 0000 0000" />
            </div>

            <div className="formGroup twoCols">
                <div>
                    <label htmlFor="creditCardExpirationDate">Validade</label>
                    <input type="text" name="creditCardExpirationDate" id="creditCardExpirationDate" placeholder="MM/AA" />
                </div>

                <div>
                    <label htmlFor="creditCardCVV">CVV</label>
                    <input type="text" name="creditCardCVV" id="creditCardCVV" placeholder="000" />
                </div>
            </div>

            <div className="formGroup">
                <label htmlFor="creditCardHolder">Nome impresso no cartão</label>
                <input type="text" name="creditCardHolder" id="creditCardHolder" placeholder="Seu nome" />
            </div>

            <div className="formGroup">
                <label htmlFor="creditCardCPF">CPF</label>
                <input type="text" name="creditCardCPF" id="creditCardCPF" placeholder="000.000.000-00" />
            </div>

            <div className="formGroup">
                <label htmlFor="couponCode">Cupom</label>
                <input type="text" name="couponCode" id="couponCode" placeholder="Insira aqui" />
            </div>

            <div className="formGroup">
                <label htmlFor="installments">Número de parcelas</label>
                <select name="installments" id="installments">
                    <option>Selecionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
        </form>
    )

}