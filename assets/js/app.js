$(document).ready(function () {

    let correct = 0, incorrect = 0, unanswered = 0;
    let currentTimeout;
    let jsonNextQ;
    let timeLeft, currentInterval;

    $("#results").hide();

    function endGame() {
        clearTimeout(currentTimeout);
        clearInterval(currentInterval);
        $("#questions").empty();
        $("#results").show();

        $("#correct").text(`Correct: ${correct}`);
        $("#incorrect").text(`Incorrect: ${incorrect}`);
        $("#unanswered").text(`Unanswered: ${unanswered}`);
    }

    function checkIfLastQ() {
        if (jsonNextQ === "lastq") {
            return true;
        }
        else {
            return false;
        }
    }

    function countdown() {
        unanswered++;
        clearInterval(currentInterval)
        timeLeft = 5;
        $("#timeLeft").text(5)
        updateTimeLeft();
        if (checkIfLastQ()) {
            endGame();
        } else {
            buildQuestion(jsonNextQ)
        }
    }

    function updateTimeLeft() {
        currentInterval = setInterval(function() {
            //let timeleft = $("#timeLeft").text() - 1;
            timeLeft--;
            $("#timeLeft").text(timeLeft);
            console.log("update")
        }, 1000)
    }
    
    function resetInterval(interva) {

    }

    function resetAttrs() {
        $("#q1").attr("correct", "no");
        $("#q2").attr("correct", "no");
        $("#q3").attr("correct", "no");
        $("#q4").attr("correct", "no");
    }

    function buildQuestion(question) {
        console.log(checkIfLastQ());
        updateTimeLeft();

        resetAttrs();

        //traverse json
        $("#questionHeader").text(question.question);
        $("#q1").text(question.opt1);
        $("#q2").text(question.opt2);
        $("#q3").text(question.opt3);
        $("#q4").text(question.opt4);

        switch (question.answer) {
            case 1:
                $("#q1").attr("correct", "yes");
                break;
            case 2:
                $("#q2").attr("correct", "yes");
                break;
            case 3:
                $("#q3").attr("correct", "yes");
                break;
            case 4:
                $("#q4").attr("correct", "yes");
                break;
        }

        console.log(question.nextQ)
        jsonNextQ = question.nextQ
        currentTimeout = setTimeout(countdown, 5000)
        //$("#timeLeft").text()
    }

    $(".option").click(function () {

        if ($(this).attr("correct") === "yes") {
            clearTimeout(currentTimeout);
            correct++;
            alert("Correct Option");
            if (checkIfLastQ()) {
                endGame();
            } else {
                buildQuestion(jsonNextQ);
            }
        } else {
            clearTimeout(currentTimeout);
            incorrect++;
            alert("wrong choice");
            if (checkIfLastQ()) {
                endGame();
            } else {
                buildQuestion(jsonNextQ);
            }
        }
    });

    buildQuestion(q1);
});