const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question 
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
})
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
   }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'WHO IS THE ALL TIME LEADING RUSHER IN THE NFL ?',
        answers: [
            { text: 'EMMITT SMITH', correct: true },
            { text: 'ERIC DICKERSON', correct: false }
        ]
    },
    {
        question: 'WHAT NFL TEAM WON THE FIRST SUPER BOWL ?',
        answers: [
            { text: 'GREEN BAY PACKERS', correct: true },
            { text: 'PITTSBURGH STEELERS', correct: false }

        ]
    },
    {
        question: 'HOW MANY TEAMS ARE THERE IN THE NFL ?',
        answers: [
            { text: '32', correct: true },
            { text: '30', correct: false }

        ]
    },
    {
        question: 'WHO HAS THE MOST RECEPTIONS IN NFL HISTORY ?',
        answers: [
            { text: 'JERRY RICE', correct: true },
            { text: 'CALVIN JOHNSON', correct: false }

        ]
    },
    {
        question: 'HOW MANY GAMES ARE IN AN NFL SEASON ?',
        answers: [
            { text: '17', correct: true },
            { text: '16', correct: false }

        ]
    },
]
function countdown() {
    var seconds = 65;
    function tick() {
      var counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        document.getElementById("verifiBtn").innerHTML = `
            <div class="Btn" id="ResendBtn">
                <button type="submit">TIMES UP !</button>
            </div>
        `;
        document.getElementById("counter").innerHTML = "";
      }
    }
    tick();
  }
  countdown();