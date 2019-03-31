function power() {
  var question1 = document.quiz.question1.vaue;
  var question2 = document.quiz.question2.vaue;
  var question3 = document.quiz.question3.vaue;
  var question4 = document.quiz.question4.vaue;
  var question5 = document.quiz.question5.vaue;
  var total= 0;
}
if (question1 == "right") {
  total = total +1;
};
if (question2 == "right") {
  total = total +1;
};
if (question3 == "right") {
  total = total +1;
};
if (question4 == "right") {
  total = total +1;
};
if (question5 == "right") {
  total = total +1;
};

$("#output").text(total);
