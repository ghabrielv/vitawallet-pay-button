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
$ npm i -g npm
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

Example:
```
<Button
className="btn-green"
onClick={() => payButton(btc_address, 100, 'usd', 'Pago de zapatos', ENV)}>
    Pagar con VitaWallet
</Button>
```

## Arguments

These are the arguments available on the payment button.

 * btc_address -> Your BTC address in VitaWallet. Ex: '3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC'
 * amount -> Payment amount. Ex: 100. (optional)
 * money -> Transaction Currency. Options 'btc', 'usd', 'clp'. (optional)
 * description -> Transaction Description. Ex: 'Pago de zapatos'. (optional)
 * env -> Enviroment 'qa' or 'prod'. (optional)
