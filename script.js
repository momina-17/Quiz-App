const questions = [
    {
        question: "What does HTML stand for?",
        answer: [
            { Text: "Hyper Text Markup Language", correct: true },
            { Text: "High Transfer Machine Language", correct: false },
            { Text: "Hyper Tool Multi Language", correct: false },
            { Text: "Home Text Management Language", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: [
            { Text: "Creative Style Sheets", correct: false },
            { Text: "Cascading Style Sheets", correct: true },
            { Text: "Computer Style System", correct: false },
            { Text: "Colorful Style Sheets", correct: false },
        ]
    },
    {
        question: "Which language is used to make web pages interactive?",
        answer: [
            { Text: "HTML", correct: false },
            { Text: "CSS", correct: false },
            { Text: "JavaScript", correct: true },
            { Text: "SQL", correct: false },
        ]
    },
   {
    question: "Which JavaScript keyword declares a constant?",
    answer: [
        { Text: "let", correct: false },
        { Text: "var", correct: false },
        { Text: "const", correct: true },
        { Text: "constant", correct: false }
    ]
   },
    {
        question: "Which CSS property changes text color?",
        answer: [
            { Text: "background-color", correct: false },
            { Text: "font-size", correct: false },
            { Text: "text-align", correct: false },
            { Text: "color", correct: true },
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript (single-line)?",
        answer: [
            { Text: "<!-- -->", correct: false },
            { Text: "//", correct: true },
            { Text: "**", correct: false },
            { Text: "##", correct: false },
        ]
    },
    {
    question: "Which CSS property changes the background color?",
    answer: [
        { Text: "color", correct: false },
        { Text: "font-size", correct: false },
        { Text: "background-color", correct: true },
        { Text: "text-align", correct: false }
    ]
    },
    {
        question: "Which keyword declares a block-scoped variable in JavaScript?",
        answer: [
            { Text: "var", correct: false },
            { Text: "let", correct: true },
            { Text: "define", correct: false },
            { Text: "int", correct: false },
        ]
    },
    {
        question: "Which CSS property makes an element's corners rounded?",
        answer: [
            { Text: "border-style", correct: false },
            { Text: "margin", correct: false },
            { Text: "border-radius", correct: true },
            { Text: "padding", correct: false },
        ]
    },
    {
        question: "Which method selects an element by its ID in JavaScript?",
        answer: [
            { Text: "document.query()", correct: false },
            { Text: "document.getElementById()", correct: true },
            { Text: "document.getClass()", correct: false },
            { Text: "document.selectId()", correct: false },
        ]
    }
];
const ques =document.querySelector("#ques");
const ans =document.querySelectorAll(".ans");
const btn =document.querySelector("#btn");
const footer =document.querySelector("#footer");
let indx=0;
let score=0;
function startQuiz(){
    indx=0;
    score=0;
    showQues();
}
function showQues() {
    ans.forEach((val) => {
        val.disabled = false;
        val.style.backgroundColor = "";
        val.style.color = "";
        val.style.display = "block";
    });

    let curr = questions[indx];
    let num = indx + 1;

    ques.innerText = num + ". " + curr.question;
    footer.innerText = `${num} of ${questions.length}`;

    curr.answer.forEach((answer, index) => {
        ans[index].innerText = answer.Text;

        ans[index].onclick = () => {
            ans.forEach((val) => {
                val.disabled = true;
            });

            if (answer.correct) {
                ans[index].style.backgroundColor = "green";
                ans[index].style.color = "white";
                score++;
            } else {
                ans[index].style.backgroundColor = "red";
                ans[index].style.color = "white";
            }

            btn.innerText = "Next";
            btn.style.display = "block";
        };
    });
}
function nextQues() {
    btn.onclick = () => {

        // Reset button click hone par
        if (btn.innerText === "Reset") {
            ans.forEach((val) => {
                val.style.display = "block";
            });

            ques.style.textAlign = "";
            ques.style.fontSize = "";
            footer.style.marginRight = "";
            btn.style.display="none";


            startQuiz();
            return;
        }

        // Next button click hone par
        indx++;

        if (indx === questions.length) {
            ques.innerText = "Quiz Completed!";
            ques.style.textAlign = "center";
            ques.style.fontSize = "larger";

            footer.innerText =`Score : ${score}/${questions.length}`;
            footer.style.marginRight = "8px";

            ans.forEach((val) => {
                val.style.display = "none";
            });

            btn.innerText = "Reset";
            btn.style.display = "block";
        } else {
            showQues();
        }
    };
}

startQuiz();
nextQues();
