var readlineSync = require("readline-sync")
var urName =readlineSync.question("Enter your name   ")
console.log("Welcome " + urName + " ! Do you know every thing about INDIAN CRICKET?")
console.log("Rule: Enter Full Name of the players ; ")
console.log("There will be 5 Questions in this game. ")
console.log("LET'S Begin!")
console.log("---------------------------------")
var score =0;
function play(ques,ans){
  var urAnswer = readlineSync.question(ques)

  if(urAnswer=== ans){
  console.log("Correct!")
  score++
  }
  else {
    console.log("Wrong!")
    score -= 0.25;
  }
  console.log("Your Current Score: "+ score)
  console.log("---------------------------------")
}
var questions = [{
  question : "Captain of team in 1983  ",
  answer : "Kapil Dev"
},
{
  question : "Most successful batsman ",
  answer: "Sachin Ramesh Tendulkar"
},
{
  question: "1st T20 hundred ",
  answer: "Suresh Raina"
},
{
  question: "Most successful Captain  ",
  answer : "Mahendra Singh Dhoni"
},
{question : "First bowler to take hat trick in world cup  ",
answer : "Chetan Sharma"
},
]

for(var i =0; i<questions.length;i++){
  var currQuest= questions[i]
  play(currQuest.question,currQuest.answer)
}
console.log("                                       ")
console.log("Your Final Score: "+ score)
if(score>=3){
  console.log("You are a TRUE fan!")
}
else{
  console.log("You are a DUMMY fan!")
}
