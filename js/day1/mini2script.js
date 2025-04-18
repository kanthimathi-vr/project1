console.log("mini project2");
console.log("Online quiz system");
//store quiz details
let quiz = {
    question : "question1",
    multiple_choice_options : ["option a","option b","option c","option d"],
    correctans :"option a",
    user_selected_ans :"option c"
};
//vAalidate user answer
console.log(quiz);
console.log(quiz.correctans);
console.log(quiz.user_selected_ans);


console.log(quiz.correctans === quiz.user_selected_ans);
//display quiz results
console.log(quiz);
console.log(quiz.question);
console.log(quiz.multiple_choice_options);
console.log(quiz.correctans);
console.log(quiz.user_selected_ans);
console.log(quiz.correctans === quiz.user_selected_ans);




