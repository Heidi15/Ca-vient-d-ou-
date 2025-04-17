const questions = [
    {
        question: "Quelle est la boisson iconique que l'on retrouve souvent lors des barbecues aux États-Unis?",

        answer: [
            {text: "Jus de cranberry", correct: false},
            {text: "Thé glacé", correct: true},
            {text: "Bissap", correct: false},
            {text: "Coca-Cola", correct: false},
        ]
    },
    {
        question: "Quel est le plat typique à base de maïs et de haricots, souvent accompagné de viande ?",
        answer: [
            {text: "Tacos", correct: false},
            {text: "Burrito", correct: false},
            {text: "Chili con carne", correct: true},
            {text: "Poutine", correct: false},
        ]
    },
    {
        question: "Quel est le dessert traditionnel servi lors de l’Action de grâce (Thanksgiving) aux États-Unis ?",
        answer: [
            {text: "Gâteau au chocolat", correct: false},
            {text: "Apple pie", correct: false},
            {text: "Brownies", correct: false},
            {text: "Tarte à la citrouille", correct: true},
        ]
    },
    {
        question: "Quel est le sport le plus populaire au Canada ?",
        answer: [
            {text: "Football américain", correct: false},
            {text: "Baseball", correct: false},
            {text: "Hockey sur glace", correct: true},
            {text: "Basketball", correct: false},
        ]
    },
    {
        question: "Quel est l’élément clé dans la préparation d'un 'poutine' au Québec ?",
        answer: [
            {text: "Fromage râpé", correct: false},
            {text: "Sauce brune", correct: false},
            {text: "Frites", correct: false},
            {text: "Tous les éléments ci-dessus", correct: true},
        ]
    },
    {
        question: "Quel est l'instrument traditionnel associé à la musique country américaine ?",
        answer: [
            {text: "Guitare électrique", correct: false},
            {text: "Banjo", correct: true},
            {text: "Trompette", correct: false},
            {text: "Piano", correct: false},
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
        question: "Quel événement célèbre en juillet au Canada rassemble de nombreuses attractions et festivités ?",
        answer: [
            {text: "Fête du Travail", correct: false},
            {text: "Carnaval de Québec", correct: false},
            {text: "Canada Day", correct: true},
            {text: "Thanksgiving", correct: false},
        ]
    },
    {
        question: "Quel est le moyen de transport emblématique souvent utilisé au Mexique pour se déplacer en groupe dans les villes ?",
        answer: [
            {text: "Métro", correct: false},
            {text: "Bus scolaire", correct: false},
            {text: "Tuktuk", correct: false},
            {text: "Colectivos (minibus)", correct: true},
        ]
    },
    {
        question: "Quelle est la langue officielle de la majorité des habitants du Québec ?",
        answer: [   
            {text: "Anglais", correct: false},
            {text: "Espagnol", correct: false},
            {text: "Français", correct: true},
            {text: "Portugais", correct: false},
        ]
    },
    {
        question: "Quel est le site naturel canadien réputé pour ses montagnes, lacs et paysages sauvages ?",
        answer: [
            {text: "Parc national de Banff", correct: true},
            {text: "Vallée de la Loire", correct: false},
            {text: "Mont Fuji", correct: false},
            {text: "Grand Canyon", correct: false},
        ]
    },
    {
        question: "Quel est le film hollywoodien qui a marqué l’histoire du cinéma en étant l’un des plus grands succès mondiaux ? ?",
        answer: [
            {text: "Titanic", correct: true},
            {text: "Avatar", correct: false},
            {text: "Star Wars", correct: false},
            {text: "Avengers : Endgame", correct: false},
        ]
    },
    {
        question: "Quel est le plat mexicain populaire à base de tortillas garnies de viande, de fromage et de légumes ?",
        answer: [
            {text: "Nachos", correct: false},
            {text: "Fajitas", correct: false},
            {text: "Enchiladas", correct: false},
            {text: "Tacos", correct: true},
        ]
    },
    {
        question: "Quel est le symbole emblématique du Canada, souvent visible sur les pièces de monnaie ?",
        answer: [
            {text: "L’aigle", correct: false},
            {text: "L’ours", correct: false},
            {text: " La feuille d'érable", correct: true},
            {text: "Le castor", correct: false},
        ]
    },
    {
        question: "Quel est l’événement sportif majeur aux États-Unis qui a lieu chaque année en février ?",
        answer: [
            {text: "Daytona 500", correct: false},
            {text: "Super Bowl", correct: true},
            {text: "NBA All-Star Game", correct: false},
            {text: "US Open", correct: false},
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