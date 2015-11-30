console.log("i iz loaded...")

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

// menu buttons


// display what question player is on
var $numberOfQuestions = $('.questions').length;

function renderQuestionNumber(){
  for (var i = 0; i < $numberOfQuestions.length; i++) {
  var $numberDisplay = $('#questions:nth-child' + (i)).length;
  i++;
  }
  var $questionNumber = $('#question-out-of');
  return $questionNumber.text("Question " + $numberDisplay + " out of " + $numberOfQuestions);
}

renderQuestionNumber();

// display questions
$($displayQuestion = function(){
    $('.questions').hide();
    $('.questions:nth-child(1)').show();
    $('.next-button').on('click', function(){
        nextButton();
    });
});

// player has to select radio input for question before next question


// after clicking next button, show next question
var $qArray = $('.questions');
var q = 0;

function nextButton(){
  if (q < $qArray.length) {
    $qArray.hide();
    $($qArray[q]).show();
    q++;
  } else if (q = ($qArray.length - 1)){
    $("button[name = 'next']").text('Submit');
  }
  };

nextButton();

// determining correct and incorrect answers


// submit button to show final score
