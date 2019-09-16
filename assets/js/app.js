$(document).ready(function () {

    console.log("inited all variables, but not objects")

    buildQuestion(q2)


    function resetAttr() {
        $("#q1").attr("correct", "no")
        $("#q2").attr("correct", "no")
        $("#q3").attr("correct", "no")
        $("#q4").attr("correct", "no")

    }

    function buildQuestion(question) {
        console.log("build_question")

        resetAttr();

        $("#questionHeader").text(question.question)
        $("#q1").text(question.opt1)
        $("#q2").text(question.opt2)
        $("#q3").text(question.opt3)
        $("#q4").text(question.opt4)

        switch (question.answer) {
            case 1:
                $("#q1").attr("correct", "yes")
                break;
            case 2:
                $("#q2").attr("correct", "yes")
                break;
            case 3:
                $("#q3").attr("correct", "yes")
                break;
            case 4:
                $("#q4").attr("correct", "yes")
                break;
        }
    }

    console.log("should trigger buildQuestion now...")



    $(".option").click(function () {
        if ($(this).attr("correct") === "yes") {
            alert("Correct Option")
            buildQuestion(q4);
        } else {
            alert("wrong choice")
        }
    });






});