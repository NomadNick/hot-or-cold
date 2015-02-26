
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


});

	var guessedNumber = $('userGuess').val();

  	var generatedNumber = Math.floor((Math.random() * 100) + 1);

  	var guessFeedback = function() {
  		if (Math.abs(guessedNumber - generatedNumber) >= 50) {
  			alert('Ice Cold!');
  		}
  		else if (Math.abs(guessedNumber - generatedNumber) < 50 && Math.abs(generatedNumber - guessedNumber) > 30) {
  			alert('Cold!');
  		}
  		else if (Math.abs(guessedNumber - generatedNumber) <= 30 && Math.abs(generatedNumber - guessedNumber) >= 20) {
  			alert('Warm!');
  		}
  		else if (Math.abs(guessedNumber - generatedNumber) < 20 && Math.abs(generatedNumber - guessedNumber) > 10) {
  			alert('Hot!');
  		}
  		else {
  			alert('Very hot!');
  		}
  	};
  	$('guessButton').on(click, function () {
  		$('#count').html(parseInt($('#count').html(), 10)+1);
  	})
  	