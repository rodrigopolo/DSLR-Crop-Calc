function pyth(w, h){
	return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
}

$("#calc").click(function(){
	var sw = $('#sw').val(),
		sh = $('#sh').val(),
		iw = $('#iw').val(),
		ih = $('#ih').val(),
		fl = $('#fl').val(),
		fa = $('#fa').val(),
		crop = $('#crop').val();

		var cf = (pyth(sw,sh)/pyth(iw,ih))*crop;
		var nfl = (fl*cf).toFixed(2);
		var nfa = (fa*cf).toFixed(1);

		$('#res').html(cf.toFixed(2)+'x crop factor, '+nfl+'mm ƒ/'+nfa);
		$('#res').fadeIn('slow');
});