//Global variables

var viewHigh = document.getElementById('viewScore');
var timer = document.getElementById('countdown');
var titleQ = document.getElementById('questionhead');
var para = document.getElementById('initalmessage');
var startBtn = document.getElementById('btn-start');
var buttonOne = document.getElementById('btn-One');
var buttonTwo = document.getElementById('btn-Two');
var buttonThree = document.getElementById('btn-Three');
var buttonFour = document.getElementById('btn-Four');
var answerResult = document.getElementById('qResult');
var paraSubmit = document.getElementById('highScoreSubmitp');
var inputSubmit =document.getElementById('highScoreSubmitI');
var btnSubmit = document.getElementById('btn-submit');
var highScores = document.getElementById('highScores');
var btnGoBack = document.getElementById('btn-goback');
var btnClear = document.getElementById('btn-clear');
var scoreList = document.getElementById('highScores');
var CodeQuizScores = [];
var CodeQuizScoreObj = {};

//Start Test Function
function startTest() {
    //Countdown timer running in header
    var timeLeft = 60;
    var countdown = function() {
        console.log(timeLeft);
        timeLeft--;
        timer.textContent = 'Time: ' + timeLeft;
        if (timeLeft <= 0) {
            alert("timesup");
            clearInterval(timeInterval);
            var retry = confirm("You have failed! Try Again?");
            if (retry == true) {
                reset();
            } else {
                reset();
            };
        };
    };
    var timeInterval = setInterval(countdown, 1000);

    //view highscore while taking test
    viewHigh.addEventListener("click", function(){ 
        clearInterval(timeInterval);
        displayHighScore;
    });

    //firstquestion in test
    firstquestion();

    function firstquestion() {
        
        para.classList.add("hide"); 
        titleQ.classList.add("questionhead");
        titleQ.textContent = "Commonly used data types DO NOT include ____________.";
        startBtn.classList.add("hide");
        buttonOne.classList.remove("hide");
        buttonOne.textContent = "1. strings";
        buttonTwo.classList.remove("hide");
        buttonTwo.textContent = "2. booleans";
        buttonThree.classList.remove("hide");
        buttonThree.textContent = "3. alerts";
        buttonFour.classList.remove("hide");
        buttonFour.textContent = "4. numbers";

        buttonOne.onclick = secFalse;
        buttonTwo.onclick = secFalse;
        buttonThree.onclick = secTrue;
        buttonFour.onclick = secFalse;
    };
    //first question answer false
    function secFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        secondQuestion();
    };
    //first question answer true
    function secTrue() {
        answerResult.textContent = "Correct!";
        secondQuestion();
    };
    //second question
    function secondQuestion() {
        titleQ.textContent = "The condition in a if / else statment is enclosed with ____________.";
        buttonOne.textContent = "1. quotes";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. parenthesis";
        buttonFour.textContent = "4. square brackets";
        answerResult.classList.remove("hide");
        
        buttonOne.onclick = thrFalse;
        buttonTwo.onclick = thrFalse;
        buttonThree.onclick = thrTrue;
        buttonFour.onclick = thrFalse;
    };
    //second question answer false
    function thrFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        thirdQuestion();
    };
    //second question answer true
    function thrTrue() {
        answerResult.textContent = "Correct!";
        thirdQuestion();
    };
    //third question
    function thirdQuestion() {
        titleQ.textContent = "Arrays in Javascript can be used to store ____________.";
        buttonOne.textContent = "1. numbers and strings";
        buttonTwo.textContent = "2. other arrays";
        buttonThree.textContent = "3. booleans";
        buttonFour.textContent = "4. all of the above";

        buttonOne.onclick = forFalse;
        buttonTwo.onclick = forFalse;
        buttonThree.onclick = forFalse;
        buttonFour.onclick = forTrue;
    };
    //third question answer false
    function forFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        forthQuestion();
    };
    //third questiopn answer true
    function forTrue() {
        answerResult.textContent = "Correct!";
        forthQuestion();
    };
    //fourth question
    function forthQuestion() {
        titleQ.textContent = "String values must be closed within ____________ when being assigned to variables.";
        buttonOne.textContent = "1. commas";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. quotes";
        buttonFour.textContent = "4. parenthesis";

        buttonOne.onclick = fivFalse;
        buttonTwo.onclick = fivFalse;
        buttonThree.onclick = fivTrue;
        buttonFour.onclick = fivFalse;
    };
    //fourth question answer false
    function fivFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        fifthQuestion();
    };
    //fourth question answer true
    function fivTrue() {
        answerResult.textContent = "Correct!";
        fifthQuestion();
    };
    //fifth question
    function fifthQuestion() {
        titleQ.textContent = "a very useful tool used during development and debugging for printing content to the debugger is:";
        buttonOne.textContent = "1. Javascript";
        buttonTwo.textContent = "2. terminal/bash";
        buttonThree.textContent = "3. for loops";
        buttonFour.textContent = "4. console.log";

        buttonOne.onclick = sixFalse;
        buttonTwo.onclick = sixFalse;
        buttonThree.onclick = sixTrue;
        buttonFour.onclick = sixFalse;
        //fifth question answer false
        function sixFalse() {
            answerResult.textContent = "Wrong!";
            timeLeft = timeLeft - 20;
            if (timeLeft <= 0) {
                alert("timesup");
                clearInterval(timeInterval);
                var retry = confirm("You have failed! Try Again?");
                if (retry == true) {
                    reset();
                } else {
                    reset();
                };
            } else {
                clearInterval(timeInterval);
                newHighScore();
            }
        };
        //fifth question answer true
        function sixTrue() {
            answerResult.textContent = "Correct!";
            clearInterval(timeInterval);
            newHighScore();
        };
    };
    //view you new score at end of successful test
    var newHighScore = function() {
        titleQ.textContent = "All done!";
        para.classList.remove("hide");
        para.textContent = "Your final score is " + timeLeft + ".";
        para.classList.add("highScorep");
        paraSubmit.classList.remove("hide");
        paraSubmit.textContent = "Enter initals: ";
        inputSubmit.classList.remove("hide");
        btnSubmit.classList.remove("hide")
        buttonOne.classList.add("hide");
        buttonTwo.classList.add("hide");
        buttonThree.classList.add("hide");
        buttonFour.classList.add("hide");     
    };

    // create object ot of new score to be saved in saveScores function
    btnSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        var name = inputSubmit.value;
        var score = timeLeft
        console.log(name);
        console.log(score);
        CodeQuizScoreObj = {
            name: name,
            value: score
        };
    
        // save Score to localStorage and view all High scores
        saveScores();
        displayHighScore();
    });    
};
//save new score obj to local storage
var saveScores = function() {
    var currentSavedScores = localStorage.getItem("Scores");
    if (!currentSavedScores) {
        console.log(CodeQuizScoreObj);
        CodeQuizScores.push(CodeQuizScoreObj);
        localStorage.setItem("Scores", JSON.stringify(CodeQuizScores));
    } else {
        currentSavedScores = JSON.parse(currentSavedScores);
        currentSavedScores.push(CodeQuizScoreObj);
        localStorage.setItem("Scores", JSON.stringify(currentSavedScores));
    };
};
//display high score list 
var displayHighScore = function() {
    titleQ.textContent = "High Scores";
    titleQ.classList.add("questionhead");
    para.classList.add("hide");
    paraSubmit.classList.add("hide");
    inputSubmit.classList.add("hide");
    btnSubmit.classList.add("hide")
    buttonOne.classList.add("hide");
    buttonTwo.classList.add("hide");
    buttonThree.classList.add("hide");
    buttonFour.classList.add("hide");
    startBtn.classList.add("hide");
    buttonOne.classList.add("hide");
    buttonTwo.classList.add("hide");
    buttonThree.classList.add("hide");
    buttonFour.classList.add("hide");
    answerResult.classList.add("hide");
    btnGoBack.classList.remove("hide");
    btnClear.classList.remove("hide");
    //button to go back to start screen
    btnGoBack.onclick = reset;
    //create score list from local storage
    var createScoreEl = function(savedScoresObj){
        //create li element
        var scoreLi = document.createElement('li');
        console.log(scoreLi)
        scoreList.appendChild(scoreLi);
        scoreLi.setAttribute("id", "li");
        scoreLi.setAttribute("value", savedScoresObj.value)
        scoreLi.classList.add("highScore");
        scoreLi.innerHTML= savedScoresObj.name + " - " + savedScoresObj.value + ".";
    };

    var savedScores = localStorage.getItem("Scores");

    if (!savedScores) {
        console.log("click1");
        return false;
    }
    console.log("Saved tasks found!");
    savedScores = JSON.parse(savedScores);
    console.log(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
        createScoreEl(savedScores[i]);
    }
    //sort list of high scores from highest to lowest
    var sortList = function() {
        var list, i, switching, b, shouldSwitch;
        list = document.getElementById("highScores");
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
          // start by saying: no switching is done:
          switching = false;
          b = list.getElementsByTagName("li");
          // Loop through all list-items:
          for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (b[i].value < b[i + 1].value) {
              /* if next item is alphabetically
              lower than current item, mark as a switch
              and break the loop: */
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
          }
        }
    };
    sortList();
    //if highscore clicked while on highscore page reload highscore page
    viewHigh.onclick = function() {
        var scoresStorage = localStorage.getItem("Scores");
        if (scoresStorage === null){
        } else {
            console.log("clickb");
            var savedScores = localStorage.getItem("Scores");
            savedScores = JSON.parse(savedScores);
            console.log(savedScores);
            for (var i = 0; i < savedScores.length; i++) {
                var lI = document.getElementById("li");
                lI.remove();
            };
        };
        displayHighScore();
    };
};
//button to clear all highscores and to clear local storage
btnClear.onclick = function() {
    var scoresStorage = localStorage.getItem("Scores");
    if (scoresStorage === null){
    } else {
        console.log("clickb");
        var savedScores = localStorage.getItem("Scores");
        savedScores = JSON.parse(savedScores);
        console.log(savedScores);
        for (var i = 0; i < savedScores.length; i++) {
            var lI = document.getElementById("li");
            lI.remove();
        };
        localStorage.removeItem('Scores');
    }; 
};
//function to reset application and bring user back to the front page without clearing highscores
var reset = function() {
    para.classList.remove("hide");
    para.classList.remove("highScorep");
    para.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    titleQ.classList.remove("questionhead");
    titleQ.textContent = "Coding Quiz Challenge";
    startBtn.classList.remove("hide");
    buttonOne.classList.add("hide");
    buttonTwo.classList.add("hide");
    buttonThree.classList.add("hide");
    buttonFour.classList.add("hide");
    answerResult.classList.add("hide");
    btnGoBack.classList.add("hide");
    btnClear.classList.add("hide");
    timer.textContent = "Time: " + 80;
    location.reload();
    return false;
};

//start test button
startBtn.onclick = startTest;

//high score button
viewHigh.onclick = displayHighScore;