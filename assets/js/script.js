var timer = document.getElementById('countdown')
var titleQ = document.getElementById('questionhead');
var para = document.getElementById('initalmessage');
var startBtn = document.getElementById('btn-start');
var buttonOne = document.getElementById('btn-One');
var buttonTwo = document.getElementById('btn-Two');
var buttonThree = document.getElementById('btn-Three');
var buttonFour = document.getElementById('btn-Four');
var answerResult = document.getElementById('qResult');
var answer = false;

function startTest() {
    var timeLeft = 100;

    var countdown = function() {
        console.log(timeLeft);
        timeLeft--;
        timer.textContent = 'Time: ' + timeLeft;
    };

    var timeInterval = setInterval(countdown, 1000);
    firstquestion();

    function firstquestion() {
        
        para.classList.add("hide"); 
        titleQ.classList.add("questionhead")
        titleQ.textContent = "Commonly used data types do not include ____________.";
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
        answer = false;
        secondQuestion();
    };

    function secTrue() {
        answer = true;
        secondQuestion();
    };

    function secondQuestion() {
        titleQ.textContent = "The condition in a if / else statment is enclosed with ____________.";
        buttonOne.textContent = "1. quotes";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. parenthesis";
        buttonFour.textContent = "4. square brackets";

        buttonOne.onclick = thrFalse;
        buttonTwo.onclick = thrFalse;
        buttonThree.onclick = thrTrue;
        buttonFour.onclick = thrFalse;
    };

    function thrFalse() {
        answer = false;
        thirdQuestion();
    };

    function thrTrue() {
        answer = true;
        thirdQuestion();
    };

    function thirdQuestion() {
        titleQ.textContent = "The condition in a if / else statment is enclosed with ____________.";
        buttonOne.textContent = "1. quotes";
        buttonTwo.textContent = "2. curly brackets";
        buttonThree.textContent = "3. parenthesis";
        buttonFour.textContent = "4. square brackets";

        buttonOne.onclick = forFalse;
        buttonTwo.onclick = forFalse;
        buttonThree.onclick = forTrue;
        buttonFour.onclick = forFalse;
    };
};

startBtn.onclick = startTest;