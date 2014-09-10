var elements = ["fire","water","earth"];
var userPick,
	compPick;

var wins = 0;
var losses = 0;
var draws = 0;

$(document).ready(function(){

	$('.userElement').click(function() {
		$('.pictures').hide();

		userPick = $(this).attr('id');
		compPick = elements[Math.floor(Math.random()*elements.length)];

		$('.userelements .img' + userPick).show();
		$('.compelements .img' + compPick).show();
		$('.fight').show();

		compare(userPick, compPick);
	});


	$('#scorereset').click(reset);

});

function compare(user, comp) {

	var resultMatrix = {
		'fire': {
			'earth': 'win',
			'water': 'lose',
			'fire': 'draw'
		},	
		'water': {
			'fire': 'win',
			'earth': 'lose',
			'water': 'draw'
		},
		'earth': {
			'water': 'win',
			'fire': 'lose',
			'earth': 'draw'
		}
	};

	var result = resultMatrix[user][comp];

	window[result]();
}

function win() {
	wins++;
}

function lose() {
	losses++;
}

function draw() {
	draws++;
}
function reset(){
	$('.score').html('0');
	 win = 0;
	 lose = 0;
	 draw = 0;
}
