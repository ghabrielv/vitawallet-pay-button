var newWindow;
exports.payButton = function(email, amount = undefined, money = undefined, description = undefined, force = true, env = undefined, port = 3000) {
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
	var params = email + (amount ? '?amount=' + amount : '') + (money ? '&money=' + money : '') + (description ? '&description=' + description : '') + (force ? '&force=' + force : '');
	var url = (env == 'prod' || env == 'qa') ? 'https://' + (env == 'prod' ? 'app.vitawallet.io' : 'qa-ui-dot-vita-wallet-api-qa-2.appspot.com') + '/pay-button/' + params : 'http://localhost:' + port + '/pay-button/' + params;
	newWindow = window.open(url,'Botón de pago','width=auto,height=auto,toolbar=0,menubar=0');  
	if (window.focus) {
		newWindow.focus();
	}
}