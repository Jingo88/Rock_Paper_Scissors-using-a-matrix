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
		console.log(compPick);
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

//window calls the result on a global scale. Had to change the scoreboard
//id's to plural names "wins" "losses" etc. because there are already 
//"win" "lose" "draw"
	window[result]();
	console.log(window[result]);
}

function win() {
	console.log("winning works");
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
	 wins = 0;
	 losses = 0;
	 draws = 0;
}