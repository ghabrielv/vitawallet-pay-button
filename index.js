var newWindow;
exports.payButton = function(btc_address, env = undefined, port = 3000) {
	var url = '';
	switch (env) {
		case undefined:
		case 'prod':
			env = 'prod';
			break;
		case 'qa':
		case 'dev':
			env = 'qa';
			break;
		case 'local':
			env = 'local';
			break;
		default:
			env = 'prod';
	}
	var url = (env == 'prod' || env == 'qa') ? 'https://' + (env == 'prod' ? 'app.vitawallet.io' : 'qa-ui-dot-vita-wallet-api-qa-2.appspot.com') + '/pay-button/' + btc_address : 'http://localhost:' + port + '/pay-button/' + btc_address;
	newWindow = window.open(url,'Botón de pago','width=auto,height=auto,toolbar=0,menubar=0');  
	if (window.focus) {
		newWindow.focus();
	}
}