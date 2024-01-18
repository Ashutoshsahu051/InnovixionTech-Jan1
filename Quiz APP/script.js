const  quizDB = [

    {
      question: "Q1: Which scientist formulated the theory of general relativity?",
      a: "Isaac Newton", 
      b: "Albert Einstein",
      c: "Stephen Hawking",
      d: "Niels Bohr",
      ans: "ans2"
    },
    {
      question: "Q2: Who was known as the Iron Lady and served as the Prime Minister of the United Kingdom from 1979 to 1990?",
      a: "Angela Merkel",
      b: "Margaret Thatcher",
      c: "Golda Meir",
      d: "Indira Gandhi",
      ans: "ans2"
    },
    {
      question: "Q3: Which country hosted the 2016 Summer Olympics?",
      a: "Brazil",
      b: "China",
      c: "United States",
      d: "Russia",
      ans: "ans1"
    },
    {
      question:"Q4: In which sport is the Ryder Cup contested?",
      a: "Golf",
      b: "Tennis",
      c: "Soccer",
      d: "Cricket",
      ans:"ans1"
    },
    {
      question: "Q5: What global event was the focus of the 2020 Nobel Peace Prize?",
      a: "Climate Change",
      b: "COVID19 Pandemic",
      c: "Human Rights",
      d: "Nuclear Disarmament",
      ans: "ans2"
    },
    {
      question: "Q6: Who is the current President of the United States (as of 2022)?",
      a: "Joe Biden",
      b: "Donald Trump",
      c: "Barack Obama",
      d: "George W. Bush",
      ans: "ans1"
    },
    {
      question: "Q7: What does CPU stand for?",
      a: "Central Processing Unit",
      b: "Central Programming Unit",
      c: "Computer Personal Unit",
      d: "Central Processor Unit",
      ans: "ans1"
    },
    {
      question: "Q8: Who is the co-founder of Microsoft Corporation?",
      a: "Steve Jobs",
      b: "Bill Gates",
      c: "Mark Zuckerberg",
      d: "Larry Page",
      ans: "ans2"
    },
    {
      question: "Q9: In which novel does Sherlock Holmes first appear?",
      a: "The Hound of the Baskervilles",
      b: "A Study in Scarlet",
      c: "The Adventures of Sherlock Holmes",
      d: "The Sign of Four",
      ans: "ans2"
    },
    {
      question: "Q10: Who wrote the play Romeo and Juliet?",
      a: "William Shakespeare",
      b: "Jane Austen",
      c: "Charles Dickens",
      d: "F. Scott Fitzgerald",
      ans: "ans1"
    },
    {
      question: "Q11: What is the value of the square root of 144?",
      a: "12",
      b: "14",
      c: "16",
      d: "18",
      ans: "ans1"
    },
    {
      question: "Q12: What is the square of 9?",
      a: "72",
      b: "81",
      c: "90",
      d: "99",
      ans: "ans2"
    },
    {
      question: "Q13: In which mountain range is Mount Everest located?",
      a: "Andes",
      b: "Alps",
      c: "Himalayas",
      d: "Rockies",
      ans: "ans3"
    },
    {
      question: "Q14: What is the longest river in the world?",
      a: "Nile",
      b: "Amazon",
      c: "Yangtze",
      d: "Mississippi-Missouri",
      ans: "ans1"
    },
    {
      question: "Q15: Who was the first emperor of China's Qin Dynasty?",
      a: "Confucius",
      b: "Mao Zedong",
      c: "Qin Shi Huang",
      d: "Sun Tzu",
      ans: "ans3"
    },
    {
      question: "Q16: In which year did Christopher Columbus reach the Americas?",
      a: "1492",
      b: "1510",
      c: "1556",
      d: "1601",
      ans: "ans1"
    },
    {
      question: "Q17: What is the chemical symbol for gold?",
      a: "Au",
      b: "Ag",
      c: "Fe",
      d: "Cu",
      ans: "ans1"
    },
    {
      question: "Q18: Who is considered the father of modern physics?",
      a: "Isaac Newton",
      b: "Albert Einstein",
      c: "Galileo Galilei",
      d: "Nikola Tesla",
      ans: "ans2"
    },
    {
      question: "Q19: What is the largest mammal in the world?",
      a: "Elephant",
      b: "Blue Whale",
      c: "Giraffe",
      d: "Hippopotamus",
      ans: "ans2"
    },
    {
      question: "Q20: Which planet is known as the Red Planet?",
      a: "Venus",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
      ans: "ans2"
    },
    {
      question: "Q21: What is the capital of France?",
      a: "Berlin",
      b: "London",
      c: "Paris",
      d: "Rome",
      ans: "ans3"
    },
    
];

const question= document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const ShowScore = document.querySelector('#ShowScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionlist = quizDB[questionCount];
    question.innerText = questionlist.question;

    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;

}

loadQuestion();

const getcheckanswer = () => {
    let answer;
     answers.forEach((curAnsElem)  => {
      if(curAnsElem.checked){
         answer = curAnsElem.id;
      }
     });

     return answer;

};

const deselctAll = () => {
    answers.forEach((curAnsElem) =>  curAnsElem.checked = false);    
}


submit.addEventListener('click', () => {
    const checkedanswer = getcheckanswer(); 
    console.log(checkedanswer);

    if(checkedanswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselctAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        ShowScore.innerHTML = `
         <h3> You scored ${score}/${quizDB.length} ✌️</h3>
         <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        ShowScore.classList.remove('ScoreArea');
    }
});