const questions = [
    {
        question: "Quelle est la boisson chaude emblématique, servie avec beaucoup de sucre et de menthe ?",
        answer: [
            {text: "Thé vert à la menthe", correct: true},
            {text: "Lait chaud", correct: false},
            {text: "Jus d’orange", correct: false},
            {text: "Café turc", correct: false},
        ]
    },
    {
        question: "Quel plat mijoté est souvent cuisiné dans un plat en terre cuite conique ?",
        answer: [
            {text: "Couscous", correct: false},
            {text: "Tajine", correct: true},
            {text: "Harira", correct: false},
            {text: "Chakchouka", correct: false},
        ]
    },
    {
        question: "Quelle danse traditionnelle mêle mouvements d’épaules et rythme envoûtant ?",
        answer: [
            {text: "Dabke", correct: false},
            {text: "Raqs sharqi", correct: false},
            {text: "Chaâbi", correct: true},
            {text: "Danse du ventre", correct: false},
        ]
    },
    {
        question: "Quel est l’accessoire traditionnel porté par les hommes lors des grandes fêtes ?",
        answer: [
            {text: "Cravate", correct: false},
            {text: "Chéchia", correct: true},
            {text: "Borsalino", correct: false},
            {text: "Képi", correct: false},
        ]
    },
    {
        question: "Quelle est la phrase qu’on entend souvent chez une maman maghrébine ?",
        answer: [
            {text: "T’as mis un pull ?", correct: false},
            {text: "Je t’ai préparé un petit truc à manger.", correct: false},
            {text: "Mange, tu vas fondre sinon !", correct: true},
            {text: "Rentre avant la prière !", correct: false},
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
            {text: "La Halqa", correct: false},
            {text: "La Henna", correct: true},
            {text: "La Baraka", correct: false},
            {text: "La Choura", correct: false},
        ]
    },
    {
        question: "Quel moyen de transport est typique dans les médinas et ruelles étroites ??",
        answer: [
            {text: "Tramway", correct: false},
            {text: "Dromadaire", correct: false},
            {text: "Petit taxi", correct: true},
            {text: "Bus touristique", correct: true},
        ]
    },
    {
        question: "Quelle fête religieuse donne lieu à des retrouvailles familiales et de grands repas ?",
        answer: [
            {text: "Aïd el-Kebir", correct: false},
            {text: "Mawlid", correct: false},
            {text: "Ramadan", correct: false},
            {text: "Aïd el-Fitr", correct: true},
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
            {text: "Français", correct: false},
            {text: "Arabe dialectal", correct: true},
            {text: "Tamazight", correct: false},
            {text: "Espagnol", correct: false},
        ]
    },
    {
        question: "Quel est l’ingrédient souvent utilisé dans les plats maghrébins pour donner du goût ?",
        answer: [
            {text: "Cumin", correct: true},
            {text: "Curry", correct: false},
            {text: "Piment d'Espelette", correct: false},
            {text: "Cannelle", correct: false},
        ]
    },
    {
        question: "Quel dessert est composé de feuilles de brick, de miel et d’amandes ?",
        answer: [
            {text: "Loukoum", correct: false},
            {text: "Makroud", correct: false},
            {text: "Baklava", correct: true},
            {text: "Cornes de gazelle", correct: false},
        ]
    },
    {
        question: "Quelle musique populaire aux sonorités envoûtantes vient d’Algérie ?",
        answer: [
            {text: "Chaâbi", correct: false},
            {text: "Raï", correct: true},
            {text: "Gnaoua", correct: false},
            {text: "Malouf", correct: false},
        ]
    },
    {
        question: "1. Quelle structure familiale est encore très ancrée dans les traditions maghrébines ?",
        answer: [
            {text: "Famille nucléaire", correct: false},
            {text: "Famille recomposée", correct: false},
            {text: "Famille élargie", correct: true},
            {text: " Colocation intergénérationnelle", correct: false},
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