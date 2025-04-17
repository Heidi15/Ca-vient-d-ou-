const questions = [
    {
        question: "Quelle danse  est originaire d'Argentine et souvent associée à la passion ?",
        answer: [
            {text: "Salsa", correct: false},
            {text: "Tango", correct: true},
            {text: "Merengue", correct: false},
            {text: " Bachata", correct: false},
        ]
    },
    {
        question: " Quel plat mexicain est souvent mal prononcé et consiste en une tortilla roulée garnie de viande et de légumes ?",
        answer: [
            {text: "Burrito", correct: true},
            {text: "Taco", correct: false},
            {text: "Quesadilla", correct: false},
            {text: " Enchilada", correct: false},
        ]
    },
    {
        question: "Quel est le sport roi au Brésil, où les enfants apprennent à dribbler avant de marcher ?",
        answer: [
            {text: "Basketball", correct: false},
            {text: "Football", correct: true},
            {text: "Volleyball", correct: false},
            {text: "Capoeira", correct: false},
        ]
    },
    {
        question: "Quel accessoire est emblématique des fêtes mexicaines et souvent frappé pour libérer des bonbons ?",
        answer: [
            {text: "Sombrero", correct: false},
            {text: "Piñata", correct: true},
            {text: "Maracas", correct: false},
            {text: "Poncho", correct: false},
        ]
    },
    {
        question: "Quelle boisson alcoolisée, originaire du Mexique, est souvent consommée avec du sel et du citron ?",
        answer: [
            {text: "Tequila", correct: true},
            {text: "Rhum", correct: false},
            {text: "Pisco", correct: false},
            {text: "Cachaça", correct: false},
        ]
    },
    {
        question: "Quel est le surnom affectueux donné aux habitants de Buenos Aires, en Argentine ?",
        answer: [
            {text: "Cariocas", correct: false},
            {text: "Porteños", correct: true},
            {text: "Limeños", correct: false},
            {text: "Ticos", correct: false},
        ]
    },
    {
        question: "Quelle fête mexicaine célèbre les défunts avec des autels colorés et des offrandes ?",
        answer: [
            {text: "Cinco de Mayo", correct: false},
            {text: "Día de los Muertos", correct: true},
            {text: "Carnaval", correct: false},
            {text: "Semana Santa", correct: false},
        ]
    },
    {
        question: " Quel instrument de musique est essentiel dans un groupe de mariachis?",
        answer: [
            {text: "Guitare électrique", correct: false},
            {text: "Trompette", correct: true},
            {text: "Accordéon", correct: false},
            {text: "Bongo", correct: true},
        ]
    },
    {
        question: "Quel est le moyen de transport emblématique de Cuba, souvent associé aux années 1950?",
        answer: [
            {text: "Vespa", correct: false},
            {text: "Voitures américaines classiques", correct: true},
            {text: "Tuk-tuk", correct: false},
            {text: "Bateau à voile", correct: false},
        ]
    },
    {
        question: " Quelle île des Caraïbes est célèbre pour son carnaval haut en couleur et sa musique reggae ?",
        answer: [
            {text: " Jamaïque", correct: true},
            {text: "Porto Rico", correct: false},
            {text: "Cuba", correct: false},
            {text: "République dominicaine", correct: false},
        ]
    },
    {
        question: "Quel est le nom du célèbre canal qui relie l'océan Atlantique à l'océan Pacifique en Amérique centrale ?",
        answer: [
            {text: "Canal de Suez", correct: true},
            {text: "Canal de Panama", correct: false},
            {text: "Canal de Nicaragua", correct: false},
            {text: "Canal de Belize", correct: false},
        ]
    },
    {
        question: "Quel pays est réputé pour sa production de café de haute qualité, souvent considéré comme l'un des meilleurs au monde ?",
        answer: [
            {text: "Colombie", correct: true},
            {text: "Pérou", correct: false},
            {text: "Venezuela", correct: false},
            {text: "Équateur", correct: false},
        ]
    },
    {
        question: "Quel est le nom du célèbre site archéologique péruvien perché dans les montagnes des Andes ?",
        answer: [
            {text: "Chichen Itza", correct: false},
            {text: "Machu Picchu", correct: true},
            {text: "Tikal", correct: false},
            {text: "Teotihuacan", correct: false},
        ]
    },
    {
        question: "14. Quelle est la langue officielle du Brésil, unique parmi les pays d'Amérique latine ?",
        answer: [
            {text: "Espagnol", correct: false},
            {text: "Portugais", correct: true},
            {text: "Français", correct: false},
            {text: "Italien", correct: false},
        ]
    },
    {
        question: "Quel est le nom du célèbre carnaval brésilien connu pour ses défilés spectaculaires et ses costumes extravagants ?",
        answer: [
            {text: "Carnaval de Rio", correct: true},
            {text: "Carnaval de Salvador", correct: false},
            {text: "Carnaval de Recife", correct: false},
            {text: "Carnaval de São Paulo", correct: false},
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