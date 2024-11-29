// Fonction pour mélanger un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
}

// Sélectionner aléatoirement 20 questions pour le mode test
function getRandomQuestions() {
    shuffleArray(allQuizQuestions); // Mélange la liste des questions
    return allQuizQuestions.slice(0, 10); // Retourne les 20 premières questions après mélange
}

// Mode quiz (mêmes questions à chaque lancement)
const quizQuestionsFixed = QuizQuestions;

// Variables pour stocker les questions sélectionnées en fonction du mode
let quizQuestions = [];
let isTestMode = false;

const startButtonTest = document.getElementById("startTest");
const startButtonQuiz = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next");
const resultsContainer = document.getElementById("results");
const restartButton = document.getElementById("restart");
const quizForm = document.getElementById('quiz-form');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

startButtonTest.addEventListener("click", () => startQuiz(true));
startButtonQuiz.addEventListener("click", () => startQuiz(false));
nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", restartQuiz);

function startQuiz(testMode) {
    isTestMode = testMode;
    quizQuestions = isTestMode ? getRandomQuestions() : quizQuestionsFixed; // Mode test ou quiz fixe
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    startButtonTest.classList.add("hidden");
    startButtonQuiz.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    resultsContainer.classList.add("hidden");
    restartButton.classList.add("hidden");

    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    questionContainer.innerText = question.question;
    answersContainer.innerHTML = "";

    for (const letter in question.answers) {
        const answerButton = document.createElement("button");
        answerButton.innerText = question.answers[letter];
        answerButton.classList.add("answer");
        answerButton.addEventListener("click", () => selectAnswer(letter));
        answersContainer.appendChild(answerButton);
    }
}

function selectAnswer(answer) {
    userAnswers.push({ questionIndex: currentQuestionIndex, answer });
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correctAnswer) {
        score++;
    }

    nextButton.classList.remove("hidden");
}

function showNextQuestion() {
    currentQuestionIndex++;
    nextButton.classList.add("hidden");

    if (currentQuestionIndex < 10) {
        showQuestion();
    } else {
        showResults();
        
    }
}

function showResults() {

    quizContainer.classList.add("hidden");

    if(isTestMode){
        resultsContainer.classList.remove("hidden");
        restartButton.classList.remove("hidden");
    }else{
        quizForm.classList.remove('hidden')
    }
    
    let resultsHTML = `<h2>Résultats : ${score} / 10</h2>`;

    if (score === 10) {
        resultsHTML += "<p>Bravo ! Vous avez répondu correctement à toutes les questions.</p>";
    } else {
        resultsHTML += "<p>Voici les questions où vous avez eu faux :</p><div class='recap-list'>";

        userAnswers.forEach((userAnswer) => {
            const question = quizQuestions[userAnswer.questionIndex];
            if (userAnswer.answer !== question.correctAnswer) {
                resultsHTML += `
                    <div class="recap-item">
                        <h3>Question :</h3>
                        <p>${question.question}</p>
                        <h3>Votre réponse :</h3>
                        <p class="user-answer">${question.answers[userAnswer.answer]}</p>
                        <h3>Bonne réponse :</h3>
                        <p class="correct-answer">${question.answers[question.correctAnswer]}</p>
                    </div>
                `;
            }
        });

        resultsHTML += "</div>";
    }

    resultsContainer.innerHTML = resultsHTML;
}

function restartQuiz() {
    startButtonTest.classList.remove("hidden");
    startButtonQuiz.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    restartButton.classList.add("hidden");
    score = 0;
    currentQuestionIndex = 0;
}
