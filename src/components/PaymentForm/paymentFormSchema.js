import * as Yup from 'yup'

export default Yup.object().shape({
    creditCardNumber: Yup.string().min(16, 'O campo deve conter 16 números').required( 'Campo obrigatório' )

    // creditCardExpirationDate: Yup.string().required( 'Insira uma data no formato MM/AA' ),

    // creditCardCVV: Yup.string().min(3, 'O campo deve conter 3 números').matches(/^[0-9]{3}$/i, 'Neste campo só é permitido números' ).required( 'O preenchimento do campo é obrigatório' ),

    // creditCardHolder: Yup.string().required( 'O preenchimento do campo é obrigatório' ),

    // creditCardCPF: Yup.string().required( 'O preenchimento do campo é obrigatório' ),

    // installments: Yup.number().required( 'O preenchimento do campo é obrigatório' ),
})