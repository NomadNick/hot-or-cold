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

	//Store the number that the user inputs in text box
	var guessedNumber;
	$('#guessButton').on('click', function(event) {
		guessedNumber = $('#userGuess').val();
		
		$('#count').html(parseInt($('#count').html(), 10)+1);
		$('#guessList').append('<li>'+guessedNumber+'</li>');
		$('#guessList').append(guessFeedback());
		$('#userGuess').val('');
		event.preventDefault();
	});

	//Generates a number between 1 and 100 as the number for the user to guess
  	var generatedNumber = Math.floor((Math.random() * 100) + 1);

  	//Function to compare the guessedNumber against the generatedNumber and append feedback to feedback div
  	var guessFeedback = function() {
  		if (Math.abs(guessedNumber - generatedNumber) >= 50) {
  			$('#guessList').append("Ice Cold!");
  		}
  		else if (Math.abs(guessedNumber - generatedNumber) < 50 && Math.abs(generatedNumber - guessedNumber) > 30) {
  			$('#guessList').append("Cold!");
  		}
  		else if (Math.abs(guessedNumber - generatedNumber) <= 30 && Math.abs(generatedNumber - guessedNumber) >= 20) {
  			$('#guessList').append("Warm!");
  		}
  		else if (Math.abs(guessedNumber - generatedNumber) < 20 && Math.abs(generatedNumber - guessedNumber) > 10) {
  			$('#guessList').append("Hot!");
  		}
  		else if (Math.abs(guessedNumber - generatedNumber) < 10 && Math.abs(generatedNumber - guessedNumber) > 0) {
  			$('#guessList').append("Very Hot!");
  		}
  		else {
  			$('#guessList').append("You Win!");
  		}
  	};

  	