const questions = [
    {
        question: "Quel plat traditionnel est souvent farci de viande ou de chou et se mange en famille ?",

        answer: [
            {text: "Pierogi", correct: false},
            {text: "Goulash", correct: false},
            {text: "Sarmale", correct: true},
            {text: "Borscht", correct: false},
        ]
    },
    {
        question: "Quelle boisson est incontournable lors des fêtes de famille ou des toasts entre amis ?",
        answer: [
            {text: "Bière blonde", correct: false},
            {text: "Vin rouge", correct: false},
            {text: "Vodka", correct: true},
            {text: "Raki", correct: false},
        ]
    },
    {
        question: "Quel est l’instrument de musique souvent associé à la musique traditionnelle tzigane ?",
        answer: [
            {text: "Guitare électrique", correct: false},
            {text: "Violon", correct: true},
            {text: "Tambourin", correct: false},
            {text: "Cornemuse", correct: false},
        ]
    },
    {
        question: "Quel est le moyen de transport le plus utilisé dans les grandes villes d'Europe de l'Est ?",
        answer: [
            {text: "Voiture", correct: false},
            {text: "Tramway", correct: true},
            {text: "Métro", correct: false},
            {text: "Charrette", correct: false},
        ]
    },
    {
        question: "Quelle danse folklorique typique de Roumanie fait tourner les têtes (et les jupes) ?",
        answer: [
            {text: "Kalinka", correct: false},
            {text: "Hora", correct: false},
            {text: "Mazurka", correct: false},
            {text: "Polka", correct: true},
        ]
    },
    {
        question: "Quel est le dessert roulé, souvent aux noix ou au pavot, qu’on sert pendant les fêtes ?",
        answer: [
            {text: "Strudel", correct: false},
            {text: "Pască", correct: true},
            {text: "Pască", correct: false},
            {text: "Beigli", correct: true},
        ]
    },
    {
        question: "Quel est le symbole souvent présent sur les œufs décorés à Pâques en Ukraine ?",
        answer: [
            {text: "Soleil", correct: false},
            {text: "Croix", correct: true},
            {text: "Spirale", correct: false},
            {text: "Toutes les réponses ci-dessus", correct: false},
        ]
    },
    {
        question: "Quel pays est réputé pour sa soupe froide à la betterave appelée “barszcz” ?",
        answer: [
            {text: "Bulgarie", correct: false},
            {text: "Hongrie", correct: false},
            {text: "Pologne", correct: true},
            {text: "Roumanie", correct: false},
        ]
    },
    {
        question: "Quelle est la fête hivernale célébrée avec masques, danses et effigies de l’hiver ?",
        answer: [
            {text: "Slava", correct: false},
            {text: "Martisor", correct: false},
            {text: "Maslenitsa", correct: true},
            {text: "Dragobete", correct: false},
        ]
    },
    {
        question: "Quelle est la tradition liée à la Saint-André en Roumanie?",
        answer: [   
            {text: "Chasser les mauvais esprits", correct: false},
            {text: "Manger du poisson", correct: false},
            {text: "Brûler un pantin en bois", correct: false},
            {text: "Chercher l’amour en jetant du sel", correct: true},
        ]
    },
    {
        question: "Quelle est la ville d’Europe de l’Est célèbre pour son château gothique associé à Dracula ??",
        answer: [
            {text: "Prague", correct: false},
            {text: "Cracovie", correct: false},
            {text: "Sofia", correct: false},
            {text: "Bran", correct: true},
        ]
    },
    {
        question: "Quel plat hongrois à base de paprika est souvent confondu avec une soupe ?",
        answer: [
            {text: "Goulash", correct: true},
            {text: "Lángos", correct: false},
            {text: "Pörkölt", correct: false},
            {text: "Tokány", correct: false},
        ]
    },
    {
        question: "Quelle langue slave utilise l’alphabet cyrillique ?",
        answer: [
            {text: "Tchèque", correct: false},
            {text: "Polonais", correct: false},
            {text: "Russe", correct: true},
            {text: "Hongrois", correct: false},
        ]
    },
    {
        question: "Quel est le vêtement traditionnel souvent brodé porté lors des fêtes roumaines ?",
        answer: [
            {text: "Sarafan", correct: false},
            {text: "Vyshyvanka", correct: false},
            {text: "le", correct: true},
            {text: "Dirndl", correct: false},
        ]
    },
    {
        question: "Quel est le style musical moderne aux influences balkaniques, fanfare et accordéon ?",
        answer: [
            {text: "Klezmer", correct: false},
            {text: "Balkan Beat", correct: false},
            {text: "Turbo-folk", correct: true},
            {text: "Electro-tziganesque", correct: false},
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