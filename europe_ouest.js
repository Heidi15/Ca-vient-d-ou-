const questions = [
    {
        question: "Quelle boisson est souvent associée à la France et protégée par une AOC ?",
        answer: [
            {text: "Cidre", correct: false},
            {text: "Champagne", correct: true},
            {text: "Cognac", correct: false},
            {text: "Kir", correct: false},
        ]
    },
    {
        question: "Quelle fête populaire espagnole attire des milliers de touristes chaque année ?",
        answer: [
            {text: "La Tomatina", correct: false},
            {text: "San Fermín (course de taureaux)", correct: true},
            {text: "Feria de Abril", correct: false},
            {text: "Toutes les réponses", correct: false},
        ]
    },
    {
        question: "Quelle langue d'Europe de l'Ouest est parlée comme langue maternelle par le plus de personnes dans l’UE ?",
        answer: [
            {text: "Français", correct: false},
            {text: "Espagnol", correct: false},
            {text: "Allemand", correct: true},
            {text: "Italien", correct: false},
        ]
    },
    {
        question: "Quelle est la tradition suisse qui consiste à faire transhumer les vaches en été ?",
        answer: [
            {text: " L'alpage", correct: false},
            {text: "Le carnaval", correct: true},
            {text: "La fête de la Saint-Jean", correct: false},
            {text: "Le marché des artisans", correct: false},
        ]
    },
    {
        question: "Quel pays possède le plus de sites inscrits au patrimoine mondial de l’UNESCO en Europe de l’Ouest?",
        answer: [
            {text: "France", correct: false},
            {text: "Italie", correct: false},
            {text: "Espagne", correct: true},
            {text: "Allemagne", correct: false},
        ]
    },
    {
        question: "Quelle spécialité culinaire est typique de la Belgique ?",
        answer: [
            {text: "Raclette", correct: false},
            {text: "Choucroute", correct: true},
            {text: "Moules-frites", correct: false},
            {text: "Tarte Tatin", correct: false},
        ]
    },
    {
        question: "Quelle ville européenne est souvent surnommée la “capitale de l’Union européenne” ?",
        answer: [
            {text: "Bruxelles", correct: false},
            {text: "Strasbourg", correct: true},
            {text: "Luxembourg", correct: false},
            {text: "Francfort", correct: false},
        ]
    },
    {
        question: "Quelle fête nationale est célébrée avec un feu d’artifice sur la Tour Eiffel ?",
        answer: [
            {text: "Le 8 mai", correct: false},
            {text: "Le 14 juillet", correct: false},
            {text: "Le 11 novembre", correct: true},
            {text: "Le 25 décembre", correct: true},
        ]
    },
    {
        question: "Quel sport est le plus pratiqué en Allemagne selon les fédérations sportives ?",
        answer: [
            {text: " Natation", correct: false},
            {text: "Gymnastique", correct: false},
            {text: "Football", correct: false},
            {text: "Cyclisme", correct: true},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer"); 
const nextbtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;
let selectedButton = null;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    nextbtn.style.display = "none";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answer.forEach((ans, index) => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        
        button.addEventListener("click", () => {
            if(selectedButton) {
                selectedButton.classList.remove("selected");
            }

            button.classList.add("selected");
            selectedButton = button;
            selectedAnswer = ans.correct;

            nextbtn.style.display = "block";
        });
    });
}

function resetState(){
    nextbtn.style.display = "none";
    selectedButton = null;
    selectedAnswer = null;
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

nextbtn.addEventListener("click", () => {
    if(selectedAnswer === true) {
        score++;
    }
    
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        resetState();
        questionElement.innerHTML = `Your score: ${score}/${questions.length}`;
        nextbtn.innerHTML = "Try again";
        nextbtn.style.display = "block";
        nextbtn.onclick = startQuiz;
    }
});

startQuiz();