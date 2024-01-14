import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import questions from './utils/questions';

const quest = getRandomQuestions();
renderQuestion(quest);

async function renderQuestion(question){  
    const main = document.querySelector('main');
    let noQuestion = 0;
    main.innerHTML = ''; 
    question.forEach((q) => {
        noQuestion += 1;
        main.innerHTML += `
        <div class ="mt-3">
        ${q.question}
        <br>
        <form id="form${noQuestion}">
        <label for="option1">${JSON.stringify(q.answers[0].text)}</label>
        <input type="radio" name="optionQ${noQuestion}" value="${JSON.stringify(q.answers[0].isCorrect)}"><br>
        <label for="option2">${JSON.stringify(q.answers[1].text)}</label>
        <input type="radio" name="optionQ${noQuestion}" value="${JSON.stringify(q.answers[1].isCorrect)}"><br>
        <label for="option3">${JSON.stringify(q.answers[2].text)}</label>
        <input type="radio" name="optionQ${noQuestion}" value="${JSON.stringify(q.answers[2].isCorrect)}"><br>
        </form>
        </div>
        `;
    });
    main.innerHTML += `<br> <div id="check"><button type="submit" class="btn btn-primary" id="calculate">Calculate my score</button></div>`
    
    const calculate = document.querySelector('#calculate');
    calculate.addEventListener('click', async () => {
        calculate.style.display = 'none';
        const score = await checkAnswers();
        const check = document.querySelector('#check');
        check.innerHTML += `Your score is ${score}/3
        <br>
        <button type="submit" class="btn btn-primary" id="restart">Restart</button>
        `;

        const restart = document.querySelector('#restart');
        restart.addEventListener('click', () => {
            renderQuestion(getRandomQuestions());
        });

    });
}

async function checkAnswers(){
let score = 0;
   const forms = document.querySelectorAll('form');
   forms.forEach((f) => {
       const selectedOption = f.querySelector('input[type="radio"]:checked');
       if (selectedOption.value === 'true'){
           score += 1;
       }
   });
   return score;
}


function getRandomQuestions(){
    const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 3);
    return randomQuestions;
}



