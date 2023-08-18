// call function using async
async function getQuiz(e){
  // call API URL with my own key 
let quizCall = await fetch(`https://quizapi.io/api/v1/questions?apiKey=Q1CJ5idsPW895PzgcLGhxclj3HxAPMp4aFtXD5zt&limit=1&difficulty=${difficulty}`)
let quizResponse = await quizCall.json()
document.getElementById("quiz").innerHTML = JSON.stringify(quizResponse, null, "\t")
}

