const questions = [
    { question: "De quelle région de France vient principalement la famille Macquart de Terline ?", options: ["Normandie","Flandre française","Provence","Bretagne"], answer: "Flandre française", image: "images/fief.jpg" },
    { question: "Quand la famille Macquart de Terline s’installe-t-elle sur les terres de Terline ?", options: ["XVIIIᵉ siècle","XIXᵉ siècle","XVIᵉ siècle","XIIᵉ siècle"], answer: "XVIᵉ siècle", image: "images/fief.jpg" },
    { question: "Quel était le rôle principal de leur fief de Terline ?", options: ["Château militaire uniquement","Domaine central et cœur de leur influence","Université","Résidence secondaire"], answer: "Domaine central et cœur de leur influence", image: "images/fief.jpg" },
    { question: "Qu’est-ce que le fief de Terline comprenait ?", options: ["Des terres agricoles, forêts et hameaux","Un château uniquement","Un village moderne","Une usine et un port"], answer: "Des terres agricoles, forêts et hameaux", image: "images/cadastral.jpg" },
    { question: "Quels autres domaines appartenaient à la famille Macquart de Terline ?", options: ["Versailles et Fontainebleau","Ophove, Maugré, Mernes, Soisseval","Metz et Verdun","Saint-Malo et Nantes"], answer: "Ophove, Maugré, Mernes, Soisseval", image: "images/fief.jpg" },
    { question: "Dans quelle ville se trouve le siège de la seigneurie de Soisseval ?", options: ["Dunkerque","Paris","Merris (près de Bailleul)","Lille"], answer: "Merris (près de Bailleul)", image: "images/fief.jpg" },
    { question: "Vrai ou faux : la famille a conservé ses terres et son château après la Révolution française.", options: ["Faux","Vrai","",""], answer: "Vrai", image: "images/chateau_blendecques.jpg" },
    { question: "Quelle était la religion principale de la famille Macquart de Terline ?", options: ["Islam","Catholicisme","Judaïsme","Protestantisme"], answer: "Catholicisme", image: "images/eglise.jpg" },
    { question: "Que faisaient-ils pour montrer leur foi et leur attachement aux traditions ?", options: ["Construire des usines","Financer des églises ou des chapelles","Créer des banques","Voyager en Orient"], answer: "Financer des églises ou des chapelles", image: "images/eglise.jpg" },
    { question: "Pendant la Première Guerre mondiale, que subit le château familial ?", options: ["Il servit de cantonnement militaire","Il fut vendu","Il fut transformé en musée","Il fut démoli"], answer: "Il servit de cantonnement militaire", image: "images/chateau_blendecques.jpg" },
    { question: "Que se passe-t-il pour la famille pendant la Seconde Guerre mondiale ?", options: ["Elle devient neutre","Elle reste présente sur ses terres et soutient la Résistance","Elle perd toutes ses possessions","Elle fuit en Angleterre"], answer: "Elle reste présente sur ses terres et soutient la Résistance", image: "images/chateau_blendecques.jpg" },
    { question: "Quels événements historiques ont marqué le fief et le château au XXᵉ siècle ?", options: ["La révolution industrielle","Les guerres mondiales","Les guerres de religion","La guerre de Cent Ans"], answer: "Les guerres mondiales", image: "images/chateau_blendecques.jpg" },
    { question: "Quel château la famille Macquart de Terline a-t-elle acheté au XVIIIᵉ siècle ?", options: ["Château de Maugré","Château de Terline","Château de Blendecques","Château de Soisseval"], answer: "Château de Blendecques", image: "images/chateau_blendecques.jpg" },
    { question: "Quelles valeurs la famille Macquart de Terline met-elle en avant ?", options: ["Aventure et voyage","Politique et pouvoir","Loyauté, honneur et devoir","Commerce et profit"], answer: "Loyauté, honneur et devoir", image: "images/blason.jpg" },
    { question: "Que représente le blason de la famille Macquart de Terline ?", options: ["Une croix et un dragon","Une fleur de lys","Une tour et un chevalier","Une palme avec deux lions et la devise Consilio et virtute"], answer: "Une palme avec deux lions et la devise Consilio et virtute", image: "images/blason.jpg" }
];

let current = 0;
let score = 0;

const startBtn = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quizContainer");
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quizImg = document.getElementById("quizImg");
const scoreDisplay = document.getElementById("score");

startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
});

function showQuestion() {
    const q = questions[current];
    questionText.textContent = q.question;
    quizImg.src = q.image;
    quizImg.alt = q.question;
    optionsDiv.innerHTML = "";
    nextBtn.classList.add("hidden");

    q.options.forEach(option => {
        if(option !== ""){
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.onclick = () => selectAnswer(option);
            optionsDiv.appendChild(btn);
        }
    });
}

function selectAnswer(option){
    const q = questions[current];
    if(option === q.answer) score++;
    Array.from(optionsDiv.children).forEach(btn=>{
        btn.disabled = true;
        if(btn.textContent === q.answer) btn.style.backgroundColor = "#06d6a0";
        else if(btn.textContent === option) btn.style.backgroundColor = "#ef476f";
    });
    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", ()=>{
    current++;
    if(current < questions.length) showQuestion();
    else showScore();
});

function showScore(){
    quizContainer.innerHTML = `<h3>Votre score : ${score}/${questions.length}</h3>
    <button onclick="restartQuiz()">Rejouer</button>`;
}

function restartQuiz(){
    current = 0;
    score = 0;
    quizContainer.innerHTML = `<div id="questionImage"><img src="" alt="" id="quizImg"></div>
    <p id="questionText"></p>
    <div id="options"></div>
    <button id="nextBtn" class="hidden">Question suivante</button>
    <p id="score"></p>`;
    showQuestion();
}
