const questions = [
    {
        question: "Quelle soupe chaude est un plat traditionnel emblématique russe?",
        answer: [
            {text: "Minestrone", correct: false},
            {text: "Borscht", correct: true},
            {text: "Goulash", correct: false},
            {text: "Harira", correct: false},
        ]
    },
    {
        question: "Quelle est la langue officielle de la Russie?",
        answer: [
            {text: "Russe", correct: true},
            {text: "Biélorusse", correct: false},
            {text: "Ukrainien", correct: false},
            {text: "Tatar", correct: false},
        ]
    },
    {
        question: "Quelle boisson est souvent associée aux célébrations russes traditionnelles ?",
        answer: [
            {text: "Vodka", correct: false},
            {text: "Thé noir", correct: false},
            {text: "Kvass", correct: false},
            {text: "Toutes les réponses", correct: true},
        ]
    },
    {
        question: "Quelle ville russe est la plus peuplée?",
        answer: [
            {text: "Saint-Pétersbourg", correct: false},
            {text: "Novossibirsk", correct: false},
            {text: "Moscou", correct: true},
            {text: "Ekaterinbourg", correct: false},
        ]
    },
    {
        question: "Quel célèbre ballet a été composé par Piotr Ilitch Tchaïkovski?",
        answer: [
            {text: "Giselle", correct: false},
            {text: "Le Lac des cygnes", correct: false},
            {text: "Casse-Noisette", correct: false},
            {text: "B et C", correct: true},
        ]
    },
    {
        question: "Quel type d’habitat traditionnel en bois est typique des campagnes russes ?",
        answer: [
            {text: "Yourte", correct: false},
            {text: "Datcha", correct: false},
            {text: "Isba", correct: true},
            {text: "Maison longue", correct: false},
        ]
    },
    {
        question: "Quelle fête est célébrée début janvier et équivaut au Nouvel An orthodoxe ?",
        answer: [
            {text: "Maslenitsa", correct: false},
            {text: "Noël catholique", correct: false},
            {text: "Noël orthodoxe", correct: true},
            {text: "La Sainte-Nina", correct: false},
        ]
    },
    {
        question: "Quelle est la spécialité culinaire composée de crêpes fines souvent garnies de crème, confiture ou caviar ?",
        answer: [
            {text: "Pirojki", correct: false},
            {text: "Blinis", correct: true},
            {text: "Syrniki", correct: false},
            {text: "Pelmeni", correct: false},
        ]
    },
    {
        question: "Quel symbole russe est un jouet emblématique souvent vendu en série gigogne ?",
        answer: [
            {text: "Balalaïka", correct: false},
            {text: "Samovar", correct: false},
            {text: "Matriochka", correct: true},
            {text: "Doudou russe", correct: false},
        ]
    },
    {
        question: "Quelle est la langue la plus pratiquée en Russie?",
        answer: [
            {text: "Islam", correct: false},
            {text: "Christianisme orthodoxe", correct: true},
            {text: "Judaïsme", correct: false},
            {text: "Bouddhisme", correct: false},
        ]
    },
    {
        question: "Quelle est la région la plus vaste de Russie en superficie?",
        answer: [
            {text: "Kamtchatka", correct: false},
            {text: "Iakoutie (Sakha)", correct: true},
            {text: "Oural", correct: false},
            {text: "Krasnoïarsk", correct: false},
        ]
    },
    {
        question: "Quel écrivain russe a écrit “Crime et Châtiment”?",
        answer: [
            {text: "Tolstoï", correct: false},
            {text: "Dostoïevski", correct: true},
            {text: "Pouchkine", correct: false},
            {text: "Gogol", correct: false},
        ]
    },
    {
        question: "Quelle est la monnaie nationale de la Russie ??",
        answer: [
            {text: "Rouble", correct: true},
            {text: "Grivna", correct: false},
            {text: "Euro", correct: false},
            {text: "Zloty", correct: false},
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