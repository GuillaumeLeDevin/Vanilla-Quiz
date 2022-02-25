const form = document.querySelector('.form-quizz');
let tableResults = [];
const answers = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titleResult = document.querySelector('.results h2');
const noteResult = document.querySelector('.note');
const helpResult = document.querySelector('.help');
const allQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableResults);
    verifFunc(tableResults);
    tableResults = [];
})

function verifFunc(tabResults) {

    for(let a = 0; a < 5; a++){

        if(tabResults[a] === answers[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    // console.log(verifTableau);
    displayResults(verifTableau);
    colorsFunction(verifTableau);
    verifTableau = [];
}

function displayResults(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titleResult.innerText = `✔️ Bravo, Perfect! ✔️`
            helpResult.innerText = ''
            noteResult.innerText = '5/5'
            break;
        case 1:
            titleResult.innerText = `✨ Almost! ✨`
            helpResult.innerText = 'Try to correct the red answer!'
            noteResult.innerText = '4/5'
            break;
        case 2:
            titleResult.innerText = `✨ Don't give up... 👀`
            helpResult.innerText = 'Try to correct the red answer, then valid again!'
            noteResult.innerText = '3/5'
            break;
        case 3:
            titleResult.innerText = `👀 Still few mistakes! 😭`
            helpResult.innerText = 'Try to correct the red answer, then valid again!'
            noteResult.innerText = '2/5'
            break;
        case 4:
            titleResult.innerText = `😭 You can do better! 😭`
            helpResult.innerText = 'Try to correct the red answer, then valid again!'
            noteResult.innerText = '1/5'
            break;
        case 5:
            titleResult.innerText = `👎 You can do better! 👎`
            helpResult.innerText = 'Try to correct the red answer, then valid again!'
            noteResult.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }

}


function colorsFunction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            allQuestions[j].style.background = 'lightgreen';
        } else {
            allQuestions[j].style.background = '#ffb8b8';
            allQuestions[j].classList.add('fail');

            setTimeout(() => {
                allQuestions[j].classList.remove('fail');
            }, 500)
        }
        
    }

}

allQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})