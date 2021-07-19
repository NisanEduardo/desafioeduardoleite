# Link do desafio no vercel
[Desafio FrontEnd Eduardo Leite](https://desafioeduardoleite.vercel.app/)

## Instalar dependências do projeto
```bash
yarn
# ou 
npm install
```
## Iniciar servidor local ( localhost:3000):

```bash
npm run dev
# ou
yarn dev
```

## Rodar testes unitários:

```bash
npm run test
# ou
yarn test
```

## Fluxo de atividade:
### Tela de Planos
O usuário escolherá qual plano gostaria de aderir
O botão de ação "Ir para pagamento" só aparecerá quando o usuário marcar o plano escolhido

### Tela de Formulário de Pagamento
O formulário conta com algumas validações, tanto de existência dos dados quanto formato
O campo de "Número de parcelas" é preenchido automaticamente baseado no tipo de plano que o usuário escolheu "À vista ou Parcelado"

### Tela de sucesso
O formulário sendo submetido com sucesso, o usuário será automaticamente redirecionado para a tela de sucesso, informando seus dados e os dados do plano escolhido
