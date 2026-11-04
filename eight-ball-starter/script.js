/*
  Magic 8 Ball
  Name:
  Period:
*/
function askEightBall() { 
  // Get Input Value
  let userName = document.getElementById('nameInput').value;
  let userQuestion = document.getElementById('questionInput').value;
  console.log(userName, userQuestion);

  //Show The Question on the Site
    document.getElementById('questionOut').textContent = "You asked: " + userQuestion;

  //Does greet the user
  let greeting

  if (userName === ""){
    greeting = "Hello Mystery Person!"
  } else {
    greeting = `Hello, ${userName}!`
  }

  document.getElementById('greeting').textContent = greeting


  // check the question
  if (userQuestion === '') {
    document.getElementById('questionOut').textContent = ''
    document.getElementById('answer').textContent = 'The 8ball needs a question'
    document.getElementById('answerType').innerHTML = ''
    return
  }


  // Get random #




  // Get  Magic 8balls answer




  // Show the 8ball answer type badge
}