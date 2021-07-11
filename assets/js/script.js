var timer = document.getElementById('countdown')
var titleQ = document.getElementById('questionhead');
var para = document.getElementById('initalmessage');
var startBtn = document.getElementById('btn-start');
var buttonOne = document.getElementById('btn-One');
var buttonTwo = document.getElementById('btn-Two');
var buttonThree = document.getElementById('btn-Three');
var buttonFour = document.getElementById('btn-Four');
var answerResult = document.getElementById('qResult');

function startTest() {
    var timeLeft = 80;

    var countdown = function() {
        console.log(timeLeft);
        timeLeft--;
        timer.textContent = 'Time: ' + timeLeft;
        if (timeLeft === 0) {
            alert("timesup");
            clearInterval(timeInterval);
            fail();
        };
    };

    var timeInterval = setInterval(countdown, 1000);
    firstquestion();

    function firstquestion() {
        
        para.classList.add("hide"); 
        titleQ.classList.add("questionhead")
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

    function secFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        secondQuestion();
    };

    function secTrue() {
        answerResult.textContent = "Correct!";
        secondQuestion();
    };

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

    function thrFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        thirdQuestion();
    };

    function thrTrue() {
        answerResult.textContent = "Correct!";
        thirdQuestion();
    };

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

    function forFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        forthQuestion();
    };

    function forTrue() {
        answerResult.textContent = "Correct!";
        forthQuestion();
    };

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

    function fivFalse() {
        answerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 20;
        fifthQuestion();
    };

    function fivTrue() {
        answerResult.textContent = "Correct!";
        fifthQuestion();
    };

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

        function sixFalse() {
            answerResult.textContent = "Wrong!";
            timeLeft = timeLeft - 20;
            saveScore();
        };
    
        function sixTrue() {
            answerResult.textContent = "Correct!";
            saveScore();
        };
    };
};

startBtn.onclick = startTest;