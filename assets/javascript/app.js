$(document).ready(function() {
    // Initialization Screen
    
    function startPage() {
        openScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-md btn-block start-button' href='#' role='button'>Start!</a></p>";
        $("#mainArea").append(openScreen);
    }
    
    startPage();
        
    $("#mainArea").on("click", ".start-button", function(event){
        $('.jumbotron').hide();
            
        generateQuestions();
    
        timerWrapper();
    
    });
    
    $("body").on("click", ".answer", function(event){
        
        selectedAnswer = $(this).text();
        selectedAnswer === correctAnswers[questionCounter] ? (
            clearInterval(clock),
            generateWin()) :
            (
            clearInterval(clock),
            generateLoss()
        )
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); 
    
    });  
    
    function timeoutLoss() {
        unansweredCount++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Time's up -- pencils down!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='../images/broken_clarinet.png'>";
        $("#mainArea").html(gameHTML);
        setTimeout(wait, 3000); 
    }
    
    function generateWin() {
        correctCount++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $("#mainArea").html(gameHTML);
        setTimeout(wait, 3000);
    }
    
    function generateLoss() {
        wrongCount++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Completely wrong! The correct answer was: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='../images/broken_clarinet.png'>";
        $("#mainArea").html(gameHTML);
        setTimeout(wait, 3000); 
    }

    function generateQuestions() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $("#mainArea").html(gameHTML);
    };
    
    function wait() {
    questionCounter < 7 ? 
        (questionCounter++,
        generateQuestions(),
        counter = 30,
        timerWrapper() ):
        
       (endScreen())
    }; 
    
    function timerWrapper() {
        clock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(clock);
                timeoutLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function endScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Review your performance: " + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctCount + "</p>" + "<p>Wrong Answers: " + wrongCount + "</p>" + "<p>Unanswered: " + unansweredCount + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Start Over!</a></p>";
        $("#mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctCount = 0;
        wrongCount = 0;
        unansweredCount = 0;
        counter = 30;
        generateQuestions();
        timerWrapper();
    }
    
    var openScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = 
    ["Which of the following is NOT a type of clarinet?", 
    "Which of the following musicians was known for playing the clarinet?", 
    "Which of the following is NOT a brand of reed makers?", 
    "Which of the following fictional characters plays the clarinet?", 
    "In which year did Johann Cristoph Denner invent the clarinet?"];

    var answerArray = [
        ["Bb Clarinet", "Eb Clarinet", "Bass Clarinet", "C# Clarinet"], 
        ["Benny Goodman","Dave Matthews","Gary Numan","Bill Clinton"], 
        ["Vandoren", "Old Milwaukee", "Mitchell Lurie", "Rico"], 
        ["Shaggy Rogers", "Jimmy Neutron", "Squidward Tentacles", "Finn the Human"], 
        ["1690", "1578", "1992", "1630"], 
    ];

    var imageArray = new Array(); 
    imageArray[0] = "<img class='center-block' src='../images/clarinet-yes.jpg'>";
    imageArray[1] = "<img class='center-block' src='../images/benny.jpeg'>"; 
    imageArray[2] = "<img class='center-block' src='../images/reeds.jpg'>"; 
    imageArray[3] = "<img class='center-block' src='../images/squidward.jpeg'>";  
    imageArray[4] = "<img class='center-block' src='../images/squidward_clarinet2.jpg'>"; 

    var correctAnswers = 
    ["D. C# Clarinet", 
    "A. Benny Goodman", 
    "B. Old Milwaukee", 
    "C. Squidward Tentacles", 
    "A. 1690"];

    var questionCounter = 0;
    var selecterAnswer;
    var clock;
    var correctCount = 0;
    var wrongCount = 0;
    var unansweredCount = 0;