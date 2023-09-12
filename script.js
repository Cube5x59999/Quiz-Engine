// Main varibles
let currentQuestion = undefined;
let currentTime = 60;
let score = 0;

let questions = 
[
    "12 = <i>a</i> + 20, <i>a</i> = ?",
    "10<sup>3</sup> = ?",
    "Ball:Circle::Door:?",
    "Moon:Earth::Sun:?",
    "Which orbit is Earth located to the Sun?",
    "Area of Rectangle :",
    "Wood:Table::Wall:?",
    "Ball:Bat::Cock:?",
    "1+[2+3+4+5+6+7+(8+9*0)] = ?"
];

let options = 
[
    [-12, -8, -16, -9],
    [1000, 919, 1001, 1010],
    ["Square","Cube","Cone","Rectangle"],
    ["Milky way","Solar System","Galaxy","Universe"],
    ["1<sup>st</sup>","2<sup>nd</sup>","3<sup>rd</sup>","4<sup>th</sup>"],
    ["Length<sup>2</sup>","Sides * 4","(Length * 2) + (Breadth * 2)","Length * Breadth"],
    ["Wood","Stone","Slate","All of these"],
    ["Bat","Hockey Stick","Racket","Hand"],
    [27, 26, 20, 17]
];

let answer = 
[2,1,4,2,3,4,4,3,1];

const TOTAL_QUESTIONS = questions.length -1;

//Main Objects
const questionDisplay = document.getElementById("questionDisplay");
const o1 = document.getElementById("option1");
const o2 = document.getElementById("option2");
const o3 = document.getElementById("option3");
const o4 = document.getElementById("option4");
const timer = document.getElementById("timerDisplay");

const optionArray = [o1, o2, o3, o4];

// Important functions
function ChooseRandomQuestion() {
    return Math.round(Math.random() * TOTAL_QUESTIONS);
};

function CheckAnswerCorrect(Input) {
    if (Input == answer[currentQuestion]) {
        NextQuestion();
        score += 10;
        return true;
    }else{
        optionArray[answer[currentQuestion]-1].classList.add("correct");
        optionArray[Input-1].classList.add("incorrect");
        score -= 20;
        return false;
    }
};

function NextQuestion() {
    let previousQuestion = currentQuestion;
    currentQuestion = ChooseRandomQuestion();
    if (previousQuestion == currentQuestion) {
        NextQuestion();
        return;
    }
    questionDisplay.innerHTML = questions[currentQuestion];
    for (let i = 0; i < 4; i++) {
        let temp = options[currentQuestion];
        optionArray[i].innerHTML = temp[i];
        if (optionArray[i].classList.contains("correct")) {
            optionArray[i].classList.remove("correct");
        }
        if (optionArray[i].classList.contains("incorrect")) {
            optionArray[i].classList.remove("incorrect");
        }
    }
}

function TimeInterval() {
    currentTime -= 1;
    if (currentTime < 1) {
        alert("Time's up! Score : "+score);
        currentTime = undefined;
    }
    timer.innerHTML = currentTime;
}

// Options
function option1() {
    CheckAnswerCorrect(1);
};
function option2() {
    CheckAnswerCorrect(2);
};
function option3() {
    CheckAnswerCorrect(3);
};
function option4() {
    CheckAnswerCorrect(4);
};

setInterval(TimeInterval, 1000);

// Main function
function Main() {
    NextQuestion();
}

// Main function call
Main();