$(document).ready(function () {

    let currentQuestion = 0

    buildQuestion(q2)


    function resetAttrs() {

        $("#q1").attr("correct", "no");
        $("#q2").attr("correct", "no");
        $("#q3").attr("correct", "no");
        $("#q4").attr("correct", "no");

    }

    function buildQuestion(question) {
        console.log("build_question");
        console.log(currentQuestion);
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

        $("#question-number").attr("data-question", JSON.stringify(question.nextQ))
        console.log(question.nextQ)
    }

    console.log("should trigger buildQuestion now...")

    $(".option").click(function () {
        if ($(this).attr("correct") === "yes") {
            alert("Correct Option");
            let ques = $("#question-number").attr("data-question");
            ques = JSON.parse(ques)
            console.log("Question Number: " +  ques)
            buildQuestion( ques );
        } else {
            alert("wrong choice");
        }
    });

    currentQuestion = 0
    buildQuestion(q1);


});