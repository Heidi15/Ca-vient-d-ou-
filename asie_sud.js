const questions = [
    {
        question: " Quelle est la boisson chaude incontournable servie à toute heure de la journée ?",
        answer: [
            {text: "Café", correct: false},
            {text: "Thé chai", correct: true},
            {text: "Lassi", correct: false},
            {text: "Eau de coco", correct: false},
        ]
    },
    {
        question: " Quel est le plat épicé qui fait transpirer même les plus courageux ?",
        answer: [
            {text: "kothu parrotha", correct: false},
            {text: "Biryani", correct: true},
            {text: "rolls", correct: false},
            {text: "Naan au fromage", correct: false},
        ]
    },
    {
        question: "3. Quelle est la danse traditionnelle où l'on bouge les épaules avec grâce ?",
        answer: [
            {text: "Salsa", correct: false},
            {text: "Bharatanatyam", correct: true},
            {text: "Bhangra", correct: false},
            {text: "Flamenco", correct: false},
        ]
    },
    {
        question: "Quel est l'accessoire de mode indispensable pour un mariage traditionnel ??",
        answer: [
            {text: "Cravate", correct: false},
            {text: "Sari coloré", correct: true},
            {text: "Chapeau haut de forme", correct: false},
            {text: "Lunettes de soleil", correct: false},
        ]
    },
    {
        question: "Quelle est la phrase souvent entendue lors des repas de famille?",
        answer: [
            {text: "Tu as assez mangé ?", correct: true},
            {text: "Encore une petite portion !", correct: false},
            {text: "Mange, mange, tu es trop maigre !", correct: false},
            {text: "Encore une petite portion !", correct: false},
        ]
    },
    {
        question: "Quel est le sport national qui passionne des millions de fans ?",
        answer: [
            {text: "Football", correct: false},
            {text: "Basketball", correct: false},
            {text: "Kabaddi", correct: false},
            {text: "Cricket", correct: true},
        ]
    },
    {
        question: "Quelle est la cérémonie où l'on applique du henné sur les mains et les pieds ?",
        answer: [
            {text: "Holi", correct: false},
            {text: "Diwali", correct: false},
            {text: "Mehendi", correct: true},
            {text: "Pongal", correct: false},
        ]
    },
    {
        question: "Quel est le moyen de transport emblématique des grandes villes ?",
        answer: [
            {text: "Vélo", correct: false},
            {text: "Tuk-tuk", correct: true},
            {text: "Voiture", correct: false},
            {text: "Métro", correct: false},
        ]
    },
    {
        question: "Quelle est la fête des couleurs célébrée avec des poudres colorées?",
        answer: [
            {text: "Navratri", correct: false},
            {text: "Holi", correct: true},
            {text: "Onam", correct: false},
            {text: "Raksha Bandhan", correct: false},
        ]
    },
    {
        question: "Quel est le film de Bollywood le plus long jamais produit ?",
        answer: [
            {text: "Lagaan", correct: true},
            {text: "Gangs of Wasseypur", correct: false},
            {text: "Mughal-e-Azam", correct: false},
            {text: "Sholay", correct: false},
        ]
    },
    {
        question: "Quelle est la langue officielle de l'Inde ?",
        answer: [
            {text: "Tamoul", correct: false},
            {text: "Anglais", correct: false},
            {text: "Ourdou", correct: false},
            {text: "Hindi", correct: true},
        ]
    },
    {
        question: "Quelle est la signification du point rouge (bindi) porté sur le front ?",
        answer: [
            {text: "Décoration", correct: true},
            {text: "Statut marital", correct: false},
            {text: "Appartenance religieuse", correct: false},
            {text: "Toutes les réponses ci-dessus", correct: false},
        ]
    },
    {
        question: "Quel est l'instrument de musique traditionnel à cordes pincées ?",
        answer: [
            {text: "Sitar", correct: false},
            {text: "Tabla", correct: true},
            {text: "Harmonium", correct: false},
            {text: "Dhol", correct: false},
        ]
    },
    {
        question: "Quelle est la ville connue comme le centre de l'industrie cinématographique indienne ?",
        answer: [
            {text: "Kolkata", correct: false},
            {text: "Chennai", correct: false},
            {text: "Mumbai", correct: true},
            {text: "Delhi", correct: false},
        ]
    },
    {
        question: "Quel est le dessert sucré en forme de boule souvent servi lors des fêtes ?",
        answer: [
            {text: "Jalebi", correct: true},
            {text: "Pall Payasam", correct: false},
            {text: "Rolls", correct: false},
            {text: "Gulab jamun", correct: false},
        ]
    }
    
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