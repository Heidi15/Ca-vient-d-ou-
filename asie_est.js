const questions = [
    {
        question: " Quelle est la soupe de nouilles instantanées prisée pour sa rapidité de préparation ?",
        answer: [
            {text: "Ramen", correct: true},
            {text: "Pho", correct: false},
            {text: "Udon", correct: false},
            {text: "Soba", correct: false},
        ]
    },
    {
        question: "Quelle est la pratique japonaise consistant à faire la sieste au travail ?",
        answer: [
            {text: "Ikebana", correct: false},
            {text: "Inemuri", correct: true},
            {text: "Karaoke", correct: false},
            {text: "Origami", correct: false},
        ]
    },
    {
        question: "Quel est le sport traditionnel japonais impliquant des lutteurs de grande taille ?",
        answer: [
            {text: "Judo", correct: false},
            {text: "Sumo", correct: true},
            {text: "Kendo", correct: false},
            {text: "Aikido", correct: false},
        ]
    },
    {
        question: "Quelle est la boisson alcoolisée fermentée à base de riz ?",
        answer: [
            {text: "Soju", correct: false},
            {text: "Sake", correct: true},
            {text: "Baijiu", correct: false},
            {text: "Shochu", correct: false},
        ]
    },
    {
        question: "Quelle est la cérémonie coréenne où l'on honore les ancêtres ?",
        answer: [
            {text: "Chuseok", correct: true},
            {text: "Seollal", correct: false},
            {text: "Dano", correct: false},
            {text: "Jeju", correct: false},
        ]
    },
    {
        question: "Quel est le plat chinois composé de boulettes de pâte farcies ?",
        answer: [
            {text: "Dim sum", correct: false},
            {text: "Baozi", correct: false},
            {text: "Jiaozi", correct: true},
            {text: "Wonton", correct: false},
        ]
    },
    {
        question: "Quel est le vêtement traditionnel japonais porté lors des festivals ?",
        answer: [
            {text: "Kimono", correct: true},
            {text: "Hanbok", correct: false},
            {text: "Cheongsam", correct: false},
            {text: "Ao dai", correct: false},
        ]
    },
    {
        question: "Quelle est la technique artistique japonaise de pliage du papier ?",
        answer: [
            {text: "Origami", correct: false},
            {text: "Ukiyo-e", correct: true},
            {text: "Sumi-e", correct: false},
            {text: "Kintsugi", correct: false},
        ]
    },
    {
        question: "Quel est le dessert glacé coréen garni de fruits et de haricots rouges ?",
        answer: [
            {text: "Bingsu", correct: true},
            {text: "Mochi", correct: false},
            {text: "Taiyaki", correct: false},
            {text: "Hotteok", correct: false},
        ]
    },
    {
        question: "Quelle est la pratique chinoise consistant à boire du thé en petites gorgées ?",
        answer: [
            {text: "Gongfu cha", correct: true},
            {text: "Cha dao", correct: false},
            {text: "Yum cha", correct: false},
            {text: "Cha no yu", correct: false},
        ]
    },
    {
        question: "Quel est le jeu de société stratégique originaire de Chine ?",
        answer: [
            {text: "Mahjong", correct: true},
            {text: "Go", correct: false},
            {text: "Xiangqi", correct: false},
            {text: "Shogi", correct: false},
        ]
    },
    {
        question: "Quelle est la fête japonaise des étoiles célébrée en juillet ?",
        answer: [
            {text: "Tanabata", correct: true},
            {text: "Machu Picchu", correct: false},
            {text: "Konoha", correct: false},
            {text: "Obon", correct: false},
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