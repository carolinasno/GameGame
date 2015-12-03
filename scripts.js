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
var start = 1;

function nextButton() {
  console.log('next button running...');
  // $('input:radio[name=radio]').prop('checked', false);
  // $('#next-button').attr('disabled', 'true');
  // $('input:radio[name=radio]').click(function () {
  // var checkval = $('input:radio[name=radio]:checked').val();
  // if (checkval == 'a' || checkval == 'b' || checkval == 'c' || checkval == 'd') {
  //     $('#next-button').removeAttr('disabled');
  // }
  // });

  var guess = $($qArray[q]).find(":checked").val();
  var answer = $('#answer').val();
  keepScore(guess,answer);

  if (q < $qArray.length) {
    $qArray[q].remove();
    q++;
    $($qArray[q]).show();
    renderQuestionNumber();
  };

  $('#next-button').remove();
  var newButton = $('<button>').attr('id', 'next-button').html('Next');

  $('.next-button').append(newButton);
  bindNextButton();
};

// nextButton();

// hide questions, show first question,
$($displayQuestion = function(){
    $('.questions').hide();
    $('.questions:nth-child(1)').show();
    bindNextButton();
});

function bindNextButton(){
  $('#next-button').on('click', function(){
    nextButton();
  });
}



// keep score, display after last question

var score = 0;

function keepScore(guess, answer){
  console.log('the score is:' + score);
  $('#keep-score').hide();
    console.log(guess);
    console.log(answer);
    // var guess = $('#question-1').find(":checked").val();
    if ( guess === answer){
      score = score + 1;
      console.log('the score is now:' + score);
      $('#keep-score').text(score);
    } else {
      console.log('wrong answer');
    }

};

// keepScore();

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
      ];
    $questionNumber.text("Question " + (start) + " out of " + $questionsArray.length);


    // $('#next-button').on('click', function(){
    $questionNumber.text("Question " + (start) + " out of " + $questionsArray.length);
      if (start === 11) {
        $('.next-button').hide();
        $questionNumber.text("Your score is " + score + " !") && ($('.questions')).text("");
      };
    start++;
    // });
};

renderQuestionNumber();


});
