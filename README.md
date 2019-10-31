# vitawallet-pay-button

[Website](https://vitawallet.io/) |
[Instagram](https://instagram.com/vitawallet) |
[Twitter](https://twitter.com/vitawallet) |
[Telegram](https://t.me/vitaio)

The [vitawallet-pay-button](https://app.vitawallet.io/) is a library that allows integrating from external sites the possibility of receiving payments in our [VitaWallet](https://app.vitawallet.io).

## Installation

In a browser:
```html
<script src="https://app.vitawallet.io/vitawallet-pay-button.js"></script>
```

Using npm:
```shell
$ npm install --save vitawallet-pay-button
```

In Node.js:
```js
var payButton = require('vitawallet-pay-button');
```

In ReactJS:
```js
import { payButton } from "vitawallet-pay-button";
```

## How to use?

Example in ReactJS:
```js
<Button
className="btn-green"
onClick={() => payButton(email, 100, 'usd', 'Pago de zapatos', true, ENV)}>
    Pagar con VitaWallet
</Button>
```

## Arguments

These are the arguments available on the payment button.

 * email -> Your email address in VitaWallet. Ex: 'soporte@vitawallet.io'
 * amount -> Payment amount. Ex: 100. (optional)
 * money -> Transaction Currency. Options 'btc', 'usd', 'clp'. (optional)
 * description -> Transaction Description. Ex: 'Pago de zapatos'. (optional)
 * force -> No change currency. Ex: false. (optional) (default: true)
 * env -> Enviroment 'qa' or 'prod'. (optional)
