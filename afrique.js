const questions = [
    {
        question: "Quelle est la boisson fraîche qu'on te sert dès ton arrivée, surtout en famille ?",
        answer: [
            {text: "Jus d’orange", correct: false},
            {text: "Bissap", correct: true},
            {text: "Eau pétillante", correct: false},
            {text: "Soda", correct: false},
        ]
    },
    {
        question: "Quel plat mijoté est souvent cuisiné dans un plat en terre cuite conique ?",
        answer: [
            {text: "Ndolé", correct: false},
            {text: "Fufu sauce arachide", correct: true},
            {text: "Alloco", correct: false},
            {text: "Thiéboudienne", correct: false},
        ]
    },
    {
        question: "Quelle danse traditionnelle mêle mouvements d’épaules et rythme envoûtant ?",
        answer: [
            {text: "Coupé-décalé", correct: false},
            {text: "Salsa", correct: false},
            {text: "Ndombolo", correct: true},
            {text: "Ballet classique", correct: false},
        ]
    },
    {
        question: "Quel est l’accessoire traditionnel porté par les hommes lors des grandes fêtes ?",
        answer: [
            {text: "Soie", correct: false},
            {text: "Wax", correct: true},
            {text: "Velours", correct: false},
            {text: "Lin", correct: false},
        ]
    },
    {
        question: "Quelle est la phrase qu’on entend souvent chez une maman maghrébine ?",
        answer: [
            {text: "Tu veux encore ?", correct: false},
            {text: "C’est un peu pimenté…", correct: false},
            {text: "Mange bien, tu as maigri !", correct: true},
            {text: "Tu n’aimes pas ? Alors laisse !", correct: false},
        ]
    },
    {
        question: "Quel sport est roi au Maghreb, avec des stades souvent en ébullition ??",
        answer: [
            {text: "Handball", correct: false},
            {text: "Football", correct: true},
            {text: "Basket", correct: false},
            {text: "Athlétisme", correct: false},
        ]
    },
    {
        question: "Quelle cérémonie précède souvent le mariage avec des chants et du henné ??",
        answer: [
            {text: "Basket", correct: false},
            {text: "Athlétisme", correct: true},
            {text: "Football", correct: false},
            {text: "Lutte sénégalaise", correct: false},
        ]
    },
    {
        question: "Quel moyen de transport est typique dans les médinas et ruelles étroites ??",
        answer: [
            {text: "Noël", correct: false},
            {text: "Pâques", correct: false},
            {text: "Aïd el-Fitr", correct: true},
            {text: "Nouvel an", correct: true},
        ]
    },
    {
        question: "Quelle fête religieuse donne lieu à des retrouvailles familiales et de grands repas ?",
        answer: [
            {text: "Taxi-moto", correct: false},
            {text: "Trottinette", correct: false},
            {text: "Mini-bus (gbaka, bush-taxi, etc.)", correct: false},
            {text: "Vélo", correct: true},
        ]
    },
    {
        question: "Quelle ville est considérée comme un joyau du cinéma maghrébin, surtout pour ses festivals ?",
        answer: [
            {text: "Alger", correct: false},
            {text: "Casablanca", correct: false},
            {text: "Tunis", correct: false},
            {text: "Ouarzazate", correct: true},
        ]
    },
    {
        question: "Quelle est la langue la plus parlée au quotidien au Maghreb ??",
        answer: [
            {text: "Chignon", correct: false},
            {text: "Tresses africaines", correct: true},
            {text: "Carré plongeant", correct: false},
            {text: "Coupe afro", correct: false},
        ]
    },
    {
        question: "Quel est l’ingrédient souvent utilisé dans les plats maghrébins pour donner du goût ?",
        answer: [
            {text: "Quand l’arbre tombe, on entend la forêt.", correct: true},
            {text: "Un mensonge peut courir un an, la vérité le rattrape en un jour.", correct: false},
            {text: "Celui qui mange seul meurt seul.", correct: false},
            {text: "Toutes les réponses ci-dessus", correct: false},
        ]
    },
    {
        question: "Quel dessert est composé de feuilles de brick, de miel et d’amandes ?",
        answer: [
            {text: "K-pop", correct: false},
            {text: "Afrobeats", correct: false},
            {text: "Techno", correct: true},
            {text: "Jazz", correct: false},
        ]
    },
    {
        question: "Quelle est la langue qu’on entend souvent au marché, dans les bus ou chez mamie ??",
        answer: [
            {text: "Anglais", correct: false},
            {text: "Français", correct: true},
            {text: "Langue locale (wolof, lingala, bambara, etc.)", correct: false},
            {text: "Espagnol", correct: false},
        ]
    },
    {
        question: "Quelle est l’activité familiale du dimanche qui prend toute la journée ?",
        answer: [
            {text: "Sieste", correct: false},
            {text: "Fête", correct: false},
            {text: "Cuisine + repas collectif", correct: true},
            {text: "Sortie au cinéma", correct: false},
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