const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame,)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    countdown()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Timer function
// function timer(){
//     var sec = 30;
//     var timer = setInterval(function(){
//         document.getElementById('start-btn').innerHTML='00:'+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }

function countdown(){
    var timeLeft = 69
    var timerEl = document.getElementById('countdown');



    var timerId = setInterval(function () {
        if (timeLeft > 0){
            timerEl.textContent = 'Time left is' + timeLeft;
            console.log('Time', timeLeft)
        } else {
            timeLeft.textContent = 'Time is over'
            console.log('Time is over');
            clearInterval(timerId)
        }

        console.log(timeLeft);

        timeLeft = timeLeft - 1;
    }, 1000);
}

function showQuestion(question){
    questionElement.innerText = question.question 
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
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
        question: 'What is...???',
        answer: [
            {text: 'answer...', correct: true},
            {text: 'wrong answer', correct: false}
        ]
    },
    {
        question: 'What is...???',
        answer: [
            {text: 'answer...', correct: true},
            {text: 'wrong answer', correct: false}
        ] 
    },
    {
        question: 'What is...???',
        answer: [
            {text: 'answer...', correct: true},
            {text: 'wrong answer', correct: false}
        ] 
    },    {
        question: 'What is...???',
        answer: [
            {text: 'answer...', correct: true},
            {text: 'wrong answer', correct: false}
        ] 
    },
]