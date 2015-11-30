console.log("i iz loaded...")

$(document).ready(function(){
// welcome player
alert("Welcome to the Parks and Recreation Trivia game!")

// player name prompt
var playerName = "Welcome, " + prompt("Woah, woah, woah! Where's the fire? Let's get to know each other. Tell me your name.") + "!";

// display player name in h2
function renderNameDisplay(){
  var $nameDisplay = $('#name-display');
  $nameDisplay.text(playerName);
}

renderNameDisplay();

// click next button, show next question
var $qArray = $('.questions');
var q = 0;

function nextButton() {
  $('input:radio[name=radio]').prop('checked', false);
  $('#next-button').attr('disabled', 'true');
  $('input:radio[name=radio]').click(function () {
  var checkval = $('input:radio[name=radio]:checked').val();
  if (checkval == 'a' || checkval == 'b' || checkval == 'c' || checkval == 'd') {
      $('#next-button').removeAttr('disabled');
  }
  });
  if (q < $qArray.length) {
    $qArray.hide();
    $($qArray[q]).show();
    q++;
  };
};

nextButton();

// hide questions, show first question,
$($displayQuestion = function(){
    $('.questions').hide();
    $('.questions:nth-child(1)').show();
    $('.next-button').on('click', function(){
        nextButton();
    });
});

// keep score, display after last question
var $answer = $('#answer').val();
var $keepScore = $('#keep-score').html();

function keepScore() {
  $('#keep-score').hide();
  $('.next-button').on('click', function(){
    if ($('input:radio[id=answer]').prop('checked', true)) {
    $('#keep-score').html(function(i, val) {
      return val*1+1;
    });
  };
  if ($('input:radio[id=wrong]').prop('checked', false)) {
  $('#keep-score').html(function(i, val) {
    return val*1;
  });
  };
});
};

keepScore();


// display what question player is on
function renderQuestionNumber() {
  var $questionNumber = $('#question-out-of'),
      $questionsArray = [
        $('#question-1'),
        $('#question-2'),
        $('#question-3'),
        $('#question-4'),
        $('#question-5'),
        $('#question-6'),
        $('#question-7'),
        $('#question-8'),
        $('#question-9'),
        $('#question-10'),
      ],
      start = 1;
    $questionNumber.text("Question " + (start++) + " out of " + $questionsArray.length);
    $('.next-button').on('click', function(){
    $questionNumber.text("Question " + (start++) + " out of " + $questionsArray.length);
      if (start === 12) {
        $questionNumber.text("Your score is " + ($keepScore) + " !") && ($('.questions')).text("");
        $('.next-button').hide();
      };
    });
};

renderQuestionNumber();

});
